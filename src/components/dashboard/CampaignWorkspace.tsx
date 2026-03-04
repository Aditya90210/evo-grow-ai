import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Edit, TrendingUp, Users, ArrowUpRight, Plus, FlaskConical, Pause, Play, DollarSign } from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface CampaignWorkspaceProps {
  plan: PlanLimits;
}

const campaigns = [
  { id: 1, name: "Product Launch Q1", status: "Active" as const, traffic: 4280, leads: 312, ctr: 3.8, conversions: 86, revenue: "$12,400" },
  { id: 2, name: "Brand Awareness", status: "Active" as const, traffic: 2150, leads: 145, ctr: 2.9, conversions: 42, revenue: "$6,200" },
  { id: 3, name: "Retargeting Campaign", status: "Draft" as const, traffic: 0, leads: 0, ctr: 0, conversions: 0, revenue: "$0" },
];

const abTests = [
  { id: 1, name: "Hero Copy Test", variantA: "Get Started Free", variantB: "Start Growing Today", winner: "B", lift: "+23%", status: "Complete" },
  { id: 2, name: "CTA Color Test", variantA: "Blue Button", variantB: "Green Button", winner: null, lift: "Running...", status: "Active" },
];

const CampaignWorkspace = ({ plan }: CampaignWorkspaceProps) => {
  const isPro = plan.name === "professional" || plan.name === "business";
  const campaignLimit = plan.maxCampaigns === "Unlimited" ? "∞" : plan.maxCampaigns;

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">
              {isPro ? "Campaign & A/B Testing Lab" : "Campaign Workspace"}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">{campaigns.length}/{campaignLimit}</Badge>
            <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-1" /> New</Button>
          </div>
        </div>
        <CardDescription>
          {isPro ? "Launch, test, and optimize campaigns at scale" : "Manage your campaigns"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="campaigns">
          <TabsList className="mb-4">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            {isPro && <TabsTrigger value="ab-tests">A/B Tests</TabsTrigger>}
          </TabsList>

          <TabsContent value="campaigns" className="space-y-3">
            {campaigns.map((c) => (
              <div key={c.id} className="p-4 rounded-lg bg-muted/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                    <Badge variant={c.status === "Active" ? "default" : "secondary"} className="mt-1 text-[10px]">
                      {c.status}
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {c.status === "Active" && (
                      <Button variant="ghost" size="sm"><Pause className="w-4 h-4" /></Button>
                    )}
                    {c.status === "Draft" && (
                      <Button variant="ghost" size="sm"><Play className="w-4 h-4" /></Button>
                    )}
                    <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className={`grid ${isPro ? "grid-cols-5" : "grid-cols-3"} gap-2`}>
                  <div className="text-center p-2 rounded bg-muted/20">
                    <p className="text-sm font-bold text-foreground">{c.traffic.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">Traffic</p>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/20">
                    <p className="text-sm font-bold text-foreground">{c.leads}</p>
                    <p className="text-[10px] text-muted-foreground">Leads</p>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/20">
                    <p className="text-sm font-bold text-foreground">{c.conversions}</p>
                    <p className="text-[10px] text-muted-foreground">Conversions</p>
                  </div>
                  {isPro && (
                    <>
                      <div className="text-center p-2 rounded bg-muted/20">
                        <p className="text-sm font-bold text-foreground">{c.ctr}%</p>
                        <p className="text-[10px] text-muted-foreground">CTR</p>
                      </div>
                      <div className="text-center p-2 rounded bg-muted/20">
                        <p className="text-sm font-bold text-foreground">{c.revenue}</p>
                        <p className="text-[10px] text-muted-foreground">Revenue</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          {isPro && (
            <TabsContent value="ab-tests" className="space-y-3">
              {abTests.map((test) => (
                <div key={test.id} className="p-4 rounded-lg bg-muted/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{test.name}</span>
                    </div>
                    <Badge variant={test.status === "Complete" ? "secondary" : "default"} className="text-[10px]">
                      {test.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`p-2 rounded text-center ${test.winner === "A" ? "bg-primary/10 border border-primary/30" : "bg-muted/20"}`}>
                      <p className="text-xs text-muted-foreground">Variant A</p>
                      <p className="text-sm font-medium text-foreground">{test.variantA}</p>
                    </div>
                    <div className={`p-2 rounded text-center ${test.winner === "B" ? "bg-primary/10 border border-primary/30" : "bg-muted/20"}`}>
                      <p className="text-xs text-muted-foreground">Variant B</p>
                      <p className="text-sm font-medium text-foreground">{test.variantB}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {test.winner ? `Winner: Variant ${test.winner} (${test.lift})` : test.lift}
                  </p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                <FlaskConical className="w-4 h-4 mr-1" /> Create A/B Test
              </Button>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CampaignWorkspace;
