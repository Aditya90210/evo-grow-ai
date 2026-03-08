import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, UserCog, Plus, Loader2 } from "lucide-react";
import { useAdminUsers } from "@/hooks/useAdminUsers";
import { format } from "date-fns";

const roleDefinitions = [
  { role: "super_admin", permissions: ["Full platform access", "User management", "Billing control", "System configuration"], level: "Highest" },
  { role: "admin", permissions: ["User management", "Content moderation", "Support tools"], level: "High" },
  { role: "user", permissions: ["Plan-based feature access", "Own data management"], level: "Standard" },
];

const RoleManagement = () => {
  const { users, loading } = useAdminUsers();

  const roleCounts = roleDefinitions.map((rd) => ({
    ...rd,
    users: users.filter((u) => u.user_role === rd.role).length,
  }));

  const elevatedUsers = users.filter((u) => u.user_role === "super_admin" || u.user_role === "admin");

  const formatDate = (date: string | null) => {
    if (!date) return "—";
    try { return format(new Date(date), "yyyy-MM-dd"); } catch { return "—"; }
  };

  if (loading) {
    return (
      <div id="roles" className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div id="roles" className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Role & Permission Management</h2>
          <p className="text-muted-foreground">Manage platform roles and access control</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Create Custom Role</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roleCounts.map((r) => (
          <Card key={r.role} className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="capitalize">{r.role.replace("_", " ")}</span>
                </span>
                <Badge variant="secondary">{r.users} users</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">Access Level: {r.level}</p>
              <ul className="space-y-1">
                {r.permissions.map((p) => (
                  <li key={p} className="text-sm text-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="flex items-center gap-2"><UserCog className="h-5 w-5 text-primary" /> Elevated Role Assignments</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {elevatedUsers.map((u) => (
                <TableRow key={u.user_id}>
                  <TableCell className="font-medium text-foreground">{u.email}</TableCell>
                  <TableCell className="text-muted-foreground">{u.display_name || "—"}</TableCell>
                  <TableCell><Badge variant="default" className="capitalize">{u.user_role.replace("_", " ")}</Badge></TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(u.user_created_at)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Modify</Button>
                    <Button variant="ghost" size="sm" className="text-destructive">Revoke</Button>
                  </TableCell>
                </TableRow>
              ))}
              {elevatedUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">No elevated users found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleManagement;
