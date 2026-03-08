import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AdminUser {
  user_id: string;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  user_created_at: string;
  last_sign_in_at: string | null;
  plan_name: string | null;
  subscription_status: string | null;
  subscription_started_at: string | null;
  subscription_expires_at: string | null;
  user_role: string;
}

export const useAdminUsers = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.rpc("get_admin_users_full");
    if (!error && data) {
      setUsers(data as AdminUser[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const getUserIdByEmail = async (email: string): Promise<string | null> => {
    const { data } = await supabase.rpc("get_user_id_by_email", { _email: email });
    return data as string | null;
  };

  const getEmailByUserId = async (userId: string): Promise<string | null> => {
    const { data } = await supabase.rpc("get_email_by_user_id", { _user_id: userId });
    return data as string | null;
  };

  return { users, loading, fetchUsers, getUserIdByEmail, getEmailByUserId };
};
