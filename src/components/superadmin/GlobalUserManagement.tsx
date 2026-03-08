import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, UserCog, Ban, RefreshCw, Trash2, Eye, LogIn, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useAdminUsers, AdminUser } from "@/hooks/useAdminUsers";
import { format } from "date-fns";

const GlobalUserManagement = () => {
  const { users, loading } = useAdminUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const filtered = users.filter((u) => {
    const matchSearch =
      (u.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (u.display_name?.toLowerCase() || "").includes(searchTerm.toLowerCase());
    const matchPlan = planFilter === "all" || u.plan_name === planFilter;
    const matchStatus = statusFilter === "all" || u.subscription_status === statusFilter;
    return matchSearch && matchPlan && matchStatus;
  });

  const planColor = (plan: string | null) => {
    const colors: Record<string, string> = { ultimate: "default", enterprise: "secondary", business: "outline", professional: "outline", starter: "outline" };
    return (colors[plan || ""] || "outline") as "default" | "secondary" | "outline";
  };

  const formatDate = (date: string | null) => {
    if (!date) return "—";
    try { return format(new Date(date), "yyyy-MM-dd"); } catch { return "—"; }
  };

  if (loading) {
    return (
      <div id="user-management" className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div id="user-management" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Global User Management</h2>
        <p className="text-muted-foreground">Manage all platform users ({users.length} total)</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by email or name..." className="pl-9" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Filter by plan" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="ultimate">Ultimate</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Filter by status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.user_id}>
                  <TableCell>
                    <p className="font-medium text-foreground text-sm">{u.email}</p>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{u.display_name || "—"}</TableCell>
                  <TableCell><Badge variant={planColor(u.plan_name)} className="capitalize">{u.plan_name || "none"}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className="capitalize">{u.user_role.replace("_", " ")}</Badge></TableCell>
                  <TableCell>
                    <Badge variant={u.subscription_status === "active" ? "default" : "destructive"} className="capitalize">
                      {u.subscription_status || "none"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(u.user_created_at)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(u.last_sign_in_at)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={() => setSelectedUser(u)}><Eye className="h-4 w-4" /></Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader><DialogTitle>User: {u.email}</DialogTitle></DialogHeader>
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{u.email}</span></div>
                              <div><span className="text-muted-foreground">Name:</span> <span className="text-foreground">{u.display_name || "—"}</span></div>
                              <div><span className="text-muted-foreground">Plan:</span> <Badge variant={planColor(u.plan_name)} className="capitalize ml-1">{u.plan_name || "none"}</Badge></div>
                              <div><span className="text-muted-foreground">Role:</span> <Badge variant="outline" className="capitalize ml-1">{u.user_role.replace("_", " ")}</Badge></div>
                              <div><span className="text-muted-foreground">Joined:</span> <span className="text-foreground">{formatDate(u.user_created_at)}</span></div>
                              <div><span className="text-muted-foreground">Last Login:</span> <span className="text-foreground">{formatDate(u.last_sign_in_at)}</span></div>
                              <div><span className="text-muted-foreground">Subscription:</span> <span className="text-foreground capitalize">{u.subscription_status || "none"}</span></div>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button variant="outline" size="sm"><UserCog className="h-3 w-3 mr-1" /> Change Role</Button>
                              <Button variant="outline" size="sm"><LogIn className="h-3 w-3 mr-1" /> Login As User</Button>
                              <Button variant="destructive" size="sm"><Ban className="h-3 w-3 mr-1" /> Suspend</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="icon"><UserCog className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground py-8">No users found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalUserManagement;
