
-- Allow super_admin to update any subscription (for upgrade/downgrade)
CREATE POLICY "Super admins can update any subscription"
ON public.subscriptions
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'super_admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'super_admin'::app_role));

-- Allow super_admin to view all subscriptions
CREATE POLICY "Super admins can view all subscriptions"
ON public.subscriptions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'super_admin'::app_role));
