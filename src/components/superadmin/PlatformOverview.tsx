import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CreditCard, Activity, Brain, HardDrive, Globe, TrendingUp, Server, Database, Cpu } from "lucide-react";

interface PlatformStats {
  totalUsers: number;
  activeUsers: number;
  activeSubscriptions: number;
  mrr: number;
  arr: number;
  newUsersToday: number;
  aiGenerationsToday: number;
  activeCampaigns: number;
  storageUsedGB: number;
  apiRequestsToday: number;
}

const PlatformOverview = () => {
  const stats: PlatformStats = {
    totalUsers: 2847,
    activeUsers: 1923,
    activeSubscriptions: 1456,
    mrr: 284750,
    arr: 3417000,
    newUsersToday: 34,
    aiGenerationsToday: 12847,
    activeCampaigns: 892,
    storageUsedGB: 4.2,
    apiRequestsToday: 89432,
  };

  const metrics = [
    { label: "Total Users", value: stats.totalUsers.toLocaleString(), icon: Users, trend: "+12%" },
    { label: "Active Users", value: stats.activeUsers.toLocaleString(), icon: Activity, trend: "+8%" },
    { label: "Active Subscriptions", value: stats.activeSubscriptions.toLocaleString(), icon: CreditCard, trend: "+5%" },
    { label: "MRR", value: `$${(stats.mrr / 1000).toFixed(1)}K`, icon: TrendingUp, trend: "+15%" },
    { label: "ARR", value: `$${(stats.arr / 1000000).toFixed(1)}M`, icon: TrendingUp, trend: "+18%" },
    { label: "New Users Today", value: stats.newUsersToday.toString(), icon: Users, trend: "+22%" },
    { label: "AI Generations Today", value: stats.aiGenerationsToday.toLocaleString(), icon: Brain, trend: "+30%" },
    { label: "Active Campaigns", value: stats.activeCampaigns.toString(), icon: Globe, trend: "+7%" },
    { label: "Storage Used", value: `${stats.storageUsedGB} TB`, icon: HardDrive, trend: "+3%" },
    { label: "API Requests Today", value: stats.apiRequestsToday.toLocaleString(), icon: Globe, trend: "+25%" },
  ];

  const healthIndicators = [
    { label: "Server Performance", status: "healthy", icon: Server },
    { label: "AI System Load", status: "moderate", icon: Cpu },
    { label: "Database Activity", status: "healthy", icon: Database },
  ];

  return (
    <div id="platform-overview" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Platform Overview</h2>
        <p className="text-muted-foreground">Real-time platform health and metrics</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <m.icon className="h-4 w-4 text-primary" />
                <Badge variant="secondary" className="text-xs">{m.trend}</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {healthIndicators.map((h) => (
          <Card key={h.label} className="border-border/50">
            <CardContent className="p-4 flex items-center gap-3">
              <h.icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">{h.label}</p>
                <Badge variant={h.status === "healthy" ? "default" : "secondary"} className="text-xs mt-1">
                  {h.status === "healthy" ? "● Healthy" : "● Moderate"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformOverview;
