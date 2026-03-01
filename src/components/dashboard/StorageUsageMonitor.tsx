import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HardDrive, Zap, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface StorageUsageMonitorProps {
  storageUsedGB: number;
  aiGenerationsUsed: number;
  campaignsUsed: number;
}

const StorageUsageMonitor = ({ storageUsedGB, aiGenerationsUsed, campaignsUsed }: StorageUsageMonitorProps) => {
  const storagePercent = (storageUsedGB / 10) * 100;
  const aiPercent = (aiGenerationsUsed / 50) * 100;
  const nearingLimit = storagePercent > 80 || aiPercent > 80;

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Storage & Usage</CardTitle>
        </div>
        <CardDescription>Monitor your resource consumption</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1">
                <HardDrive className="w-3 h-3" /> Storage
              </span>
              <span className="text-foreground font-medium">{storageUsedGB.toFixed(1)} / 10 GB</span>
            </div>
            <Progress value={storagePercent} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1">
                <Zap className="w-3 h-3" /> AI Generations
              </span>
              <span className="text-foreground font-medium">{aiGenerationsUsed} / 50</span>
            </div>
            <Progress value={aiPercent} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground flex items-center gap-1">
                <Target className="w-3 h-3" /> Campaigns
              </span>
              <span className="text-foreground font-medium">{campaignsUsed} / 1</span>
            </div>
            <Progress value={campaignsUsed * 100} className="h-2" />
          </div>
        </div>

        {nearingLimit && (
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground font-medium mb-2">Nearing your limits?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Upgrade to Growth for unlimited AI generations, 5 campaigns, and 50GB storage.
            </p>
            <Button size="sm" asChild>
              <Link to="/pricing">
                Upgrade Plan <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StorageUsageMonitor;
