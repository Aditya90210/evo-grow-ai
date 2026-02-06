import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
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
  Calendar,
  TrendingUp,
  Users,
  FileText,
  Settings,
  AlertTriangle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock subscription data - in a real app, this would come from your database
const mockSubscription = {
  plan: "growth",
  status: "active",
  billingCycle: "monthly",
  currentPeriodStart: "2024-01-01",
  currentPeriodEnd: "2024-02-01",
  nextBillingDate: "2024-02-01",
  amount: 149,
  usage: {
    teamMembers: { used: 3, limit: 5 },
    aiReports: { used: 47, limit: -1 }, // -1 means unlimited
    storageGB: { used: 2.4, limit: 10 },
  },
};

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
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cancelling, setCancelling] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  const currentPlan = plansData[mockSubscription.plan as PlanKey];
  const CurrentPlanIcon = currentPlan.icon;
  const planKeys = Object.keys(plansData) as PlanKey[];
  const currentPlanIndex = planKeys.indexOf(mockSubscription.plan as PlanKey);

  const handleCancelSubscription = async () => {
    setCancelling(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCancelling(false);
    toast({
      title: "Subscription cancelled",
      description: "Your subscription will remain active until the end of your current billing period.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6" onClick={() => navigate("/dashboard")}>
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
                    {currentPlan.name} Plan
                    <Badge variant="default" className="ml-2">
                      {mockSubscription.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    ${mockSubscription.amount}/{mockSubscription.billingCycle === "monthly" ? "month" : "year"}
                  </CardDescription>
                </div>
              </div>
              <Button asChild>
                <Link to={`/pricing/${mockSubscription.plan}`}>
                  <Settings className="w-4 h-4 mr-2" />
                  View Plan Details
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Current Period</p>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(mockSubscription.currentPeriodStart)} - {formatDate(mockSubscription.currentPeriodEnd)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Next Billing</p>
                  <p className="text-sm font-medium text-foreground">{formatDate(mockSubscription.nextBillingDate)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                <TrendingUp className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Billing Cycle</p>
                  <p className="text-sm font-medium text-foreground capitalize">{mockSubscription.billingCycle}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage This Period</CardTitle>
            <CardDescription>Track your resource consumption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Team Members</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {mockSubscription.usage.teamMembers.used} / {mockSubscription.usage.teamMembers.limit}
                </span>
              </div>
              <Progress
                value={(mockSubscription.usage.teamMembers.used / mockSubscription.usage.teamMembers.limit) * 100}
                className="h-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">AI Strategy Reports</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {mockSubscription.usage.aiReports.used}{" "}
                  {mockSubscription.usage.aiReports.limit === -1 ? "(Unlimited)" : `/ ${mockSubscription.usage.aiReports.limit}`}
                </span>
              </div>
              <Progress value={mockSubscription.usage.aiReports.limit === -1 ? 100 : 50} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Storage</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {mockSubscription.usage.storageGB.used} GB / {mockSubscription.usage.storageGB.limit} GB
                </span>
              </div>
              <Progress
                value={(mockSubscription.usage.storageGB.used / mockSubscription.usage.storageGB.limit) * 100}
                className="h-2"
              />
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
                const isCurrent = key === mockSubscription.plan;
                const isUpgrade = index > currentPlanIndex;
                const isDowngrade = index < currentPlanIndex;

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
                  Your access will continue until {formatDate(mockSubscription.currentPeriodEnd)}
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
                      Your subscription will remain active until {formatDate(mockSubscription.currentPeriodEnd)}. After
                      that, you'll lose access to {currentPlan.name} plan features.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                    <AlertDialogAction onClick={handleCancelSubscription} className="bg-destructive hover:bg-destructive/90">
                      Yes, Cancel
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Subscription;
