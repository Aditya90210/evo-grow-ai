import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Zap,
  Rocket,
  Star,
  Building2,
  Crown,
  Gem,
  ArrowLeft,
  CreditCard,
  TrendingUp,
  Users,
  FileText,
  Settings,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plansData = {
  starter: { name: "Starter", icon: Zap, price: 49, color: "primary" },
  growth: { name: "Growth", icon: Rocket, price: 149, color: "secondary" },
  professional: { name: "Professional", icon: Star, price: 299, color: "accent" },
  business: { name: "Business", icon: Building2, price: 599, color: "primary" },
  enterprise: { name: "Enterprise", icon: Crown, price: 2999, color: "secondary" },
  ultimate: { name: "Ultimate", icon: Gem, price: 5999, color: "accent" },
};

type PlanKey = keyof typeof plansData;

const Subscription = () => {
  const { user, loading: authLoading } = useAuth();
  const { subscription, loading: subLoading, currentPlan } = useSubscription();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [authLoading, user, navigate]);

  if (authLoading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  const planKey = (currentPlan in plansData ? currentPlan : "starter") as PlanKey;
  const currentPlanData = plansData[planKey];
  const CurrentPlanIcon = currentPlanData.icon;
  const planKeys = Object.keys(plansData) as PlanKey[];
  const currentPlanIndex = planKeys.indexOf(planKey);
  const isActive = subscription?.status === "active";
  const billingCycle = subscription?.billing_cycle || "monthly";

  const handleCancelSubscription = async () => {
    if (!subscription) return;
    setCancelling(true);

    const { error } = await (supabase.rpc as any)("cancel_my_subscription");

    setCancelling(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Subscription cancelled",
      description: "Your subscription has been cancelled successfully. Plan access has been removed.",
    });

    navigate("/pricing");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6" onClick={() => navigate("/home")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Subscription Management</h1>
          <p className="text-muted-foreground">Manage your plan, billing, and usage</p>
        </div>

        {/* Current Plan Card */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <CurrentPlanIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {currentPlanData.name} Plan
                    <Badge variant={isActive ? "default" : "destructive"} className="ml-2">
                      {isActive ? "Active" : subscription?.status || "Inactive"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    ${currentPlanData.price}/{billingCycle === "monthly" ? "month" : "year"}
                  </CardDescription>
                </div>
              </div>
              <Button asChild>
                <Link to={`/pricing/${planKey}`}>
                  <Settings className="w-4 h-4 mr-2" />
                  View Plan Details
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-sm font-medium text-foreground capitalize">{subscription?.status || "N/A"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                <TrendingUp className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Billing Cycle</p>
                  <p className="text-sm font-medium text-foreground capitalize">{billingCycle}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Plan */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Change Plan</CardTitle>
            <CardDescription>Upgrade or downgrade your subscription</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {planKeys.map((key, index) => {
                const p = plansData[key];
                const Icon = p.icon;
                const isCurrent = key === planKey;
                const isUpgrade = index > currentPlanIndex;

                return (
                  <div
                    key={key}
                    className={`relative p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    {isCurrent && (
                      <Badge className="absolute -top-2 -right-2" variant="default">
                        Current
                      </Badge>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{p.name}</p>
                        <p className="text-sm text-muted-foreground">${p.price}/mo</p>
                      </div>
                    </div>
                    {!isCurrent && (
                      <Button variant={isUpgrade ? "default" : "outline"} size="sm" className="w-full" asChild>
                        <Link to={`/pricing/${key}`}>{isUpgrade ? "Upgrade" : "Downgrade"}</Link>
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        {isActive && planKey !== "starter" && (
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible actions for your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                <div>
                  <p className="font-medium text-foreground">Cancel Subscription</p>
                  <p className="text-sm text-muted-foreground">
                    Your plan access will be removed immediately upon cancellation.
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" disabled={cancelling}>
                      {cancelling ? "Cancelling..." : "Cancel Plan"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Your subscription will be cancelled immediately. You will lose access to all {currentPlanData.name} plan features right away. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                      <AlertDialogAction onClick={handleCancelSubscription} className="bg-destructive hover:bg-destructive/90">
                        {cancelling ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Cancelling...</> : "Yes, Cancel Now"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Subscription;
