import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Ban, LogOut, Flag, AlertTriangle, Eye } from "lucide-react";

const alerts = [
  { id: 1, type: "login_attempts", user: "unknown@temp.net", detail: "47 failed login attempts in 5 min", severity: "critical", time: "2 min ago" },
  { id: 2, type: "api_abuse", user: "bot@spam.io", detail: "8,200 API requests in 1 hour", severity: "high", time: "15 min ago" },
  { id: 3, type: "ai_spike", user: "test@free.com", detail: "Starter plan user generated 500 AI outputs", severity: "high", time: "1 hour ago" },
  { id: 4, type: "suspicious", user: "multi@proxy.xyz", detail: "Account accessed from 12 different countries in 24h", severity: "medium", time: "3 hours ago" },
  { id: 5, type: "bot_activity", user: "scraper@unknown.net", detail: "Automated scraping pattern detected", severity: "high", time: "5 hours ago" },
];

const severityColor = (s: string) => {
  if (s === "critical") return "destructive" as const;
  if (s === "high") return "destructive" as const;
  return "secondary" as const;
};

const FraudDetection = () => (
  <div id="fraud" className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-foreground">Fraud & Abuse Detection</h2>
      <p className="text-muted-foreground">Monitor and respond to suspicious activity</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Active Alerts", value: "5", icon: AlertTriangle },
        { label: "Blocked Today", value: "12", icon: Ban },
        { label: "Flagged Accounts", value: "8", icon: Flag },
        { label: "Forced Logouts", value: "3", icon: LogOut },
      ].map((m) => (
        <Card key={m.label} className="border-border/50">
          <CardContent className="p-4 flex items-center gap-3">
            <m.icon className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><ShieldAlert className="h-5 w-5 text-destructive" /> Active Threat Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((a) => (
            <div key={a.id} className="flex items-start justify-between p-4 rounded-lg border border-border/50 bg-muted/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className={`h-5 w-5 mt-0.5 ${a.severity === "critical" ? "text-destructive" : a.severity === "high" ? "text-destructive" : "text-muted-foreground"}`} />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{a.detail}</p>
                    <Badge variant={severityColor(a.severity)} className="capitalize text-xs">{a.severity}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{a.user} · {a.time}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm"><Eye className="h-3 w-3 mr-1" /> View</Button>
                <Button variant="destructive" size="sm"><Ban className="h-3 w-3 mr-1" /> Block</Button>
                <Button variant="outline" size="sm"><Flag className="h-3 w-3 mr-1" /> Flag</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default FraudDetection;
