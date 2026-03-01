import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Plus, Edit, ArrowRight } from "lucide-react";

const funnelSteps = [
  { name: "Landing Page", visitors: 520, conversion: "100%" },
  { name: "Lead Capture", visitors: 312, conversion: "60%" },
  { name: "Thank You Page", visitors: 86, conversion: "27.6%" },
];

const FunnelBuilder = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Funnel Builder</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs">1/1 Funnel</Badge>
        </div>
        <CardDescription>Build and optimize your conversion funnel</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          {funnelSteps.map((step, i) => (
            <div key={step.name} className="flex items-center gap-2">
              <div className="p-3 rounded-lg bg-muted/30 text-center min-w-[120px]">
                <p className="text-sm font-medium text-foreground">{step.name}</p>
                <p className="text-lg font-bold text-primary">{step.visitors}</p>
                <p className="text-xs text-muted-foreground">{step.conversion}</p>
              </div>
              {i < funnelSteps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-1" /> Edit Funnel
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-1" /> Add Step
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelBuilder;
