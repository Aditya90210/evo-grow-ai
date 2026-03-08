import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreditCard, TrendingUp, TrendingDown, Download, Loader2 } from "lucide-react";
import { useAdminUsers } from "@/hooks/useAdminUsers";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const PLANS = ["starter", "growth", "professional", "business", "enterprise", "ultimate"] as const;

const analytics = [
  { label: "Revenue by Ultimate", value: "$143,976", trend: "+24%" },
  { label: "Revenue by Enterprise", value: "$89,970", trend: "+18%" },
  { label: "Revenue by Business", value: "$71,880", trend: "+12%" },
  { label: "Churn Rate", value: "3.2%", trend: "-0.5%" },
  { label: "Avg Revenue/User", value: "$287", trend: "+8%" },
  { label: "Plan Conversion", value: "12.4%", trend: "+2.1%" },
];

const SubscriptionControl = () => {
  const { users, loading, fetchUsers, getUserIdByEmail } = useAdminUsers();
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"upgrade" | "downgrade">("upgrade");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [processing, setProcessing] = useState(false);

  const usersWithSubs = users.filter((u) => u.plan_name);

  const formatDate = (date: string | null) => {
    if (!date) return "—";
    try { return format(new Date(date), "yyyy-MM-dd"); } catch { return "—"; }
  };

  const openDialog = (mode: "upgrade" | "downgrade", email?: string) => {
    setDialogMode(mode);
    setSelectedEmail(email || "");
    setSelectedPlan("");
    setDialogOpen(true);
  };

  const handleChangePlan = async () => {
    if (!selectedEmail || !selectedPlan) {
      toast({ title: "Error", description: "Please enter email and select a plan.", variant: "destructive" });
      return;
    }

    setProcessing(true);

    const userId = await getUserIdByEmail(selectedEmail);
    if (!userId) {
      toast({ title: "Error", description: "User not found with that email.", variant: "destructive" });
      setProcessing(false);
      return;
    }

    const { error } = await supabase
      .from("subscriptions")
      .update({ plan_name: selectedPlan, status: "active" })
      .eq("user_id", userId);

    setProcessing(false);

    if (error) {
      toast({ title: "Error", description: `Failed to ${dialogMode} plan: ${error.message}`, variant: "destructive" });
      return;
    }

    toast({ title: "Success", description: `User ${selectedEmail} has been ${dialogMode}d to ${selectedPlan}.` });
    setDialogOpen(false);
    fetchUsers();
  };

  if (loading) {
    return (
      <div id="subscriptions" className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div id="subscriptions" className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Subscription & Billing Control</h2>
          <p className="text-muted-foreground">Manage all platform subscriptions ({usersWithSubs.length} total)</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" onClick={() => openDialog("upgrade")}>
            <TrendingUp className="h-4 w-4 mr-2" /> Upgrade User
          </Button>
          <Button variant="outline" onClick={() => openDialog("downgrade")}>
            <TrendingDown className="h-4 w-4 mr-2" /> Downgrade User
          </Button>
          <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {analytics.map((a) => (
          <Card key={a.label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{a.label}</p>
              <p className="text-xl font-bold text-foreground">{a.value}</p>
              <Badge variant="secondary" className="text-xs mt-1">{a.trend}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5 text-primary" /> All Subscriptions</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Started</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersWithSubs.map((u) => (
                <TableRow key={u.user_id}>
                  <TableCell>
                    <p className="font-medium text-foreground text-sm">{u.email}</p>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{u.display_name || "—"}</TableCell>
                  <TableCell><Badge variant="outline" className="capitalize">{u.plan_name}</Badge></TableCell>
                  <TableCell><Badge variant={u.subscription_status === "active" ? "default" : "destructive"} className="capitalize">{u.subscription_status}</Badge></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{formatDate(u.subscription_started_at)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{formatDate(u.subscription_expires_at)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" onClick={() => openDialog("upgrade", u.email)}>
                        <TrendingUp className="h-3 w-3 mr-1" /> Upgrade
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => openDialog("downgrade", u.email)}>
                        <TrendingDown className="h-3 w-3 mr-1" /> Downgrade
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {usersWithSubs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">No subscriptions found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Upgrade/Downgrade Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="capitalize">{dialogMode} User Plan</DialogTitle>
            <DialogDescription>
              Enter the user's email and select the new plan to {dialogMode} them to.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">User Email</label>
              <Input
                placeholder="user@example.com"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">New Plan</label>
              <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  {PLANS.map((plan) => (
                    <SelectItem key={plan} value={plan} className="capitalize">{plan}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleChangePlan} disabled={processing}>
              {processing ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</> : `Confirm ${dialogMode}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscriptionControl;
