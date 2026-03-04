import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, MousePointerClick, FileText, DollarSign, Download, Lightbulb, GitBranch } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PlanLimits } from "@/lib/planLimits";

interface AnalyticsDashboardProps {
  plan: PlanLimits;
}

const topContent = [
  { title: "Product Launch Blog", views: 2842, conversions: 123, revenue: "$4,200" },
  { title: "Multi-Variant Ad Campaign", views: 1612, conversions: 89, revenue: "$3,100" },
  { title: "Email Campaign Sequence", views: 945, conversions: 67, revenue: "$2,800" },
];

const AnalyticsDashboard = ({ plan }: AnalyticsDashboardProps) => {
  const isPro = plan.name === "professional" || plan.name === "business";

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">
              {isPro ? "Advanced Analytics & Optimization" : "Analytics Dashboard"}
            </CardTitle>
          </div>
          {isPro && (
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" /> Export
            </Button>
          )}
        </div>
        <CardDescription>
          {isPro ? "AI-driven insights with predictive forecasting" : "Track your performance at a glance"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {isPro && <TabsTrigger value="insights">AI Insights</TabsTrigger>}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className={`grid ${isPro ? "grid-cols-4" : "grid-cols-3"} gap-4`}>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">12,480</p>
                <p className="text-xs text-muted-foreground">Total Traffic</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <MousePointerClick className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">8.4%</p>
                <p className="text-xs text-muted-foreground">Conversion Rate</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">279</p>
                <p className="text-xs text-muted-foreground">Total Conversions</p>
              </div>
              {isPro && (
                <div className="text-center p-4 rounded-lg bg-muted/20">
                  <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">$28,400</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Top Performing Content</h4>
              <div className="space-y-3">
                {topContent.map((content) => (
                  <div key={content.title} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{content.title}</span>
                      <span className="text-muted-foreground">
                        {content.views} views
                        {isPro && ` • ${content.revenue}`}
                      </span>
                    </div>
                    <Progress value={(content.conversions / content.views) * 100 * 10} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {isPro && (
            <TabsContent value="insights" className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI Optimization Suggestions</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>📈 Your "Product Launch Blog" has the highest conversion rate. Create more content in this style.</li>
                  <li>🎯 Funnel drop-off at Sales Page is 50%. Consider A/B testing the headline copy.</li>
                  <li>💡 Predicted revenue next month: $34,200 (+20%) if current trends continue.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted/20 text-center">
                  <GitBranch className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">3.2x</p>
                  <p className="text-xs text-muted-foreground">Campaign ROI</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 text-center">
                  <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">$34.2K</p>
                  <p className="text-xs text-muted-foreground">Predicted Revenue</p>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;
