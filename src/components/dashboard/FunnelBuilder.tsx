import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GitBranch, Plus, Edit, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface FunnelBuilderProps {
  plan: PlanLimits;
}

const funnels = [
  {
    id: 1,
    name: "Main Sales Funnel",
    steps: [
      { name: "Landing Page", visitors: 2840, conversion: "100%", dropOff: null },
      { name: "Lead Capture", visitors: 1704, conversion: "60%", dropOff: "40%" },
      { name: "Sales Page", visitors: 852, conversion: "50%", dropOff: "50%" },
      { name: "Checkout", visitors: 340, conversion: "40%", dropOff: "60%" },
      { name: "Thank You", visitors: 238, conversion: "70%", dropOff: "30%" },
    ],
  },
  {
    id: 2,
    name: "Webinar Funnel",
    steps: [
      { name: "Registration", visitors: 1200, conversion: "100%", dropOff: null },
      { name: "Confirmation", visitors: 960, conversion: "80%", dropOff: "20%" },
      { name: "Replay Page", visitors: 480, conversion: "50%", dropOff: "50%" },
    ],
  },
];

const FunnelBuilder = ({ plan }: FunnelBuilderProps) => {
  const isPro = plan.name === "professional";
  const funnelLimit = plan.maxFunnels === "Unlimited" ? "∞" : plan.maxFunnels;

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">
              {isPro ? "Advanced Funnel Builder" : "Funnel Builder"}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">{funnels.length}/{funnelLimit}</Badge>
            <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-1" /> New</Button>
          </div>
        </div>
        <CardDescription>
          {isPro ? "Multi-step funnels with drop-off analysis & AI optimization" : "Build and optimize funnels"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {funnels.map((funnel) => (
          <div key={funnel.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground">{funnel.name}</h4>
              <div className="flex gap-1">
                {isPro && (
                  <Button variant="ghost" size="sm"><Sparkles className="w-4 h-4 text-primary" /></Button>
                )}
                <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {funnel.steps.map((step, i) => (
                <div key={step.name} className="flex items-center gap-2">
                  <div className="p-3 rounded-lg bg-muted/30 text-center min-w-[110px]">
                    <p className="text-xs font-medium text-foreground">{step.name}</p>
                    <p className="text-lg font-bold text-primary">{step.visitors.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">{step.conversion}</p>
                    {isPro && step.dropOff && (
                      <div className="flex items-center justify-center gap-0.5 mt-1">
                        <TrendingDown className="w-3 h-3 text-destructive" />
                        <span className="text-[10px] text-destructive">{step.dropOff}</span>
                      </div>
                    )}
                  </div>
                  {i < funnel.steps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FunnelBuilder;
