import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plug, Plus, Trash2, Calendar } from "lucide-react";

const connectedAccounts = [
  { id: 1, name: "Instagram", handle: "@mybusiness", connected: true },
  { id: 2, name: "Facebook", handle: "My Business Page", connected: true },
];

const scheduledPosts = [
  { id: 1, platform: "Instagram", content: "New product launch!", date: "Tomorrow, 9:00 AM" },
  { id: 2, platform: "Facebook", content: "Weekly tips thread", date: "Wed, 2:00 PM" },
];

const SocialIntegrations = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Social Integrations</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs">{connectedAccounts.length}/3 Connected</Badge>
        </div>
        <CardDescription>Manage connected accounts and scheduled posts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {connectedAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-sm font-medium text-foreground">{account.name}</p>
                <p className="text-xs text-muted-foreground">{account.handle}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          ))}
          {connectedAccounts.length < 3 && (
            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-1" /> Add Integration
            </Button>
          )}
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" /> Scheduled Posts
          </h4>
          <div className="space-y-2">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                <div>
                  <p className="text-sm text-foreground">{post.content}</p>
                  <p className="text-xs text-muted-foreground">{post.platform} • {post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialIntegrations;
