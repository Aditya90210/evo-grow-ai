
-- Function to get all users with their emails for admin panels
CREATE OR REPLACE FUNCTION public.get_admin_users()
RETURNS TABLE(
  user_id uuid,
  email text,
  display_name text,
  avatar_url text,
  created_at timestamptz,
  last_sign_in_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    au.id as user_id,
    au.email::text as email,
    p.display_name,
    p.avatar_url,
    au.created_at,
    au.last_sign_in_at
  FROM auth.users au
  LEFT JOIN public.profiles p ON p.id = au.id
  WHERE has_role(auth.uid(), 'super_admin'::app_role)
  ORDER BY au.created_at DESC;
$$;

-- Function to convert email to user_id
CREATE OR REPLACE FUNCTION public.get_user_id_by_email(_email text)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id FROM auth.users WHERE email = _email LIMIT 1;
$$;

-- Function to get email by user_id (for display purposes)
CREATE OR REPLACE FUNCTION public.get_email_by_user_id(_user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT email::text FROM auth.users WHERE id = _user_id LIMIT 1;
$$;

-- Function to get admin users with their subscriptions and roles
CREATE OR REPLACE FUNCTION public.get_admin_users_full()
RETURNS TABLE(
  user_id uuid,
  email text,
  display_name text,
  avatar_url text,
  user_created_at timestamptz,
  last_sign_in_at timestamptz,
  plan_name text,
  subscription_status text,
  subscription_started_at timestamptz,
  subscription_expires_at timestamptz,
  user_role text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    au.id as user_id,
    au.email::text as email,
    p.display_name,
    p.avatar_url,
    au.created_at as user_created_at,
    au.last_sign_in_at,
    s.plan_name,
    s.status as subscription_status,
    s.started_at as subscription_started_at,
    s.expires_at as subscription_expires_at,
    COALESCE(ur.role::text, 'user') as user_role
  FROM auth.users au
  LEFT JOIN public.profiles p ON p.id = au.id
  LEFT JOIN public.subscriptions s ON s.user_id = au.id
  LEFT JOIN public.user_roles ur ON ur.user_id = au.id
  WHERE has_role(auth.uid(), 'super_admin'::app_role)
  ORDER BY au.created_at DESC;
$$;
