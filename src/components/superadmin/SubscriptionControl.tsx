import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, TrendingUp, TrendingDown, ArrowUpDown, Download } from "lucide-react";

const subscriptionData = [
  { user: "Sarah Chen", email: "sarah@acme.com", plan: "ultimate", status: "active", started: "2025-01-15", expires: "2026-01-15", revenue: 5999 },
  { user: "Marcus Rivera", email: "marcus@growth.io", plan: "enterprise", status: "active", started: "2025-03-02", expires: "2026-03-02", revenue: 2999 },
  { user: "Lisa Wong", email: "lisa@startup.co", plan: "business", status: "active", started: "2025-06-11", expires: "2026-06-11", revenue: 599 },
  { user: "James O'Brien", email: "james@corp.net", plan: "professional", status: "expired", started: "2025-02-20", expires: "2026-02-20", revenue: 0 },
  { user: "Anna Kowalski", email: "anna@digital.com", plan: "starter", status: "active", started: "2025-09-01", expires: "2026-09-01", revenue: 99 },
];

const analytics = [
  { label: "Revenue by Ultimate", value: "$143,976", trend: "+24%" },
  { label: "Revenue by Enterprise", value: "$89,970", trend: "+18%" },
  { label: "Revenue by Business", value: "$71,880", trend: "+12%" },
  { label: "Churn Rate", value: "3.2%", trend: "-0.5%" },
  { label: "Avg Revenue/User", value: "$287", trend: "+8%" },
  { label: "Plan Conversion", value: "12.4%", trend: "+2.1%" },
];

const SubscriptionControl = () => {
  return (
    <div id="subscriptions" className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Subscription & Billing Control</h2>
          <p className="text-muted-foreground">Manage all platform subscriptions</p>
        </div>
        <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Export Report</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {analytics.map((a) => (
          <Card key={a.label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{a.label}</p>
              <p className="text-xl font-bold text-foreground">{a.value}</p>
              <Badge variant="secondary" className="text-xs mt-1">{a.trend}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5 text-primary" /> All Subscriptions</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Started</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Monthly Revenue</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptionData.map((s) => (
                <TableRow key={s.email}>
                  <TableCell>
                    <p className="font-medium text-foreground">{s.user}</p>
                    <p className="text-xs text-muted-foreground">{s.email}</p>
                  </TableCell>
                  <TableCell><Badge variant="outline" className="capitalize">{s.plan}</Badge></TableCell>
                  <TableCell><Badge variant={s.status === "active" ? "default" : "destructive"}>{s.status}</Badge></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{s.started}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{s.expires}</TableCell>
                  <TableCell className="font-medium text-foreground">${s.revenue.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm"><TrendingUp className="h-3 w-3 mr-1" /> Upgrade</Button>
                      <Button variant="ghost" size="sm"><TrendingDown className="h-3 w-3 mr-1" /> Downgrade</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionControl;
