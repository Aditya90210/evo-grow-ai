
-- 1. Tighten profiles SELECT policy: own profile + super admins only
DROP POLICY IF EXISTS "Profiles viewable by authenticated users" ON public.profiles;
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id OR public.has_role(auth.uid(), 'super_admin'::app_role));

-- 2. Remove user UPDATE on subscriptions to prevent privilege escalation
DROP POLICY IF EXISTS "Users can update their own subscription" ON public.subscriptions;

-- 3. SECURITY DEFINER cancellation function (only touches caller's row, only safe columns)
CREATE OR REPLACE FUNCTION public.cancel_my_subscription()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  UPDATE public.subscriptions
     SET status = 'cancelled',
         plan_name = 'starter',
         updated_at = now()
   WHERE user_id = auth.uid();
END;
$$;
REVOKE ALL ON FUNCTION public.cancel_my_subscription() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.cancel_my_subscription() TO authenticated;

-- 4. Add super_admin guards inside email-lookup RPCs
CREATE OR REPLACE FUNCTION public.get_email_by_user_id(_user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN public.has_role(auth.uid(), 'super_admin'::app_role)
    THEN (SELECT email::text FROM auth.users WHERE id = _user_id LIMIT 1)
    ELSE NULL
  END;
$$;

CREATE OR REPLACE FUNCTION public.get_user_id_by_email(_email text)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN public.has_role(auth.uid(), 'super_admin'::app_role)
    THEN (SELECT id FROM auth.users WHERE email = _email LIMIT 1)
    ELSE NULL
  END;
$$;

-- 5. Revoke EXECUTE from anon on SECURITY DEFINER functions
REVOKE ALL ON FUNCTION public.get_email_by_user_id(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_user_id_by_email(text) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_admin_users() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_admin_users_full() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_email_by_user_id(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_user_id_by_email(text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_admin_users() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_admin_users_full() TO authenticated;

-- Trigger-only / internal helpers: not callable by clients at all
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user_subscription() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- has_role is used inside RLS expressions; revoke anon (authenticated still needs it for RLS evaluation)
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

-- 6. Drop broad public listing policy on avatars bucket.
-- Avatar files remain accessible via their public URLs (bucket.public = true);
-- this only removes the ability to LIST objects through storage APIs.
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;

-- 7. Disable pg_graphql — this project uses PostgREST, not GraphQL.
-- Removing the extension eliminates GraphQL-based table exposure entirely.
DROP EXTENSION IF EXISTS pg_graphql;
