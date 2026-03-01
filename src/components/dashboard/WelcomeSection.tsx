import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, MousePointerClick, Users, TrendingUp } from "lucide-react";

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
}: WelcomeSectionProps) => {
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
          <p className="text-muted-foreground mt-1">Let's build momentum today.</p>
          <Badge variant="secondary" className="mt-2">
            <Zap className="w-3 h-3 mr-1" /> Starter Plan
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">AI Generations</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{aiGenerationsUsed}/50</p>
            <Progress value={(aiGenerationsUsed / 50) * 100} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Active Campaigns</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{activeCampaigns}/1</p>
            <Progress value={activeCampaigns * 100} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Connected Channels</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{connectedChannels}/3</p>
            <Progress value={(connectedChannels / 3) * 100} className="mt-2 h-1.5" />
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
      </div>
    </div>
  );
};

export default WelcomeSection;
