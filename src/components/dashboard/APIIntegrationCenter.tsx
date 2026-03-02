import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Webhook, Plug, RefreshCw, Copy, Eye, EyeOff, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const integrations = [
  { id: 1, name: "HubSpot", status: "connected", lastSync: "2 min ago", records: 1240 },
  { id: 2, name: "Stripe", status: "connected", lastSync: "5 min ago", records: 856 },
  { id: 3, name: "Slack", status: "connected", lastSync: "1 min ago", records: null },
  { id: 4, name: "Google Analytics", status: "connected", lastSync: "10 min ago", records: 4520 },
  { id: 5, name: "Mailchimp", status: "error", lastSync: "Failed", records: 0 },
];

const webhooks = [
  { id: 1, url: "https://api.example.com/webhook/leads", event: "lead.created", status: "active" },
  { id: 2, url: "https://api.example.com/webhook/purchases", event: "purchase.completed", status: "active" },
];

const usageLogs = [
  { time: "14:32:01", method: "POST", endpoint: "/v1/leads", status: 201, duration: "124ms" },
  { time: "14:31:45", method: "GET", endpoint: "/v1/campaigns", status: 200, duration: "89ms" },
  { time: "14:30:12", method: "PUT", endpoint: "/v1/leads/42", status: 200, duration: "156ms" },
  { time: "14:29:58", method: "GET", endpoint: "/v1/analytics", status: 200, duration: "234ms" },
];

const APIIntegrationCenter = () => {
  const { toast } = useToast();
  const [showKey, setShowKey] = useState(false);
  const apiKey = "evo_pro_sk_live_****************************a3f8";
  const fullKey = "evo_pro_sk_live_7f8g9h0jk1l2m3n4o5p6q7r8s9t0a3f8";

  const copyKey = () => {
    navigator.clipboard.writeText(fullKey);
    toast({ title: "Copied!", description: "API key copied to clipboard." });
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">API & Integration Center</CardTitle>
        </div>
        <CardDescription>Manage API keys, webhooks, and third-party integrations</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="integrations">
          <TabsList className="mb-4">
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="logs">Usage Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="integrations" className="space-y-2">
            {integrations.map((int) => (
              <div key={int.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Plug className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{int.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {int.records !== null ? `${int.records.toLocaleString()} records synced` : "Notifications"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={int.status === "connected" ? "secondary" : "destructive"} className="text-[10px]">
                    {int.status === "connected" ? `Synced ${int.lastSync}` : "Error"}
                  </Badge>
                  <Button variant="ghost" size="sm"><RefreshCw className="w-3 h-3" /></Button>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-2">
              <Plug className="w-4 h-4 mr-1" /> Add Integration
            </Button>
          </TabsContent>

          <TabsContent value="api-keys" className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Live API Key</span>
                </div>
                <Badge variant="secondary" className="text-[10px]">Production</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  value={showKey ? fullKey : apiKey}
                  readOnly
                  className="font-mono text-xs"
                />
                <Button variant="ghost" size="sm" onClick={() => setShowKey(!showKey)}>
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={copyKey}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">API Usage:</strong> 1,247 / 10,000 requests this month
              </p>
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-3">
            {webhooks.map((wh) => (
              <div key={wh.id} className="p-3 rounded-lg bg-muted/30 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Webhook className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{wh.event}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{wh.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground font-mono">{wh.url}</p>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              <Webhook className="w-4 h-4 mr-1" /> Add Webhook
            </Button>
          </TabsContent>

          <TabsContent value="logs">
            <div className="space-y-1">
              {usageLogs.map((log, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded text-xs font-mono bg-muted/20">
                  <span className="text-muted-foreground">{log.time}</span>
                  <Badge variant={log.method === "POST" ? "default" : "secondary"} className="text-[10px] px-1.5">
                    {log.method}
                  </Badge>
                  <span className="text-foreground flex-1">{log.endpoint}</span>
                  <span className="text-green-500">{log.status}</span>
                  <span className="text-muted-foreground">{log.duration}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default APIIntegrationCenter;
