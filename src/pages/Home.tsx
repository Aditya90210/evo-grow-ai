import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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

interface Profile {
  display_name: string | null;
  avatar_url: string | null;
}

const Home = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiGenerationsUsed, setAiGenerationsUsed] = useState(12);

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
    // Scroll to relevant section or open modal
    const sectionMap: Record<string, string> = {
      "ai-content": "ai-generator",
      "social-post": "social-integrations",
      "landing-copy": "ai-generator",
      "funnel": "funnel-builder",
      "lead-form": "lead-forms",
      "connect-channel": "social-integrations",
    };
    const el = document.getElementById(sectionMap[action] || "");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground font-display">EVO Scalvex</h1>
              <p className="text-xs text-muted-foreground">Starter Plan • $49/mo</p>
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
        {/* 1️⃣ Welcome Section */}
        <WelcomeSection
          displayName={displayName}
          avatarUrl={profile?.avatar_url || ""}
          initials={getInitials()}
          aiGenerationsUsed={aiGenerationsUsed}
          activeCampaigns={1}
          connectedChannels={2}
          weeklyClicks={847}
          weeklyLeads={23}
          weeklyConversions={8}
        />

        {/* 2️⃣ Quick Actions */}
        <QuickActions onAction={handleQuickAction} />

        {/* 3️⃣ AI Content Generator & 4️⃣ Campaign Workspace */}
        <div className="grid lg:grid-cols-2 gap-8" id="ai-generator">
          <AIContentGenerator
            generationsUsed={aiGenerationsUsed}
            maxGenerations={50}
            onGenerate={() => setAiGenerationsUsed((prev) => Math.min(prev + 1, 50))}
          />
          <CampaignWorkspace />
        </div>

        {/* 5️⃣ Funnel Builder & 6️⃣ Lead Capture Forms */}
        <div className="grid lg:grid-cols-2 gap-8" id="funnel-builder">
          <div id="funnel-builder">
            <FunnelBuilder />
          </div>
          <div id="lead-forms">
            <LeadCaptureForms />
          </div>
        </div>

        {/* 7️⃣ Social Integrations & 8️⃣ Analytics */}
        <div className="grid lg:grid-cols-2 gap-8" id="social-integrations">
          <SocialIntegrations />
          <AnalyticsDashboard />
        </div>

        {/* 9️⃣ Storage & Usage & 🔟 Support */}
        <div className="grid lg:grid-cols-2 gap-8">
          <StorageUsageMonitor
            storageUsedGB={2.3}
            aiGenerationsUsed={aiGenerationsUsed}
            campaignsUsed={1}
          />
          <SupportHelp />
        </div>
      </main>
    </div>
  );
};

export default Home;
