import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, BarChart3, Download } from "lucide-react";

const revenueMetrics = [
  { label: "Monthly Recurring Revenue", value: "$284,750", trend: "+15.3%", icon: DollarSign },
  { label: "Annual Revenue", value: "$3.42M", trend: "+18.7%", icon: TrendingUp },
  { label: "Revenue Growth (MoM)", value: "+12.4%", trend: "+2.1%", icon: BarChart3 },
  { label: "Top Paying Users", value: "847", trend: "+23", icon: Users },
];

const revenueByPlan = [
  { plan: "Ultimate ($5,999/mo)", users: 24, revenue: "$143,976", share: "50.6%" },
  { plan: "Enterprise ($2,999/mo)", users: 30, revenue: "$89,970", share: "31.6%" },
  { plan: "Business ($599/mo)", users: 120, revenue: "$71,880", share: "25.2%" },
  { plan: "Professional ($199/mo)", users: 340, revenue: "$67,660", share: "23.8%" },
  { plan: "Starter ($99/mo)", users: 942, revenue: "$93,258", share: "32.7%" },
];

const topUsers = [
  { name: "Acme Corp", plan: "Ultimate", monthlySpend: "$5,999", lifetime: "$71,988" },
  { name: "Growth Industries", plan: "Enterprise", monthlySpend: "$2,999", lifetime: "$35,988" },
  { name: "Digital First Co", plan: "Ultimate", monthlySpend: "$5,999", lifetime: "$29,995" },
  { name: "StartupXYZ", plan: "Enterprise", monthlySpend: "$2,999", lifetime: "$23,992" },
];

const RevenueAnalytics = () => (
  <div id="revenue" className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Revenue & Financial Analytics</h2>
        <p className="text-muted-foreground">Complete revenue intelligence</p>
      </div>
      <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Export</Button>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {revenueMetrics.map((m) => (
        <Card key={m.label} className="border-border/50">
          <CardContent className="p-4">
            <m.icon className="h-5 w-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <Badge variant="secondary" className="text-xs mt-2">{m.trend}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-border/50">
        <CardHeader><CardTitle>Revenue by Plan</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {revenueByPlan.map((r) => (
              <div key={r.plan} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm font-medium text-foreground">{r.plan}</p>
                  <p className="text-xs text-muted-foreground">{r.users} users</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{r.revenue}</p>
                  <p className="text-xs text-muted-foreground">{r.share} share</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader><CardTitle>Top Paying Accounts</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topUsers.map((u) => (
              <div key={u.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm font-medium text-foreground">{u.name}</p>
                  <Badge variant="outline" className="text-xs">{u.plan}</Badge>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{u.monthlySpend}/mo</p>
                  <p className="text-xs text-muted-foreground">LTV: {u.lifetime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default RevenueAnalytics;
