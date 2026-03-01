import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Edit, TrendingUp, Users, ArrowUpRight } from "lucide-react";

const CampaignWorkspace = () => {
  const [campaign] = useState({
    name: "My First Campaign",
    status: "Draft" as "Draft" | "Active",
    traffic: 1240,
    leads: 86,
    conversionRate: 6.9,
  });

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Campaign Workspace</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs">1/1 Campaign</Badge>
        </div>
        <CardDescription>Manage your active campaign</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
          <div>
            <h3 className="font-semibold text-foreground">{campaign.name}</h3>
            <Badge variant={campaign.status === "Active" ? "default" : "secondary"} className="mt-1">
              {campaign.status}
            </Badge>
          </div>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-1" /> Edit
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-muted/20">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-xl font-bold text-foreground">{campaign.traffic.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Traffic</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20">
            <Users className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-xl font-bold text-foreground">{campaign.leads}</p>
            <p className="text-xs text-muted-foreground">Leads</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20">
            <ArrowUpRight className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-xl font-bold text-foreground">{campaign.conversionRate}%</p>
            <p className="text-xs text-muted-foreground">Conversion</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignWorkspace;
