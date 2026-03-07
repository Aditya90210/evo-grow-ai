import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const useSuperAdmin = () => {
  const { user } = useAuth();
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      if (!user) {
        setIsSuperAdmin(false);
        setLoading(false);
        return;
      }
      const { data } = await supabase.rpc("has_role", {
        _user_id: user.id,
        _role: "super_admin",
      });
      setIsSuperAdmin(!!data);
      setLoading(false);
    };
    checkRole();
  }, [user]);

  const logAction = async (action: string, details: Record<string, unknown> = {}) => {
    if (!user) return;
    await supabase.from("system_logs").insert({
      user_id: user.id,
      action,
      details,
    });
  };

  return { isSuperAdmin, loading, logAction };
};
