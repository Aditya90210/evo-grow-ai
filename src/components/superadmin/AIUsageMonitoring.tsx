import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Brain, Cpu, TrendingUp, Users, AlertTriangle, RefreshCw } from "lucide-react";

const aiMetrics = [
  { label: "Total AI Generations Today", value: "12,847", icon: Brain, trend: "+30%" },
  { label: "AI Server Load", value: "67%", icon: Cpu, trend: "+5%" },
  { label: "Avg Generations/User", value: "6.7", icon: Users, trend: "+12%" },
  { label: "Peak Usage Hour", value: "2:00 PM", icon: TrendingUp, trend: "EST" },
];

const usageByPlan = [
  { plan: "Ultimate", generations: 5420, users: 24, avgPerUser: 226 },
  { plan: "Enterprise", generations: 3890, users: 30, avgPerUser: 130 },
  { plan: "Business", generations: 2140, users: 120, avgPerUser: 18 },
  { plan: "Professional", generations: 1120, users: 340, avgPerUser: 3 },
  { plan: "Starter", generations: 277, users: 942, avgPerUser: 0.3 },
];

const topAIUsers = [
  { name: "Sarah Chen", plan: "Ultimate", generations: 1847, status: "normal" },
  { name: "Marcus Rivera", plan: "Enterprise", generations: 932, status: "normal" },
  { name: "Bot Account #3", plan: "Starter", generations: 892, status: "flagged" },
  { name: "Lisa Wong", plan: "Business", generations: 456, status: "normal" },
  { name: "David Kim", plan: "Ultimate", generations: 423, status: "normal" },
];

const AIUsageMonitoring = () => {
  const [aiEnabled, setAiEnabled] = useState(true);

  return (
    <div id="ai-usage" className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">AI Usage Monitoring</h2>
          <p className="text-muted-foreground">Monitor and control AI system usage</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">AI System</span>
          <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
          <Badge variant={aiEnabled ? "default" : "destructive"}>{aiEnabled ? "Active" : "Disabled"}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {aiMetrics.map((m) => (
          <Card key={m.label} className="border-border/50">
            <CardContent className="p-4">
              <m.icon className="h-5 w-5 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <Badge variant="secondary" className="text-xs mt-1">{m.trend}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle>Usage by Plan Tier</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {usageByPlan.map((u) => (
                <div key={u.plan} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div>
                    <p className="text-sm font-medium text-foreground">{u.plan}</p>
                    <p className="text-xs text-muted-foreground">{u.users} users</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{u.generations.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{u.avgPerUser} avg/user</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle>Top AI Users</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topAIUsers.map((u) => (
                <div key={u.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2">
                    {u.status === "flagged" && <AlertTriangle className="h-4 w-4 text-destructive" />}
                    <div>
                      <p className="text-sm font-medium text-foreground">{u.name}</p>
                      <Badge variant="outline" className="text-xs">{u.plan}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-foreground">{u.generations.toLocaleString()}</p>
                    {u.status === "flagged" && <Button variant="destructive" size="sm">Limit</Button>}
                    <Button variant="ghost" size="sm"><RefreshCw className="h-3 w-3" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIUsageMonitoring;
