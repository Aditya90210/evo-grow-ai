import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Plus, Search, Activity, Clock, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { PlanLimits } from "@/lib/planLimits";

interface TeamManagementProps {
  plan: PlanLimits;
}

const teamMembers = [
  { id: 1, name: "You (Owner)", email: "owner@company.com", role: "Admin", status: "Active", lastActive: "Now", actions: 342 },
  { id: 2, name: "Sarah Chen", email: "sarah@company.com", role: "Manager", status: "Active", lastActive: "2h ago", actions: 156 },
  { id: 3, name: "Marcus Johnson", email: "marcus@company.com", role: "Editor", status: "Active", lastActive: "5h ago", actions: 89 },
  { id: 4, name: "Emily Rodriguez", email: "emily@company.com", role: "Analyst", status: "Active", lastActive: "1d ago", actions: 67 },
  { id: 5, name: "David Kim", email: "david@company.com", role: "Viewer", status: "Invited", lastActive: "—", actions: 0 },
];

const activityLogs = [
  { user: "Sarah Chen", action: "Published campaign 'Product Launch Q2'", time: "2 hours ago" },
  { user: "Marcus Johnson", action: "Generated 5 AI blog posts", time: "5 hours ago" },
  { user: "Emily Rodriguez", action: "Exported analytics report", time: "1 day ago" },
  { user: "You", action: "Updated funnel 'Main Sales Funnel'", time: "1 day ago" },
  { user: "Sarah Chen", action: "Added 3 new leads to CRM", time: "2 days ago" },
];

const roles = [
  { name: "Admin", permissions: "Full access to all features", members: 1 },
  { name: "Manager", permissions: "Create, edit, publish campaigns and content", members: 1 },
  { name: "Editor", permissions: "Create and edit content, manage leads", members: 1 },
  { name: "Analyst", permissions: "View analytics, export reports", members: 1 },
  { name: "Viewer", permissions: "Read-only access to dashboards", members: 1 },
];

const TeamManagement = ({ plan }: TeamManagementProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMembers = teamMembers.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Team & Role Management</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">{teamMembers.length}/{plan.maxTeamMembers} seats</Badge>
            <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-1" /> Invite</Button>
          </div>
        </div>
        <CardDescription>Manage team members, roles, and permissions (up to {plan.maxTeamMembers} users)</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="members">
          <TabsList className="mb-4">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search members..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9" />
            </div>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {filteredMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">{member.role}</Badge>
                    <Badge variant={member.status === "Active" ? "default" : "outline"} className="text-[10px]">
                      {member.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground hidden sm:inline">{member.lastActive}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-3">
            {roles.map((role) => (
              <div key={role.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{role.name}</p>
                    <p className="text-xs text-muted-foreground">{role.permissions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">{role.members} member{role.members > 1 ? "s" : ""}</Badge>
                  <Button variant="ghost" size="sm"><ChevronRight className="w-4 h-4" /></Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="activity" className="space-y-2">
            {activityLogs.map((log, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    <strong>{log.user}</strong> — {log.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{log.time}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="performance" className="space-y-3">
            {teamMembers.filter(m => m.status === "Active").map((member) => (
              <div key={member.id} className="space-y-2 p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{member.name}</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">{member.actions} actions</span>
                </div>
                <Progress value={Math.min((member.actions / 350) * 100, 100)} className="h-1.5" />
                <p className="text-xs text-muted-foreground">Last active: {member.lastActive}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TeamManagement;
