import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, MousePointerClick, FileText } from "lucide-react";

const topContent = [
  { title: "Product Launch Blog", views: 842, conversions: 23 },
  { title: "Instagram Ad #3", views: 612, conversions: 18 },
  { title: "Welcome Email Sequence", views: 445, conversions: 31 },
];

const AnalyticsDashboard = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
        </div>
        <CardDescription>Track your performance at a glance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-muted/20">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">3,240</p>
            <p className="text-xs text-muted-foreground">Total Traffic</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/20">
            <MousePointerClick className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">6.9%</p>
            <p className="text-xs text-muted-foreground">Conversion Rate</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/20">
            <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">72</p>
            <p className="text-xs text-muted-foreground">Total Conversions</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Top Performing Content</h4>
          <div className="space-y-3">
            {topContent.map((content) => (
              <div key={content.title} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{content.title}</span>
                  <span className="text-muted-foreground">{content.views} views</span>
                </div>
                <Progress value={(content.conversions / content.views) * 100 * 10} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-muted/20">
          <h4 className="text-sm font-medium text-foreground mb-2">Weekly Summary</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Page Views</span>
              <span className="font-medium text-foreground">1,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Unique Visitors</span>
              <span className="font-medium text-foreground">623</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg. Session</span>
              <span className="font-medium text-foreground">2m 34s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bounce Rate</span>
              <span className="font-medium text-foreground">38.2%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;
