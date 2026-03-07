import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, UserCog, Ban, RefreshCw, Trash2, Eye, LogIn } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface MockUser {
  id: string;
  email: string;
  displayName: string;
  plan: string;
  role: string;
  status: string;
  signupDate: string;
  lastLogin: string;
  campaigns: number;
  aiUsage: number;
}

const mockUsers: MockUser[] = [
  { id: "u1", email: "sarah@acme.com", displayName: "Sarah Chen", plan: "ultimate", role: "user", status: "active", signupDate: "2025-01-15", lastLogin: "2026-03-07", campaigns: 24, aiUsage: 1847 },
  { id: "u2", email: "marcus@growth.io", displayName: "Marcus Rivera", plan: "enterprise", role: "user", status: "active", signupDate: "2025-03-02", lastLogin: "2026-03-06", campaigns: 18, aiUsage: 932 },
  { id: "u3", email: "lisa@startup.co", displayName: "Lisa Wong", plan: "business", role: "user", status: "active", signupDate: "2025-06-11", lastLogin: "2026-03-07", campaigns: 12, aiUsage: 456 },
  { id: "u4", email: "james@corp.net", displayName: "James O'Brien", plan: "professional", role: "user", status: "suspended", signupDate: "2025-02-20", lastLogin: "2026-02-15", campaigns: 5, aiUsage: 89 },
  { id: "u5", email: "anna@digital.com", displayName: "Anna Kowalski", plan: "starter", role: "user", status: "active", signupDate: "2025-09-01", lastLogin: "2026-03-05", campaigns: 2, aiUsage: 23 },
  { id: "u6", email: "dev@evoscalvex.com", displayName: "Dev Admin", plan: "ultimate", role: "super_admin", status: "active", signupDate: "2024-12-01", lastLogin: "2026-03-07", campaigns: 0, aiUsage: 50 },
];

const GlobalUserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<MockUser | null>(null);

  const filtered = mockUsers.filter((u) => {
    const matchSearch = u.email.toLowerCase().includes(searchTerm.toLowerCase()) || u.displayName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPlan = planFilter === "all" || u.plan === planFilter;
    const matchStatus = statusFilter === "all" || u.status === statusFilter;
    return matchSearch && matchPlan && matchStatus;
  });

  const planColor = (plan: string) => {
    const colors: Record<string, string> = { ultimate: "default", enterprise: "secondary", business: "outline", professional: "outline", starter: "outline" };
    return (colors[plan] || "outline") as "default" | "secondary" | "outline";
  };

  return (
    <div id="user-management" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Global User Management</h2>
        <p className="text-muted-foreground">Manage all platform users</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-9" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Campaigns</TableHead>
                <TableHead>AI Usage</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{u.displayName}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant={planColor(u.plan)} className="capitalize">{u.plan}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className="capitalize">{u.role}</Badge></TableCell>
                  <TableCell>
                    <Badge variant={u.status === "active" ? "default" : "destructive"} className="capitalize">{u.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{u.lastLogin}</TableCell>
                  <TableCell className="text-foreground">{u.campaigns}</TableCell>
                  <TableCell className="text-foreground">{u.aiUsage.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={() => setSelectedUser(u)}><Eye className="h-4 w-4" /></Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader><DialogTitle>User Profile: {u.displayName}</DialogTitle></DialogHeader>
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{u.email}</span></div>
                              <div><span className="text-muted-foreground">Plan:</span> <Badge variant={planColor(u.plan)} className="capitalize ml-1">{u.plan}</Badge></div>
                              <div><span className="text-muted-foreground">Signup:</span> <span className="text-foreground">{u.signupDate}</span></div>
                              <div><span className="text-muted-foreground">Last Login:</span> <span className="text-foreground">{u.lastLogin}</span></div>
                              <div><span className="text-muted-foreground">Campaigns:</span> <span className="text-foreground">{u.campaigns}</span></div>
                              <div><span className="text-muted-foreground">AI Usage:</span> <span className="text-foreground">{u.aiUsage}</span></div>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button variant="outline" size="sm"><UserCog className="h-3 w-3 mr-1" /> Change Role</Button>
                              <Button variant="outline" size="sm"><LogIn className="h-3 w-3 mr-1" /> Login As User</Button>
                              {u.status === "active" ? (
                                <Button variant="destructive" size="sm"><Ban className="h-3 w-3 mr-1" /> Suspend</Button>
                              ) : (
                                <Button variant="default" size="sm"><RefreshCw className="h-3 w-3 mr-1" /> Reactivate</Button>
                              )}
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
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalUserManagement;
