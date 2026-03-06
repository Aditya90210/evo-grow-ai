import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Share2, FileText, GitBranch, ClipboardList, Plug,
  Megaphone, Mail, Target, Workflow, FlaskConical, Search, Mic, Code,
  Map, TrendingUp, Activity, Shield, BarChart3, Users, Brain,
  Building2, FolderOpen,
} from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface QuickActionsProps {
  onAction: (action: string) => void;
  plan: PlanLimits;
}

const iconMap: Record<string, any> = {
  Sparkles, Share2, FileText, GitBranch, ClipboardList, Plug,
  Megaphone, Mail, Target, Workflow, FlaskConical, Search, Mic, Code,
  Map, TrendingUp, Activity, Shield, BarChart3, Users, Brain,
  Building2, FolderOpen,
};

const QuickActions = ({ onAction, plan }: QuickActionsProps) => {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          {plan.name === "enterprise" ? "Executive Quick Actions" : plan.name === "professional" ? "Advanced Quick Actions" : "Quick Actions"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid grid-cols-2 md:grid-cols-3 ${plan.quickActions.length > 6 ? "lg:grid-cols-7" : "lg:grid-cols-6"} gap-3`}>
          {plan.quickActions.map((action) => {
            const Icon = iconMap[action.icon] || Sparkles;
            return (
              <Button
                key={action.id}
                variant="outline"
                className="flex flex-col h-auto py-4 px-3 gap-2 text-center"
                onClick={() => onAction(action.id)}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium leading-tight">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
