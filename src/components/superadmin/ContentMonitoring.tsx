import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Megaphone, GitBranch, Brain, Users, Plug } from "lucide-react";

const contentSections = [
  { key: "campaigns", label: "Campaigns", icon: Megaphone, count: 892, items: [
    { user: "sarah@acme.com", name: "Spring Sale 2026", status: "active", created: "2026-03-05" },
    { user: "marcus@growth.io", name: "Q1 Lead Gen", status: "active", created: "2026-02-28" },
    { user: "lisa@startup.co", name: "Product Launch", status: "paused", created: "2026-03-01" },
  ]},
  { key: "funnels", label: "Funnels", icon: GitBranch, count: 456, items: [
    { user: "sarah@acme.com", name: "Webinar Registration Funnel", status: "active", created: "2026-03-03" },
    { user: "marcus@growth.io", name: "Free Trial Funnel", status: "active", created: "2026-02-25" },
  ]},
  { key: "ai_content", label: "AI Content", icon: Brain, count: 12847, items: [
    { user: "sarah@acme.com", name: "Blog: AI Marketing Trends", status: "generated", created: "2026-03-07" },
    { user: "lisa@startup.co", name: "Ad Copy: Summer Collection", status: "generated", created: "2026-03-07" },
  ]},
  { key: "automations", label: "Automations", icon: GitBranch, count: 234, items: [
    { user: "marcus@growth.io", name: "Lead Nurture Sequence", status: "running", created: "2026-02-20" },
    { user: "sarah@acme.com", name: "Post-Purchase Upsell", status: "running", created: "2026-03-01" },
  ]},
  { key: "crm", label: "CRM Records", icon: Users, count: 34500, items: [
    { user: "sarah@acme.com", name: "Enterprise Lead Pipeline", status: "active", created: "2026-01-15" },
    { user: "marcus@growth.io", name: "SMB Outreach", status: "active", created: "2026-02-01" },
  ]},
];

const ContentMonitoring = () => {
  const [search, setSearch] = useState("");

  return (
    <div id="content" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Platform Content Monitoring</h2>
        <p className="text-muted-foreground">Monitor all user-generated content and activity</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Filter by user ID or content name..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Tabs defaultValue="campaigns">
        <TabsList className="flex-wrap h-auto">
          {contentSections.map((s) => (
            <TabsTrigger key={s.key} value={s.key} className="gap-1">
              <s.icon className="h-3 w-3" /> {s.label} <Badge variant="secondary" className="text-xs ml-1">{s.count.toLocaleString()}</Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        {contentSections.map((s) => (
          <TabsContent key={s.key} value={s.key}>
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="space-y-3">
                  {s.items.filter((i) => !search || i.user.includes(search) || i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.user} · {item.created}</p>
                      </div>
                      <Badge variant={item.status === "active" || item.status === "running" ? "default" : "secondary"} className="capitalize">{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ContentMonitoring;
