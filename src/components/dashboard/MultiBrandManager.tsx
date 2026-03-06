import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Plus, BarChart3, Target, Globe } from "lucide-react";

const brands = [
  { name: "Primary Brand", campaigns: 12, revenue: "$184,200", status: "Active", color: "bg-primary/20" },
  { name: "Sub-Brand Alpha", campaigns: 6, revenue: "$67,400", status: "Active", color: "bg-chart-2/20" },
  { name: "Partner Label", campaigns: 3, revenue: "$28,900", status: "Setup", color: "bg-chart-3/20" },
];

const MultiBrandManager = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Multi-Brand Management
          </CardTitle>
          <Button size="sm" variant="outline" className="gap-1">
            <Plus className="w-3 h-3" /> Add Brand
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className={`w-10 h-10 rounded-lg ${brand.color} flex items-center justify-center`}>
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{brand.name}</p>
                <Badge variant={brand.status === "Active" ? "default" : "secondary"} className="text-[10px]">{brand.status}</Badge>
              </div>
              <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {brand.campaigns} campaigns</span>
                <span className="flex items-center gap-1"><BarChart3 className="w-3 h-3" /> {brand.revenue}</span>
              </div>
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="ghost"><Globe className="w-4 h-4" /></Button>
              <Button size="sm" variant="ghost"><BarChart3 className="w-4 h-4" /></Button>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-3 pt-2">
          <Card className="border-border/30">
            <CardContent className="pt-4 pb-3 text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Active Brands</p>
            </CardContent>
          </Card>
          <Card className="border-border/30">
            <CardContent className="pt-4 pb-3 text-center">
              <p className="text-2xl font-bold text-foreground">21</p>
              <p className="text-xs text-muted-foreground">Total Campaigns</p>
            </CardContent>
          </Card>
          <Card className="border-border/30">
            <CardContent className="pt-4 pb-3 text-center">
              <p className="text-2xl font-bold text-foreground">$280K</p>
              <p className="text-xs text-muted-foreground">Combined Revenue</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiBrandManager;
