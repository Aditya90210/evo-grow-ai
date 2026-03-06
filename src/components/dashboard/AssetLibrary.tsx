import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, FileText, Image, Video, Mail, Megaphone, Search, Upload } from "lucide-react";

const categories = [
  { icon: FileText, label: "Generated Content", count: 248, recent: "Blog: AI in Marketing" },
  { icon: Megaphone, label: "Campaign Materials", count: 86, recent: "Q1 Ad Variants (12)" },
  { icon: Mail, label: "Email Templates", count: 42, recent: "Nurture Sequence v3" },
  { icon: Image, label: "Brand Assets", count: 134, recent: "Logo Pack Updated" },
  { icon: Video, label: "Video Scripts", count: 18, recent: "Product Demo Script" },
  { icon: FileText, label: "AI Reports", count: 31, recent: "Market Intel Feb 2026" },
];

const AssetLibrary = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            Asset Library
          </CardTitle>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-1">
              <Search className="w-3 h-3" /> Search
            </Button>
            <Button size="sm" variant="outline" className="gap-1">
              <Upload className="w-3 h-3" /> Upload
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Button key={cat.label} variant="outline" className="flex flex-col items-start h-auto py-4 px-4 gap-2 text-left">
              <div className="flex items-center gap-2 w-full">
                <div className="p-1.5 rounded bg-primary/10">
                  <cat.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{cat.label}</span>
                <Badge variant="secondary" className="ml-auto text-[10px]">{cat.count}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Latest: {cat.recent}</p>
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground">559 total assets • 12.4 GB used</p>
          <Badge variant="outline" className="text-[10px]">Unlimited Storage</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetLibrary;
