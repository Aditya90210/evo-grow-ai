import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface Subscription {
  id: string;
  user_id: string;
  plan_name: string;
  billing_cycle: string;
  status: string;
  started_at: string;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export const planFeatures: Record<string, {
  label: string;
  features: string[];
  teamMembers: string;
  reportsLimit: string;
  supportLevel: string;
  hasExecutionAutomation: boolean;
  hasCustomIntegrations: boolean;
  hasApiAccess: boolean;
  hasWhiteLabel: boolean;
  hasCustomAI: boolean;
  hasDedicatedManager: boolean;
}> = {
  starter: {
    label: "Starter",
    features: ["Business Twin (Basic)", "5 AI Strategy Reports/month", "Basic Decision Framework", "Email Support", "1 Team Member"],
    teamMembers: "1",
    reportsLimit: "5/month",
    supportLevel: "Email",
    hasExecutionAutomation: false,
    hasCustomIntegrations: false,
    hasApiAccess: false,
    hasWhiteLabel: false,
    hasCustomAI: false,
    hasDedicatedManager: false,
  },
  growth: {
    label: "Growth",
    features: ["Business Twin (Advanced)", "Unlimited AI Strategy Reports", "Full Decision Intelligence", "Execution Automation", "Priority Support", "5 Team Members"],
    teamMembers: "5",
    reportsLimit: "Unlimited",
    supportLevel: "Priority",
    hasExecutionAutomation: true,
    hasCustomIntegrations: false,
    hasApiAccess: false,
    hasWhiteLabel: false,
    hasCustomAI: false,
    hasDedicatedManager: false,
  },
  professional: {
    label: "Professional",
    features: ["Everything in Growth", "10 Team Members", "Custom Integrations", "Advanced Analytics", "Dedicated Support", "API Access"],
    teamMembers: "10",
    reportsLimit: "Unlimited",
    supportLevel: "Dedicated",
    hasExecutionAutomation: true,
    hasCustomIntegrations: true,
    hasApiAccess: true,
    hasWhiteLabel: false,
    hasCustomAI: false,
    hasDedicatedManager: false,
  },
  business: {
    label: "Business",
    features: ["Everything in Professional", "25 Team Members", "White-label Options", "Custom AI Training", "Priority Phone Support", "SLA Guarantee"],
    teamMembers: "25",
    reportsLimit: "Unlimited",
    supportLevel: "Phone",
    hasExecutionAutomation: true,
    hasCustomIntegrations: true,
    hasApiAccess: true,
    hasWhiteLabel: true,
    hasCustomAI: true,
    hasDedicatedManager: false,
  },
  enterprise: {
    label: "Enterprise",
    features: ["Everything in Business", "Unlimited Team Members", "Dedicated Success Manager", "On-premise Deployment", "Custom Contracts", "99.9% Uptime SLA"],
    teamMembers: "Unlimited",
    reportsLimit: "Unlimited",
    supportLevel: "Premium",
    hasExecutionAutomation: true,
    hasCustomIntegrations: true,
    hasApiAccess: true,
    hasWhiteLabel: true,
    hasCustomAI: true,
    hasDedicatedManager: true,
  },
  ultimate: {
    label: "Ultimate",
    features: ["Everything in Enterprise", "24/7 Priority Support", "Custom Feature Development", "Dedicated Infrastructure", "Executive Business Reviews", "Full Customization"],
    teamMembers: "Unlimited",
    reportsLimit: "Unlimited",
    supportLevel: "24/7",
    hasExecutionAutomation: true,
    hasCustomIntegrations: true,
    hasApiAccess: true,
    hasWhiteLabel: true,
    hasCustomAI: true,
    hasDedicatedManager: true,
  },
};

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!error && data) {
        setSubscription(data as Subscription);
      }
      setLoading(false);
    };

    fetchSubscription();
  }, [user]);

  const currentPlan = subscription?.plan_name || "starter";
  const planInfo = planFeatures[currentPlan] || planFeatures.starter;

  return { subscription, loading, currentPlan, planInfo };
};
