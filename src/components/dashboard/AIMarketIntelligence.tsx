import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Globe, FileText, Lightbulb, BarChart3, Target } from "lucide-react";

const modules = [
  { icon: Search, label: "Competitor Analysis", desc: "Track competitor strategies, content, and positioning", status: "Ready" },
  { icon: TrendingUp, label: "Market Opportunity Detection", desc: "AI-identified growth opportunities in your market", status: "3 New" },
  { icon: Users, label: "Audience Behavior Analysis", desc: "Deep-dive into customer segments and behaviors", status: "Active" },
  { icon: Globe, label: "Trend Prediction", desc: "Predictive trend analysis for your industry", status: "Updated" },
  { icon: FileText, label: "Industry Intelligence Reports", desc: "Auto-generated reports with actionable insights", status: "5 Reports" },
  { icon: Target, label: "Positioning Analyzer", desc: "Your competitive positioning vs market leaders", status: "Ready" },
];

const insights = [
  { title: "Rising demand detected", detail: "AI-powered marketing tools up 34% in search volume", impact: "High" },
  { title: "Competitor gap found", detail: "No major competitor offers video script automation", impact: "Critical" },
  { title: "Audience shift", detail: "Your target demo is 18% more active on LinkedIn this quarter", impact: "Medium" },
];

const AIMarketIntelligence = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            AI Market Intelligence System
          </CardTitle>
          <Badge variant="outline" className="text-xs">Ultimate</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((m) => (
            <Button key={m.label} variant="outline" className="flex flex-col items-start h-auto py-4 px-4 gap-1 text-left">
              <div className="flex items-center gap-2 w-full">
                <m.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{m.label}</span>
                <Badge variant="secondary" className="ml-auto text-[10px]">{m.status}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </Button>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            Live Intelligence Insights
          </h4>
          <div className="space-y-2">
            {insights.map((ins, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/30">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{ins.title}</p>
                  <p className="text-xs text-muted-foreground">{ins.detail}</p>
                </div>
                <Badge variant={ins.impact === "Critical" ? "destructive" : ins.impact === "High" ? "default" : "secondary"} className="text-[10px]">
                  {ins.impact}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIMarketIntelligence;
