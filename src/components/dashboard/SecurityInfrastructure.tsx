import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Key, FileText, Download, CheckCircle, AlertTriangle, Lock, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { PlanLimits } from "@/lib/planLimits";

interface SecurityInfrastructureProps {
  plan: PlanLimits;
}

const auditLogs = [
  { action: "Password changed", user: "You", time: "2 hours ago", status: "success" as const },
  { action: "New team member invited", user: "You", time: "1 day ago", status: "success" as const },
  { action: "API key regenerated", user: "Sarah Chen", time: "2 days ago", status: "success" as const },
  { action: "Failed login attempt", user: "Unknown", time: "3 days ago", status: "warning" as const },
  { action: "Data export requested", user: "Emily Rodriguez", time: "5 days ago", status: "success" as const },
];

const SecurityInfrastructure = ({ plan }: SecurityInfrastructureProps) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Security & Infrastructure</CardTitle>
        </div>
        <CardDescription>SSO, 2FA, audit logs, and data controls</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Security Status */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/30 space-y-1">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">SSO</span>
            </div>
            <Badge variant="default" className="text-[10px]">
              <CheckCircle className="w-3 h-3 mr-1" /> Enabled
            </Badge>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 space-y-1">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">2FA</span>
            </div>
            <Badge variant="default" className="text-[10px]">
              <CheckCircle className="w-3 h-3 mr-1" /> Active
            </Badge>
          </div>
        </div>

        {/* Storage */}
        <div className="p-3 rounded-lg bg-muted/30 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Storage Usage</span>
            <span className="text-foreground font-medium">247 GB / {plan.storageGB >= 1000 ? "1 TB" : `${plan.storageGB} GB`}</span>
          </div>
          <Progress value={(247 / plan.storageGB) * 100} className="h-2" />
        </div>

        {/* Data Controls */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Download className="w-4 h-4 mr-1" /> Export Data
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <FileText className="w-4 h-4 mr-1" /> Compliance Report
          </Button>
        </div>

        {/* Audit Logs */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" /> Recent Audit Logs
          </h4>
          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {auditLogs.map((log, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-muted/20 text-xs">
                <div className="flex items-center gap-2">
                  {log.status === "success" ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-3 h-3 text-yellow-500" />
                  )}
                  <span className="text-foreground">{log.action}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{log.user}</span>
                  <span>•</span>
                  <span>{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityInfrastructure;
