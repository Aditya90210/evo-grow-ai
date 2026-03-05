import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plug, CheckCircle, AlertTriangle, RefreshCw, Code, Webhook, Database, CreditCard, Cloud } from "lucide-react";

const integrations = [
  { name: "ERP System (SAP)", status: "connected", lastSync: "2 min ago", records: "12,480", type: "erp" },
  { name: "Salesforce CRM", status: "connected", lastSync: "5 min ago", records: "8,320", type: "crm" },
  { name: "Stripe Payments", status: "connected", lastSync: "Real-time", records: "24,100", type: "payment" },
  { name: "Snowflake Data Warehouse", status: "connected", lastSync: "15 min ago", records: "1.2M", type: "warehouse" },
  { name: "HubSpot Marketing", status: "connected", lastSync: "10 min ago", records: "6,840", type: "crm" },
  { name: "Google Analytics 4", status: "connected", lastSync: "Real-time", records: "—", type: "analytics" },
];

const webhooks = [
  { name: "New Lead Webhook", url: "https://api.evo.../webhooks/lead", events: 2340, status: "active" },
  { name: "Payment Received", url: "https://api.evo.../webhooks/payment", events: 890, status: "active" },
  { name: "CRM Stage Change", url: "https://api.evo.../webhooks/crm-stage", events: 456, status: "active" },
  { name: "Campaign Alert", url: "https://api.evo.../webhooks/campaign", events: 128, status: "paused" },
];

const EnterpriseIntegrationHub = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Enterprise Integration Hub</CardTitle>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Code className="w-4 h-4 mr-1" /> SDK Access</Button>
            <Button variant="outline" size="sm"><Plug className="w-4 h-4 mr-1" /> Add Integration</Button>
          </div>
        </div>
        <CardDescription>ERP, CRM, payment processors, data warehouse & custom API connections</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="integrations">
          <TabsList className="mb-4">
            <TabsTrigger value="integrations">Connected Systems</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="api">Custom API</TabsTrigger>
          </TabsList>

          <TabsContent value="integrations" className="space-y-3">
            {integrations.map((int) => (
              <div key={int.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  {int.type === "erp" && <Database className="w-4 h-4 text-primary" />}
                  {int.type === "crm" && <Cloud className="w-4 h-4 text-primary" />}
                  {int.type === "payment" && <CreditCard className="w-4 h-4 text-primary" />}
                  {int.type === "warehouse" && <Database className="w-4 h-4 text-primary" />}
                  {int.type === "analytics" && <Plug className="w-4 h-4 text-primary" />}
                  <div>
                    <p className="text-sm font-medium text-foreground">{int.name}</p>
                    <p className="text-xs text-muted-foreground">{int.records} records synced</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-[10px]">
                    <CheckCircle className="w-3 h-3 mr-1" /> Connected
                  </Badge>
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{int.lastSync}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-3">
            {webhooks.map((wh) => (
              <div key={wh.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Webhook className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{wh.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{wh.url}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={wh.status === "active" ? "default" : "secondary"} className="text-[10px]">
                    {wh.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{wh.events} events</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full"><Webhook className="w-4 h-4 mr-1" /> Create Webhook</Button>
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Enterprise SDK & API</span>
              </div>
              <p className="text-xs text-muted-foreground">Full REST API access with enterprise rate limits (10,000 req/min). SDK available for Node.js, Python, and Go.</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">API Documentation</Button>
                <Button variant="outline" size="sm">Generate API Key</Button>
                <Button variant="outline" size="sm">Download SDK</Button>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">API Usage This Month</span>
              </div>
              <p className="text-xs text-muted-foreground">248,320 / Unlimited requests • 99.98% uptime</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EnterpriseIntegrationHub;
