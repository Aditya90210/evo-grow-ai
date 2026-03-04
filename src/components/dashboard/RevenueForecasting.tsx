import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertTriangle, Lightbulb, BarChart3, DollarSign, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const forecasts = [
  { period: "30 Days", revenue: "$142,800", growth: "+18%", confidence: 92, trend: "up" as const },
  { period: "60 Days", revenue: "$298,400", growth: "+24%", confidence: 85, trend: "up" as const },
  { period: "90 Days", revenue: "$468,200", growth: "+31%", confidence: 78, trend: "up" as const },
];

const channelProjections = [
  { channel: "Organic Search", current: "$38,200", projected: "$48,500", growth: "+27%" },
  { channel: "Paid Ads", current: "$24,800", projected: "$31,200", growth: "+26%" },
  { channel: "Email Campaigns", current: "$18,400", projected: "$22,800", growth: "+24%" },
  { channel: "Social Media", current: "$12,600", projected: "$16,900", growth: "+34%" },
  { channel: "Referrals", current: "$8,400", projected: "$11,200", growth: "+33%" },
];

const riskAlerts = [
  { level: "medium", message: "Email open rates declining 5% week-over-week. Recommend A/B testing subject lines.", action: "Optimize Emails" },
  { level: "low", message: "Organic traffic stable but competitors increasing ad spend. Consider defensive campaigns.", action: "Review Strategy" },
  { level: "high", message: "Top funnel conversion dropped 8% this week. Investigate landing page changes.", action: "Fix Funnel" },
];

const scenarios = [
  { name: "Conservative", revenue: "$128,400", description: "10% reduction in ad spend, current conversion rates" },
  { name: "Base Case", revenue: "$142,800", description: "Maintain current trajectory and optimization" },
  { name: "Aggressive", revenue: "$168,200", description: "20% increase in ad spend with funnel optimization" },
];

const RevenueForecasting = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Revenue Forecasting & Strategic Insights</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <BarChart3 className="w-4 h-4 mr-1" /> Full Report
          </Button>
        </div>
        <CardDescription>AI-powered revenue projections with scenario simulation</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forecast">
          <TabsList className="mb-4">
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="risks">Risk Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="forecast" className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {forecasts.map((f) => (
                <div key={f.period} className="p-4 rounded-lg bg-muted/30 text-center space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">{f.period}</p>
                  <p className="text-xl font-bold text-foreground">{f.revenue}</p>
                  <div className="flex items-center justify-center gap-1">
                    {f.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 text-destructive" />
                    )}
                    <span className="text-xs font-medium text-green-500">{f.growth}</span>
                  </div>
                  <div className="space-y-1">
                    <Progress value={f.confidence} className="h-1" />
                    <p className="text-[10px] text-muted-foreground">{f.confidence}% confidence</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI Growth Recommendation</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Increasing email campaign frequency by 2x and optimizing your top funnel could add an estimated $24,000 in the next 30 days. Your referral channel shows the highest growth potential.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-3">
            {channelProjections.map((ch) => (
              <div key={ch.channel} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm font-medium text-foreground">{ch.channel}</p>
                  <p className="text-xs text-muted-foreground">Current: {ch.current}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">{ch.projected}</p>
                  <p className="text-xs text-green-500">{ch.growth}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-3">
            {scenarios.map((s) => (
              <div key={s.name} className={`p-4 rounded-lg border space-y-2 ${s.name === "Base Case" ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-border/50"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{s.revenue}</span>
                </div>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Activity className="w-4 h-4 mr-1" /> Run Custom Simulation
            </Button>
          </TabsContent>

          <TabsContent value="risks" className="space-y-3">
            {riskAlerts.map((alert, i) => (
              <div key={i} className={`p-3 rounded-lg border space-y-2 ${
                alert.level === "high" ? "bg-destructive/5 border-destructive/30" :
                alert.level === "medium" ? "bg-yellow-500/5 border-yellow-500/30" :
                "bg-muted/30 border-border/50"
              }`}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`w-4 h-4 ${
                    alert.level === "high" ? "text-destructive" :
                    alert.level === "medium" ? "text-yellow-500" : "text-muted-foreground"
                  }`} />
                  <Badge variant={alert.level === "high" ? "destructive" : "secondary"} className="text-[10px]">
                    {alert.level.toUpperCase()}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{alert.message}</p>
                <Button variant="outline" size="sm">{alert.action}</Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RevenueForecasting;
