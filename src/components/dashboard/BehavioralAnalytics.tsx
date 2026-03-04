import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Eye, MousePointerClick, TrendingDown, AlertTriangle, Lightbulb, Map, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const journeyStages = [
  { name: "Awareness", users: 12480, percentage: 100 },
  { name: "Interest", users: 8736, percentage: 70 },
  { name: "Consideration", users: 4992, percentage: 40 },
  { name: "Intent", users: 2496, percentage: 20 },
  { name: "Purchase", users: 1248, percentage: 10 },
  { name: "Retention", users: 936, percentage: 7.5 },
];

const behaviorEvents = [
  { event: "Page View - Pricing", count: 3420, trend: "+12%", trendUp: true },
  { event: "CTA Click - Start Trial", count: 892, trend: "+8%", trendUp: true },
  { event: "Feature Page Visit", count: 2156, trend: "-3%", trendUp: false },
  { event: "Blog Read > 3 min", count: 1840, trend: "+15%", trendUp: true },
  { event: "Demo Request", count: 234, trend: "+22%", trendUp: true },
];

const bottlenecks = [
  { location: "Pricing Page → Checkout", dropOff: "62%", impact: "high", suggestion: "Simplify pricing tiers and add social proof near CTA" },
  { location: "Landing Page → Sign Up", dropOff: "45%", impact: "medium", suggestion: "Test shorter form with progressive disclosure" },
  { location: "Onboarding Step 3 → 4", dropOff: "38%", impact: "medium", suggestion: "Add contextual help tooltips and progress indicator" },
];

const heatmapZones = [
  { zone: "Hero Section CTA", clicks: 2840, engagement: "High", score: 92 },
  { zone: "Feature Cards", clicks: 1620, engagement: "Medium", score: 68 },
  { zone: "Testimonials", clicks: 890, engagement: "Medium", score: 54 },
  { zone: "Pricing Toggle", clicks: 3200, engagement: "Very High", score: 96 },
  { zone: "Footer Links", clicks: 340, engagement: "Low", score: 22 },
];

const BehavioralAnalytics = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Behavioral Analytics Engine</CardTitle>
          </div>
          <Badge variant="secondary" className="text-xs">Live Tracking</Badge>
        </div>
        <CardDescription>User behavior tracking, journey visualization, and conversion optimization</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="journey">
          <TabsList className="mb-4">
            <TabsTrigger value="journey">Customer Journey</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
            <TabsTrigger value="bottlenecks">Bottlenecks</TabsTrigger>
          </TabsList>

          <TabsContent value="journey" className="space-y-4">
            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              {journeyStages.map((stage, i) => (
                <div key={stage.name} className="flex items-center gap-1">
                  <div className="min-w-[100px] p-3 rounded-lg bg-muted/30 text-center">
                    <p className="text-[10px] text-muted-foreground font-medium">{stage.name}</p>
                    <p className="text-sm font-bold text-foreground">{stage.users.toLocaleString()}</p>
                    <Progress value={stage.percentage} className="h-1 mt-1" />
                    <p className="text-[10px] text-primary mt-1">{stage.percentage}%</p>
                  </div>
                  {i < journeyStages.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />}
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI Insight</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Your biggest drop-off occurs between Interest → Consideration (30% loss). Implementing targeted retargeting ads and case studies could recover an estimated 15% of lost prospects.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-2">
            {behaviorEvents.map((ev) => (
              <div key={ev.event} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <MousePointerClick className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{ev.event}</p>
                    <p className="text-xs text-muted-foreground">{ev.count.toLocaleString()} events</p>
                  </div>
                </div>
                <Badge variant={ev.trendUp ? "secondary" : "destructive"} className="text-[10px]">
                  {ev.trend}
                </Badge>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="heatmap" className="space-y-3">
            {heatmapZones.map((zone) => (
              <div key={zone.zone} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3 text-primary" />
                    <span className="text-foreground">{zone.zone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{zone.clicks.toLocaleString()} clicks</span>
                    <Badge variant="secondary" className="text-[10px]">{zone.engagement}</Badge>
                  </div>
                </div>
                <Progress value={zone.score} className="h-1.5" />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="bottlenecks" className="space-y-3">
            {bottlenecks.map((b, i) => (
              <div key={i} className={`p-3 rounded-lg border space-y-2 ${
                b.impact === "high" ? "bg-destructive/5 border-destructive/30" : "bg-muted/30 border-border/50"
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className={`w-4 h-4 ${b.impact === "high" ? "text-destructive" : "text-yellow-500"}`} />
                    <span className="text-sm font-medium text-foreground">{b.location}</span>
                  </div>
                  <Badge variant={b.impact === "high" ? "destructive" : "secondary"} className="text-[10px]">
                    {b.dropOff} drop-off
                  </Badge>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-3 h-3 text-primary mt-0.5" />
                  <p className="text-xs text-muted-foreground">{b.suggestion}</p>
                </div>
                <Button variant="outline" size="sm">Optimize Now</Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BehavioralAnalytics;
