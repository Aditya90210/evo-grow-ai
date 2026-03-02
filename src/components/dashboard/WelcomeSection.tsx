import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, MousePointerClick, Users, TrendingUp, Target, DollarSign, Trophy, Lightbulb } from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface WelcomeSectionProps {
  displayName: string;
  avatarUrl: string;
  initials: string;
  aiGenerationsUsed: number;
  activeCampaigns: number;
  connectedChannels: number;
  weeklyClicks: number;
  weeklyLeads: number;
  weeklyConversions: number;
  plan: PlanLimits;
  activeFunnels?: number;
  revenueTracked?: string;
  conversionRate?: number;
  bestCampaign?: string;
}

const WelcomeSection = ({
  displayName,
  avatarUrl,
  initials,
  aiGenerationsUsed,
  activeCampaigns,
  connectedChannels,
  weeklyClicks,
  weeklyLeads,
  weeklyConversions,
  plan,
  activeFunnels = 0,
  revenueTracked = "$0",
  conversionRate = 0,
  bestCampaign = "—",
}: WelcomeSectionProps) => {
  const maxCampaignsNum = plan.maxCampaigns === "Unlimited" ? 999 : plan.maxCampaigns;
  const maxFunnelsNum = plan.maxFunnels === "Unlimited" ? 999 : plan.maxFunnels;
  const campaignLabel = plan.maxCampaigns === "Unlimited" ? `${activeCampaigns}` : `${activeCampaigns}/${plan.maxCampaigns}`;
  const funnelLabel = plan.maxFunnels === "Unlimited" ? `${activeFunnels}` : `${activeFunnels}/${plan.maxFunnels}`;

  const isPro = plan.name === "professional";

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={avatarUrl} alt={displayName} />
          <AvatarFallback className="text-xl bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Welcome back, {displayName}
          </h1>
          <p className="text-muted-foreground mt-1">{plan.tagline}</p>
          <Badge variant="secondary" className="mt-2">
            <Zap className="w-3 h-3 mr-1" /> {plan.label} • {plan.price}
          </Badge>
        </div>
      </div>

      <div className={`grid grid-cols-2 ${isPro ? "lg:grid-cols-4 xl:grid-cols-4" : "lg:grid-cols-4"} gap-4`}>
        <Card className="border-border/50">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">AI Generations</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{aiGenerationsUsed}/{plan.aiGenerations}</p>
            <Progress value={(aiGenerationsUsed / plan.aiGenerations) * 100} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Active Campaigns</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{campaignLabel}</p>
            {plan.maxCampaigns !== "Unlimited" && (
              <Progress value={(activeCampaigns / maxCampaignsNum) * 100} className="mt-2 h-1.5" />
            )}
            {plan.maxCampaigns === "Unlimited" && (
              <p className="text-xs text-muted-foreground mt-2">Unlimited</p>
            )}
          </CardContent>
        </Card>

        {isPro ? (
          <>
            <Card className="border-border/50">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
                <p className="text-2xl font-bold text-foreground">{conversionRate}%</p>
                <p className="text-xs text-muted-foreground mt-2">Overall</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Revenue Tracked</p>
                </div>
                <p className="text-2xl font-bold text-foreground">{revenueTracked}</p>
                <p className="text-xs text-muted-foreground mt-2">This month</p>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card className="border-border/50">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Connected Channels</p>
                </div>
                <p className="text-2xl font-bold text-foreground">{connectedChannels}/{plan.maxIntegrations}</p>
                <Progress value={(connectedChannels / plan.maxIntegrations) * 100} className="mt-2 h-1.5" />
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MousePointerClick className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Weekly Performance</p>
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                  <span><strong className="text-foreground">{weeklyClicks}</strong> Clicks</span>
                  <span><strong className="text-foreground">{weeklyLeads}</strong> Leads</span>
                  <span><strong className="text-foreground">{weeklyConversions}</strong> Conv.</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Professional extra stats row */}
      {isPro && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/50">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <p className="text-xs text-muted-foreground">Leads This Week</p>
              </div>
              <p className="text-xl font-bold text-foreground">{weeklyLeads}</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <MousePointerClick className="w-4 h-4 text-primary" />
                <p className="text-xs text-muted-foreground">Active Funnels</p>
              </div>
              <p className="text-xl font-bold text-foreground">{funnelLabel}</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-primary" />
                <p className="text-xs text-muted-foreground">Best Campaign</p>
              </div>
              <p className="text-sm font-bold text-foreground truncate">{bestCampaign}</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4 text-primary" />
                <p className="text-xs text-muted-foreground">AI Suggestions</p>
              </div>
              <p className="text-xl font-bold text-foreground">3</p>
              <p className="text-[10px] text-muted-foreground">Live optimization tips</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
