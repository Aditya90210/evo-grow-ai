import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollText, Search, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface LogEntry {
  id: string;
  user_id: string | null;
  action: string;
  details: Record<string, unknown> | null;
  created_at: string;
  ip_address: string | null;
  email?: string;
}

const typeColor = (action: string) => {
  if (action.includes("login") || action.includes("auth")) return "default" as const;
  if (action.includes("campaign")) return "secondary" as const;
  if (action.includes("ai")) return "outline" as const;
  if (action.includes("subscription")) return "secondary" as const;
  return "outline" as const;
};

const SystemLogs = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      const { data: logsData } = await supabase
        .from("system_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);

      if (logsData) {
        // Resolve emails for each log entry
        const enriched = await Promise.all(
          logsData.map(async (log) => {
            let email = "system";
            if (log.user_id) {
              const { data } = await supabase.rpc("get_email_by_user_id", { _user_id: log.user_id });
              email = (data as string) || log.user_id;
            }
            return { ...log, email, details: log.details as Record<string, unknown> | null };
          })
        );
        setLogs(enriched);
      }
      setLoading(false);
    };
    fetchLogs();
  }, []);

  const filtered = logs.filter((l) => {
    const matchSearch =
      (l.email || "").toLowerCase().includes(search.toLowerCase()) ||
      l.action.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || l.action.includes(typeFilter);
    return matchSearch && matchType;
  });

  const formatDate = (date: string) => {
    try { return format(new Date(date), "yyyy-MM-dd HH:mm:ss"); } catch { return date; }
  };

  if (loading) {
    return (
      <div id="logs" className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div id="logs" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">System Logs & Activity</h2>
        <p className="text-muted-foreground">Complete platform activity tracking ({logs.length} entries)</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by email or action..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Filter by type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="login">Auth</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="text-xs text-muted-foreground font-mono">{formatDate(l.created_at)}</TableCell>
                  <TableCell className="text-sm text-foreground">{l.email}</TableCell>
                  <TableCell>
                    <Badge variant={typeColor(l.action)} className="capitalize text-xs">{l.action.replace(/_/g, " ")}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[300px] truncate">
                    {l.details ? JSON.stringify(l.details) : "—"}
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">No logs found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemLogs;
