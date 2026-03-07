import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, UserCog, Plus } from "lucide-react";

const roles = [
  { role: "super_admin", users: 2, permissions: ["Full platform access", "User management", "Billing control", "System configuration"], level: "Highest" },
  { role: "admin", users: 5, permissions: ["User management", "Content moderation", "Support tools"], level: "High" },
  { role: "user", users: 2840, permissions: ["Plan-based feature access", "Own data management"], level: "Standard" },
];

const roleAssignments = [
  { name: "Dev Admin", email: "dev@evoscalvex.com", role: "super_admin", assigned: "2024-12-01" },
  { name: "Platform Ops", email: "ops@evoscalvex.com", role: "super_admin", assigned: "2025-01-15" },
  { name: "Support Lead", email: "support@evoscalvex.com", role: "admin", assigned: "2025-02-01" },
  { name: "Content Mod", email: "mod@evoscalvex.com", role: "admin", assigned: "2025-03-15" },
];

const RoleManagement = () => (
  <div id="roles" className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Role & Permission Management</h2>
        <p className="text-muted-foreground">Manage platform roles and access control</p>
      </div>
      <Button><Plus className="h-4 w-4 mr-2" /> Create Custom Role</Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {roles.map((r) => (
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
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Assigned</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roleAssignments.map((r) => (
              <TableRow key={r.email}>
                <TableCell className="font-medium text-foreground">{r.name}</TableCell>
                <TableCell className="text-muted-foreground">{r.email}</TableCell>
                <TableCell><Badge variant="default" className="capitalize">{r.role.replace("_", " ")}</Badge></TableCell>
                <TableCell className="text-muted-foreground text-sm">{r.assigned}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Modify</Button>
                  <Button variant="ghost" size="sm" className="text-destructive">Revoke</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default RoleManagement;
