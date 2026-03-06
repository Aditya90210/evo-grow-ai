import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Target, Rocket, Shield, Lightbulb } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    title: "Marketing Growth Strategy",
    desc: "AI-generated scaling plan based on your current performance data and market position",
    priority: "Recommended",
  },
  {
    icon: Target,
    title: "Competitive Positioning",
    desc: "Strategic positioning analysis against top 5 competitors in your vertical",
    priority: "New",
  },
  {
    icon: Rocket,
    title: "Product-Market Expansion",
    desc: "Opportunities to expand into adjacent markets based on audience overlap",
    priority: "High Impact",
  },
  {
    icon: Shield,
    title: "Risk Mitigation Plan",
    desc: "Proactive strategy to address potential revenue concentration risks",
    priority: "Review",
  },
];

const advisorInsights = [
  "Your email open rates are 23% above industry average — consider increasing email frequency by 1x/week.",
  "Campaign 'Q1 Growth Push' has plateaued. Recommended: Refresh creative assets and expand audience targeting.",
  "Revenue from organic search grew 18% MoM. Prioritize SEO content investment for compounding returns.",
];

const AIStrategicAdvisor = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            AI Strategic Advisor
          </CardTitle>
          <Badge variant="outline" className="text-xs">Ultimate AI</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-3">
          {strategies.map((s) => (
            <Button key={s.title} variant="outline" className="flex flex-col items-start h-auto py-4 px-4 gap-2 text-left">
              <div className="flex items-center gap-2 w-full">
                <s.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{s.title}</span>
                <Badge variant="secondary" className="ml-auto text-[10px]">{s.priority}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </Button>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            Proactive AI Recommendations
          </h4>
          <div className="space-y-2">
            {advisorInsights.map((insight, i) => (
              <div key={i} className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs text-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Generate Full Strategic Report</Button>
      </CardContent>
    </Card>
  );
};

export default AIStrategicAdvisor;
