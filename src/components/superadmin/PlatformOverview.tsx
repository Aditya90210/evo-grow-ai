import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CreditCard, Activity, Brain, HardDrive, Globe, TrendingUp, Server, Database, Cpu, Loader2 } from "lucide-react";
import { useAdminUsers } from "@/hooks/useAdminUsers";

const PlatformOverview = () => {
  const { users, loading } = useAdminUsers();

  const totalUsers = users.length;
  const activeSubscriptions = users.filter((u) => u.subscription_status === "active").length;

  const metrics = [
    { label: "Total Users", value: totalUsers.toLocaleString(), icon: Users, trend: "live" },
    { label: "Active Subscriptions", value: activeSubscriptions.toLocaleString(), icon: CreditCard, trend: "live" },
    { label: "MRR", value: "$284.8K", icon: TrendingUp, trend: "+15%" },
    { label: "ARR", value: "$3.4M", icon: TrendingUp, trend: "+18%" },
    { label: "AI Generations Today", value: "12,847", icon: Brain, trend: "+30%" },
    { label: "Active Campaigns", value: "892", icon: Globe, trend: "+7%" },
    { label: "Storage Used", value: "4.2 TB", icon: HardDrive, trend: "+3%" },
    { label: "API Requests Today", value: "89,432", icon: Globe, trend: "+25%" },
  ];

  const healthIndicators = [
    { label: "Server Performance", status: "healthy", icon: Server },
    { label: "AI System Load", status: "moderate", icon: Cpu },
    { label: "Database Activity", status: "healthy", icon: Database },
  ];

  if (loading) {
    return (
      <div id="platform-overview" className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div id="platform-overview" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Platform Overview</h2>
        <p className="text-muted-foreground">Real-time platform health and metrics</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
