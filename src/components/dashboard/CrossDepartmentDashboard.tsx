import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight, Users, DollarSign, Target, Headphones, ChevronRight } from "lucide-react";

const departments = [
  { name: "Marketing", revenue: "$124,800", leads: 1842, conversion: 12.4, trend: "up" as const, change: "+18%", kpis: ["CAC: $42", "ROAS: 4.2x", "MQLs: 623"] },
  { name: "Sales", revenue: "$298,400", deals: 47, winRate: 38, trend: "up" as const, change: "+12%", kpis: ["Pipeline: $1.2M", "Avg Deal: $6,348", "Cycle: 28d"] },
  { name: "CRM", revenue: "$86,200", accounts: 2340, retention: 94.2, trend: "up" as const, change: "+5%", kpis: ["NPS: 72", "Churn: 1.8%", "LTV: $4,200"] },
  { name: "Revenue Ops", revenue: "$509,400", forecast: "$612,000", accuracy: 91, trend: "up" as const, change: "+24%", kpis: ["MRR: $509K", "ARR: $6.1M", "Growth: 24%"] },
];

const executiveSummary = [
  { label: "Total Revenue (YTD)", value: "$3,842,600", change: "+31%", trend: "up" as const },
  { label: "Customer LTV", value: "$4,200", change: "+12%", trend: "up" as const },
  { label: "Global Conversion", value: "11.8%", change: "+2.4%", trend: "up" as const },
  { label: "Active Accounts", value: "2,340", change: "+186", trend: "up" as const },
];

const CrossDepartmentDashboard = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Cross-Department Intelligence Dashboard</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <BarChart3 className="w-4 h-4 mr-1" /> Executive Report
          </Button>
        </div>
        <CardDescription>Unified enterprise metrics across all departments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Executive Summary</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="kpis">KPI Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {executiveSummary.map((item) => (
                <div key={item.label} className="p-4 rounded-lg bg-muted/30 space-y-1">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-xl font-bold text-foreground">{item.value}</p>
                  <div className="flex items-center gap-1">
                    {item.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 text-destructive" />
                    )}
                    <span className="text-xs text-green-500">{item.change}</span>
                    <span className="text-xs text-muted-foreground">vs last period</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-3">
            {departments.map((dept) => (
              <div key={dept.name} className="p-4 rounded-lg bg-muted/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {dept.name === "Marketing" && <Target className="w-4 h-4 text-primary" />}
                    {dept.name === "Sales" && <DollarSign className="w-4 h-4 text-primary" />}
                    {dept.name === "CRM" && <Users className="w-4 h-4 text-primary" />}
                    {dept.name === "Revenue Ops" && <TrendingUp className="w-4 h-4 text-primary" />}
                    <span className="text-sm font-medium text-foreground">{dept.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{dept.revenue}</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">{dept.change}</span>
                    </div>
                    <Button variant="ghost" size="sm"><ChevronRight className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {dept.kpis.map((kpi) => (
                    <Badge key={kpi} variant="outline" className="text-[10px]">{kpi}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="kpis" className="space-y-3">
            {[
              { kpi: "Monthly Recurring Revenue", value: "$509,400", target: "$520,000", progress: 98 },
              { kpi: "Customer Acquisition Cost", value: "$42", target: "$38", progress: 90 },
              { kpi: "Net Promoter Score", value: "72", target: "75", progress: 96 },
              { kpi: "Revenue per Employee", value: "$128K", target: "$135K", progress: 95 },
              { kpi: "Pipeline Coverage Ratio", value: "3.2x", target: "3.0x", progress: 100 },
            ].map((item) => (
              <div key={item.kpi} className="p-3 rounded-lg bg-muted/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.kpi}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{item.value}</span>
                    <span className="text-xs text-muted-foreground">/ {item.target}</span>
                  </div>
                </div>
                <Progress value={item.progress} className="h-1.5" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CrossDepartmentDashboard;
