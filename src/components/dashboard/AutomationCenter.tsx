import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Workflow, Plus, Zap, Mail, Tag, ShoppingCart, BarChart3, GitBranch } from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface AutomationCenterProps {
  plan: PlanLimits;
}

const automations = [
  { id: 1, name: "New Lead Welcome", trigger: "Form Submit", action: "Send Welcome Email + Tag Lead", enabled: true, runs: 142, type: "simple" },
  { id: 2, name: "High-Score Follow-up", trigger: "Lead Score > 80", action: "Send Offer Email + Notify Sales", enabled: true, runs: 38, type: "conditional" },
  { id: 3, name: "Click Retargeting", trigger: "Click Event", action: "Tag Lead + Add to Campaign", enabled: false, runs: 67, type: "simple" },
  { id: 4, name: "Purchase Upsell Flow", trigger: "Purchase Complete", action: "Wait 3 Days → Send Upsell → If Opened → Send Offer", enabled: true, runs: 23, type: "conditional" },
  { id: 5, name: "Abandoned Cart Recovery", trigger: "Cart Abandoned", action: "Wait 1h → Email → If No Open → SMS", enabled: false, runs: 89, type: "conditional" },
];

const AutomationCenter = ({ plan }: AutomationCenterProps) => {
  const [localAutomations, setLocalAutomations] = useState(automations);

  const toggleAutomation = (id: number) => {
    setLocalAutomations(prev =>
      prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a)
    );
  };

  const visibleAutomations = plan.hasConditionalWorkflows
    ? localAutomations
    : localAutomations.filter(a => a.type === "simple");

  const triggerIcons: Record<string, typeof Zap> = {
    "Form Submit": Mail,
    "Lead Score > 80": Zap,
    "Click Event": Tag,
    "Purchase Complete": ShoppingCart,
    "Cart Abandoned": ShoppingCart,
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Workflow className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">
              {plan.hasConditionalWorkflows ? "Automation & Workflow Engine" : "Automation Center"}
            </CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-1" /> New Workflow
          </Button>
        </div>
        <CardDescription>
          {plan.hasConditionalWorkflows
            ? "Multi-step automations with conditional branching logic"
            : "Create trigger-based workflow automations"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="workflows">
          <TabsList className="mb-4">
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            {plan.hasConditionalWorkflows && <TabsTrigger value="analytics">Analytics</TabsTrigger>}
          </TabsList>

          <TabsContent value="workflows" className="space-y-3">
            {visibleAutomations.map((automation) => {
              const TriggerIcon = triggerIcons[automation.trigger] || Zap;
              return (
                <div key={automation.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TriggerIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground">{automation.name}</p>
                        {automation.type === "conditional" && plan.hasConditionalWorkflows && (
                          <Badge variant="secondary" className="text-[10px]">
                            <GitBranch className="w-2 h-2 mr-0.5" /> Conditional
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {automation.trigger} → {automation.action}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{automation.runs} runs</p>
                    </div>
                  </div>
                  <Switch
                    checked={automation.enabled}
                    onCheckedChange={() => toggleAutomation(automation.id)}
                  />
                </div>
              );
            })}
          </TabsContent>

          {plan.hasConditionalWorkflows && (
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-lg bg-muted/20">
                  <p className="text-2xl font-bold text-foreground">359</p>
                  <p className="text-xs text-muted-foreground">Total Runs</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/20">
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/20">
                  <p className="text-2xl font-bold text-foreground">2.3x</p>
                  <p className="text-xs text-muted-foreground">ROI Multiplier</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI Insight</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your "Purchase Upsell Flow" has the highest conversion rate. Consider creating similar conditional workflows for other purchase events.
                </p>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AutomationCenter;
