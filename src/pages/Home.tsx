import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Settings, LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { getPlanLimits } from "@/lib/planLimits";

import WelcomeSection from "@/components/dashboard/WelcomeSection";
import QuickActions from "@/components/dashboard/QuickActions";
import AIContentGenerator from "@/components/dashboard/AIContentGenerator";
import CampaignWorkspace from "@/components/dashboard/CampaignWorkspace";
import FunnelBuilder from "@/components/dashboard/FunnelBuilder";
import LeadCaptureForms from "@/components/dashboard/LeadCaptureForms";
import SocialIntegrations from "@/components/dashboard/SocialIntegrations";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";
import StorageUsageMonitor from "@/components/dashboard/StorageUsageMonitor";
import SupportHelp from "@/components/dashboard/SupportHelp";
import MiniCRM from "@/components/dashboard/MiniCRM";
import AutomationCenter from "@/components/dashboard/AutomationCenter";
import APIIntegrationCenter from "@/components/dashboard/APIIntegrationCenter";
import RevenueForecasting from "@/components/dashboard/RevenueForecasting";
import BehavioralAnalytics from "@/components/dashboard/BehavioralAnalytics";
import TeamManagement from "@/components/dashboard/TeamManagement";
import SecurityInfrastructure from "@/components/dashboard/SecurityInfrastructure";
import CrossDepartmentDashboard from "@/components/dashboard/CrossDepartmentDashboard";
import EnterpriseIntegrationHub from "@/components/dashboard/EnterpriseIntegrationHub";
import DedicatedAccountManager from "@/components/dashboard/DedicatedAccountManager";
import AIMarketIntelligence from "@/components/dashboard/AIMarketIntelligence";
import MultiBrandManager from "@/components/dashboard/MultiBrandManager";
import AIStrategicAdvisor from "@/components/dashboard/AIStrategicAdvisor";
import AssetLibrary from "@/components/dashboard/AssetLibrary";

interface Profile {
  display_name: string | null;
  avatar_url: string | null;
}

const Home = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const { currentPlan } = useSubscription();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiGenerationsUsed, setAiGenerationsUsed] = useState(12);

  const plan = getPlanLimits(currentPlan);
  const isUltimate = plan.name === "ultimate";
  const isEnterprise = plan.name === "enterprise" || isUltimate;
  const isBusiness = plan.name === "business" || isEnterprise;
  const isAdvanced = plan.name === "professional" || isBusiness;

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("display_name, avatar_url")
        .eq("id", user.id)
        .maybeSingle();
      if (data) setProfile(data);
      setLoading(false);
    };
    if (user) fetchProfile();
  }, [user]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const displayName = profile?.display_name || user?.email?.split("@")[0] || "User";
  const getInitials = () => {
    if (profile?.display_name) return profile.display_name.slice(0, 2).toUpperCase();
    if (user?.email) return user.email.slice(0, 2).toUpperCase();
    return "U";
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleQuickAction = (action: string) => {
    const sectionMap: Record<string, string> = {
      "ai-content": "ai-generator",
      "social-post": "social-integrations",
      "landing-copy": "ai-generator",
      "funnel": "funnel-builder",
      "lead-form": "lead-forms",
      "connect-channel": "social-integrations",
      "seo-blog": "ai-generator",
      "email-seq": "ai-generator",
      "ad-copy": "ai-generator",
      "campaign": "campaign-workspace",
      "automation": "automation-center",
      "multi-ad": "ai-generator",
      "ab-test": "campaign-workspace",
      "competitor": "ai-generator",
      "brand-voice": "ai-generator",
      "api-tools": "api-center",
      "journey-map": "behavioral-analytics",
      "revenue-forecast": "revenue-forecasting",
      "behavioral": "behavioral-analytics",
      "team-roles": "team-management",
      "cross-dept": "cross-department",
      "crm": "automation-center",
      "integrations": "enterprise-integrations",
      "compliance": "security-infrastructure",
      "custom-ai": "ai-generator",
      "market-intel": "market-intelligence",
      "multi-brand": "multi-brand",
      "strategic-advisor": "strategic-advisor",
      "asset-library": "asset-library",
    };
    const el = document.getElementById(sectionMap[action] || "");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground font-display">EVO Scalvex</h1>
              <p className="text-xs text-muted-foreground">{plan.label} • {plan.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard"><Settings className="w-5 h-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
        {/* 1️⃣ Executive / Business Intelligence Overview */}
        <WelcomeSection
          displayName={displayName}
          avatarUrl={profile?.avatar_url || ""}
          initials={getInitials()}
          aiGenerationsUsed={aiGenerationsUsed}
          activeCampaigns={isUltimate ? 42 : isEnterprise ? 24 : isBusiness ? 8 : isAdvanced ? 3 : 1}
          connectedChannels={isUltimate ? 120 : isEnterprise ? 48 : isBusiness ? 18 : isAdvanced ? 8 : 2}
          weeklyClicks={isUltimate ? 128400 : isEnterprise ? 48200 : isBusiness ? 12480 : isAdvanced ? 4280 : 847}
          weeklyLeads={isUltimate ? 4820 : isEnterprise ? 1842 : isBusiness ? 423 : isAdvanced ? 156 : 23}
          weeklyConversions={isUltimate ? 1284 : isEnterprise ? 486 : isBusiness ? 128 : isAdvanced ? 42 : 8}
          plan={plan}
          activeFunnels={isUltimate ? 86 : isEnterprise ? 38 : isBusiness ? 12 : isAdvanced ? 4 : 1}
          revenueTracked={isUltimate ? "$1,284,600" : isEnterprise ? "$509,400" : isBusiness ? "$94,200" : isAdvanced ? "$28,400" : "$0"}
          conversionRate={isUltimate ? 14.2 : isEnterprise ? 11.8 : isBusiness ? 10.2 : isAdvanced ? 8.4 : 6.9}
          bestCampaign={isUltimate ? "Ultimate Growth Q1 Multi-Brand" : isEnterprise ? "Enterprise Growth Q1" : isBusiness ? "Revenue Growth Q1" : isAdvanced ? "Product Launch Q1" : undefined}
        />

        {/* 2️⃣ Quick Action Panel */}
        <QuickActions onAction={handleQuickAction} plan={plan} />

        {/* Cross-Department / Command Dashboard (Enterprise+) */}
        {isEnterprise && (
          <div id="cross-department">
            <CrossDepartmentDashboard />
          </div>
        )}

        {/* 4️⃣ AI Market Intelligence (Ultimate) */}
        {isUltimate && (
          <div id="market-intelligence">
            <AIMarketIntelligence />
          </div>
        )}

        {/* 3️⃣ AI Content Engine + Campaign Command Center */}
        <div className="grid lg:grid-cols-2 gap-8" id="ai-generator">
          <AIContentGenerator
            generationsUsed={aiGenerationsUsed}
            maxGenerations={plan.aiGenerations}
            onGenerate={() => setAiGenerationsUsed((prev) => Math.min(prev + 1, plan.aiGenerations))}
            plan={plan}
          />
          <div id="campaign-workspace">
            <CampaignWorkspace plan={plan} />
          </div>
        </div>

        {/* 6️⃣ Multi-Brand Management + AI Strategic Advisor (Ultimate) */}
        {isUltimate && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div id="multi-brand">
              <MultiBrandManager />
            </div>
            <div id="strategic-advisor">
              <AIStrategicAdvisor />
            </div>
          </div>
        )}

        {/* 5️⃣ Funnel & CRO System */}
        <div className="grid lg:grid-cols-2 gap-8" id="funnel-builder">
          <FunnelBuilder plan={plan} />
          <div id="lead-forms">
            <LeadCaptureForms />
          </div>
        </div>

        {/* CRM & Automation */}
        {plan.hasCRM && (
          <div className="grid lg:grid-cols-2 gap-8" id="automation-center">
            <MiniCRM plan={plan} />
            {plan.hasAutomation && <AutomationCenter plan={plan} />}
          </div>
        )}

        {/* 9️⃣ Asset Library (Ultimate) */}
        {isUltimate && (
          <div id="asset-library">
            <AssetLibrary />
          </div>
        )}

        {/* Behavioral Analytics */}
        {plan.hasBehavioralAnalytics && (
          <div id="behavioral-analytics">
            <BehavioralAnalytics />
          </div>
        )}

        {/* Revenue Forecasting */}
        {plan.hasRevenueForecasting && (
          <div id="revenue-forecasting">
            <RevenueForecasting />
          </div>
        )}

        {/* Enterprise Integration Hub */}
        {isEnterprise && (
          <div id="enterprise-integrations">
            <EnterpriseIntegrationHub />
          </div>
        )}

        {/* Team & Role Management */}
        {plan.hasTeamManagement && (
          <div id="team-management">
            <TeamManagement plan={plan} />
          </div>
        )}

        {/* API & Integration Center - Professional+ (non-Enterprise) */}
        {plan.hasAPIAccess && !isEnterprise && (
          <div id="api-center">
            <APIIntegrationCenter />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8" id="social-integrations">
          <SocialIntegrations />
          <AnalyticsDashboard plan={plan} />
        </div>

        {/* Security & Infrastructure + Usage Monitor */}
        <div className="grid lg:grid-cols-2 gap-8" id="security-infrastructure">
          {plan.hasSSO ? (
            <SecurityInfrastructure plan={plan} />
          ) : (
            <StorageUsageMonitor
              storageUsedGB={isAdvanced ? 34.7 : 2.3}
              aiGenerationsUsed={aiGenerationsUsed}
              campaignsUsed={isAdvanced ? 3 : 1}
              plan={plan}
              activeAutomations={isAdvanced ? 5 : 0}
              apiUsage={isAdvanced ? 1247 : 0}
            />
          )}
          {plan.hasSSO && (
            <StorageUsageMonitor
              storageUsedGB={isUltimate ? 8420 : isEnterprise ? 1240 : 247}
              aiGenerationsUsed={aiGenerationsUsed}
              campaignsUsed={isUltimate ? 42 : isEnterprise ? 24 : 8}
              plan={plan}
              activeAutomations={isUltimate ? 128 : isEnterprise ? 42 : 12}
              apiUsage={isUltimate ? 842000 : isEnterprise ? 248320 : 4820}
            />
          )}
          {!plan.hasSSO && <SupportHelp plan={plan} />}
        </div>

        {/* Dedicated Account Manager / Support */}
        {isEnterprise ? (
          <DedicatedAccountManager />
        ) : plan.hasSSO ? (
          <SupportHelp plan={plan} />
        ) : null}
      </main>
    </div>
  );
};

export default Home;
