import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollText, Search } from "lucide-react";

const logs = [
  { id: 1, time: "2026-03-07 14:32:01", user: "admin@evoscalvex.com", action: "user_login", details: "Super Admin login", type: "auth" },
  { id: 2, time: "2026-03-07 14:28:15", user: "sarah@acme.com", action: "campaign_created", details: "New campaign: Spring Sale 2026", type: "campaign" },
  { id: 3, time: "2026-03-07 14:25:03", user: "marcus@growth.io", action: "ai_generation", details: "Generated 5 ad variants", type: "ai" },
  { id: 4, time: "2026-03-07 14:20:00", user: "admin@evoscalvex.com", action: "subscription_updated", details: "Upgraded user lisa@startup.co to Business", type: "subscription" },
  { id: 5, time: "2026-03-07 14:15:44", user: "lisa@startup.co", action: "user_login", details: "Standard user login", type: "auth" },
  { id: 6, time: "2026-03-07 14:10:22", user: "system", action: "api_call", details: "Webhook triggered: payment_received", type: "api" },
  { id: 7, time: "2026-03-07 14:05:11", user: "james@corp.net", action: "ai_generation", details: "Generated blog content", type: "ai" },
  { id: 8, time: "2026-03-07 14:00:00", user: "system", action: "scheduled_task", details: "Daily analytics aggregation completed", type: "system" },
];

const typeColor = (type: string) => {
  const map: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
    auth: "default", campaign: "secondary", ai: "outline", subscription: "secondary", api: "outline", system: "default"
  };
  return map[type] || "outline";
};

const SystemLogs = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = logs.filter((l) => {
    const matchSearch = l.user.includes(search) || l.action.includes(search) || l.details.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || l.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div id="logs" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">System Logs & Activity</h2>
        <p className="text-muted-foreground">Complete platform activity tracking</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search logs..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Filter by type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="auth">Auth</SelectItem>
                <SelectItem value="campaign">Campaign</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
                <SelectItem value="api">API</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="text-xs text-muted-foreground font-mono">{l.time}</TableCell>
                  <TableCell className="text-sm text-foreground">{l.user}</TableCell>
                  <TableCell className="text-sm font-medium text-foreground">{l.action}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{l.details}</TableCell>
                  <TableCell><Badge variant={typeColor(l.type)} className="capitalize text-xs">{l.type}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemLogs;
