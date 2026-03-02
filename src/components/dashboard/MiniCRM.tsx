import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Star, Tag, Download, MessageSquare, Search, ArrowRight, TrendingUp } from "lucide-react";
import type { PlanLimits } from "@/lib/planLimits";

interface MiniCRMProps {
  plan: PlanLimits;
}

const leads = [
  { id: 1, name: "Sarah Chen", email: "sarah@company.com", score: 92, tags: ["Hot Lead", "Enterprise"], stage: "Negotiation", lastActivity: "Opened proposal email", date: "2h ago" },
  { id: 2, name: "Marcus Johnson", email: "marcus@startup.io", score: 78, tags: ["Qualified", "SaaS"], stage: "Discovery", lastActivity: "Visited pricing page", date: "5h ago" },
  { id: 3, name: "Emily Rodriguez", email: "emily@agency.co", score: 65, tags: ["Warm", "Agency"], stage: "Proposal", lastActivity: "Downloaded whitepaper", date: "1d ago" },
  { id: 4, name: "David Kim", email: "david@retail.com", score: 45, tags: ["New"], stage: "Lead", lastActivity: "Submitted form", date: "2d ago" },
  { id: 5, name: "Lisa Park", email: "lisa@finance.co", score: 88, tags: ["Hot Lead", "Finance"], stage: "Closing", lastActivity: "Signed contract draft", date: "3h ago" },
];

const pipelineStages = [
  { name: "Lead", count: 12, value: "$24,000" },
  { name: "Discovery", count: 8, value: "$48,000" },
  { name: "Proposal", count: 5, value: "$65,000" },
  { name: "Negotiation", count: 3, value: "$42,000" },
  { name: "Closing", count: 2, value: "$38,000" },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-500";
  if (score >= 50) return "text-yellow-500";
  return "text-muted-foreground";
};

const MiniCRM = ({ plan }: MiniCRMProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredLeads = leads.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">{plan.hasCRMPipeline ? "Professional CRM" : "Mini CRM"}</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" /> Export
          </Button>
        </div>
        <CardDescription>
          {plan.hasCRMPipeline ? "Full pipeline management with AI-powered scoring" : "Manage leads with basic scoring"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={plan.hasCRMPipeline ? "pipeline" : "leads"}>
          <TabsList className="mb-4">
            {plan.hasCRMPipeline && <TabsTrigger value="pipeline">Pipeline</TabsTrigger>}
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {plan.hasCRMPipeline && (
            <TabsContent value="pipeline" className="space-y-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {pipelineStages.map((stage, i) => (
                  <div key={stage.name} className="flex items-center gap-2">
                    <div className="min-w-[130px] p-3 rounded-lg bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground font-medium">{stage.name}</p>
                      <p className="text-lg font-bold text-foreground">{stage.count}</p>
                      <p className="text-xs text-primary font-medium">{stage.value}</p>
                    </div>
                    {i < pipelineStages.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Pipeline Value</span>
                </div>
                <p className="text-2xl font-bold text-foreground">$217,000</p>
                <p className="text-xs text-muted-foreground">30 active deals across 5 stages</p>
              </div>
            </TabsContent>
          )}

          <TabsContent value="leads" className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="space-y-2 max-h-[350px] overflow-y-auto">
              {filteredLeads.map((lead) => (
                <div key={lead.id} className="p-3 rounded-lg bg-muted/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className={`w-3 h-3 ${getScoreColor(lead.score)}`} />
                        <span className={`text-sm font-bold ${getScoreColor(lead.score)}`}>{lead.score}</span>
                      </div>
                      {plan.hasCRMPipeline && (
                        <Badge variant="outline" className="text-[10px]">{lead.stage}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {lead.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                        <Tag className="w-2 h-2 mr-0.5" />{tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> {lead.lastActivity} • {lead.date}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-2">
            {leads.slice(0, 4).map((lead) => (
              <div key={lead.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {lead.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground"><strong>{lead.name}</strong> — {lead.lastActivity}</p>
                  <p className="text-xs text-muted-foreground">{lead.date}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MiniCRM;
