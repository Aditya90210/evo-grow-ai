import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HardDrive, Zap, Target, ArrowUpRight, Users, Workflow, Code } from "lucide-react";
import { Link } from "react-router-dom";
import type { PlanLimits } from "@/lib/planLimits";

interface StorageUsageMonitorProps {
  storageUsedGB: number;
  aiGenerationsUsed: number;
  campaignsUsed: number;
  plan: PlanLimits;
  activeAutomations?: number;
  apiUsage?: number;
}

const StorageUsageMonitor = ({
  storageUsedGB,
  aiGenerationsUsed,
  campaignsUsed,
  plan,
  activeAutomations = 0,
  apiUsage = 0,
}: StorageUsageMonitorProps) => {
  const storagePercent = (storageUsedGB / plan.storageGB) * 100;
  const aiPercent = (aiGenerationsUsed / plan.aiGenerations) * 100;
  const nearingLimit = storagePercent > 80 || aiPercent > 80;
  const isPro = plan.name === "professional" || plan.name === "business";

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Usage & Plan Monitoring</CardTitle>
        </div>
        <CardDescription>Monitor your resource consumption</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1"><Zap className="w-3 h-3" /> AI Generations</span>
              <span className="text-foreground font-medium">{aiGenerationsUsed} / {plan.aiGenerations}</span>
            </div>
            <Progress value={aiPercent} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1"><HardDrive className="w-3 h-3" /> Storage</span>
              <span className="text-foreground font-medium">{storageUsedGB.toFixed(1)} / {plan.storageGB} GB</span>
            </div>
            <Progress value={storagePercent} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3" /> Team Seats</span>
              <span className="text-foreground font-medium">3 / {plan.maxTeamMembers}</span>
            </div>
            <Progress value={(3 / plan.maxTeamMembers) * 100} className="h-2" />
          </div>
          {isPro && (
            <>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground flex items-center gap-1"><Workflow className="w-3 h-3" /> Active Automations</span>
                  <span className="text-foreground font-medium">{activeAutomations}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground flex items-center gap-1"><Code className="w-3 h-3" /> API Requests</span>
                  <span className="text-foreground font-medium">{apiUsage.toLocaleString()} / 10,000</span>
                </div>
                <Progress value={(apiUsage / 10000) * 100} className="h-2" />
              </div>
            </>
          )}
        </div>

        {nearingLimit && plan.upgradeTo && (
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground font-medium mb-2">Nearing your limits?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Upgrade to the {plan.upgradeTo.charAt(0).toUpperCase() + plan.upgradeTo.slice(1)} plan for increased capacity.
            </p>
            <Button size="sm" asChild>
              <Link to="/pricing">Upgrade Plan <ArrowUpRight className="w-3 h-3 ml-1" /></Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StorageUsageMonitor;
