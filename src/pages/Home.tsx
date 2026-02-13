import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription, planFeatures } from "@/hooks/useSubscription";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Loader2, Zap, Rocket, Star, Building2, Crown, Gem,
  BarChart3, Brain, Target, Users, Plug, Code, Shield,
  Headphones, ArrowUpRight, Check, Lock,
} from "lucide-react";

const planIcons: Record<string, any> = {
  starter: Zap,
  growth: Rocket,
  professional: Star,
  business: Building2,
  enterprise: Crown,
  ultimate: Gem,
};

interface Profile {
  display_name: string | null;
  avatar_url: string | null;
}

const Home = () => {
  const { user, loading: authLoading } = useAuth();
  const { subscription, loading: subLoading, currentPlan, planInfo } = useSubscription();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("display_name, avatar_url")
        .eq("id", user.id)
        .maybeSingle();
      if (data) setProfile(data);
    };
    if (user) fetchProfile();
  }, [user]);

  if (authLoading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const PlanIcon = planIcons[currentPlan] || Zap;
  const displayName = profile?.display_name || user?.email?.split("@")[0] || "User";

  const getInitials = () => {
    if (profile?.display_name) return profile.display_name.slice(0, 2).toUpperCase();
    if (user?.email) return user.email.slice(0, 2).toUpperCase();
    return "U";
  };

  // Dashboard widgets based on plan features
  const widgets = [
    {
      title: "Business Twin",
      description: currentPlan === "starter" ? "Basic business modeling" : "Advanced AI-powered business modeling",
      icon: Brain,
      available: true,
      link: "/studio",
      badge: currentPlan === "starter" ? "Basic" : "Advanced",
    },
    {
      title: "AI Strategy Reports",
      description: `${planInfo.reportsLimit} reports available`,
      icon: BarChart3,
      available: true,
      link: "/studio",
      badge: planInfo.reportsLimit,
    },
    {
      title: "Decision Framework",
      description: currentPlan === "starter" ? "Basic decision tools" : "Full decision intelligence suite",
      icon: Target,
      available: true,
      link: "/studio",
      badge: currentPlan === "starter" ? "Basic" : "Full",
    },
    {
      title: "Execution Automation",
      description: "Automate your business workflows",
      icon: Rocket,
      available: planInfo.hasExecutionAutomation,
      link: "/studio",
      requiredPlan: "growth",
    },
    {
      title: "Team Members",
      description: `${planInfo.teamMembers} members allowed`,
      icon: Users,
      available: true,
      link: "/dashboard",
      badge: planInfo.teamMembers,
    },
    {
      title: "Custom Integrations",
      description: "Connect your favorite tools",
      icon: Plug,
      available: planInfo.hasCustomIntegrations,
      link: "/integrations",
      requiredPlan: "professional",
    },
    {
      title: "API Access",
      description: "Full REST API access",
      icon: Code,
      available: planInfo.hasApiAccess,
      link: "/api",
      requiredPlan: "professional",
    },
    {
      title: "Custom AI Training",
      description: "Train AI on your business data",
      icon: Brain,
      available: planInfo.hasCustomAI,
      link: "/studio",
      requiredPlan: "business",
    },
    {
      title: "White-label",
      description: "Brand customization options",
      icon: Shield,
      available: planInfo.hasWhiteLabel,
      link: "/studio",
      requiredPlan: "business",
    },
    {
      title: "Dedicated Manager",
      description: "Your personal success manager",
      icon: Headphones,
      available: planInfo.hasDedicatedManager,
      link: "/help-center",
      requiredPlan: "enterprise",
    },
  ];

  const availableWidgets = widgets.filter((w) => w.available);
  const lockedWidgets = widgets.filter((w) => !w.available);

  // Plan order for upgrade suggestions
  const planOrder = ["starter", "growth", "professional", "business", "enterprise", "ultimate"];
  const currentPlanIndex = planOrder.indexOf(currentPlan);
  const nextPlan = currentPlanIndex < planOrder.length - 1 ? planOrder[currentPlanIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-14 h-14">
                <AvatarImage src={profile?.avatar_url || ""} alt={displayName} />
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Welcome back, {displayName}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <PlanIcon className="w-4 h-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {planInfo.label} Plan
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {subscription?.status || "active"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">Edit Profile</Link>
              </Button>
              {nextPlan && (
                <Button size="sm" asChild>
                  <Link to="/pricing">
                    Upgrade to {planFeatures[nextPlan].label}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Plan Overview Card */}
          <Card className="mb-8 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <PlanIcon className="w-5 h-5 text-primary" />
                Your {planInfo.label} Plan Includes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {planInfo.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Reports Used</p>
                    <p className="text-2xl font-bold text-foreground">
                      {planInfo.reportsLimit === "Unlimited" ? "∞" : "0/5"}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary/50" />
                </div>
                {planInfo.reportsLimit !== "Unlimited" && (
                  <Progress value={0} className="mt-3" />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                    <p className="text-2xl font-bold text-foreground">1/{planInfo.teamMembers}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary/50" />
                </div>
                {planInfo.teamMembers !== "Unlimited" && (
                  <Progress value={(1 / parseInt(planInfo.teamMembers)) * 100} className="mt-3" />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Support</p>
                    <p className="text-2xl font-bold text-foreground">{planInfo.supportLevel}</p>
                  </div>
                  <Headphones className="w-8 h-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Features */}
          <h2 className="text-xl font-bold text-foreground mb-4">Your Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {availableWidgets.map((widget) => {
              const Icon = widget.icon;
              return (
                <Card key={widget.title} className="group hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{widget.title}</CardTitle>
                      </div>
                      {widget.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {widget.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">{widget.description}</CardDescription>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={widget.link}>
                        Open
                        <ArrowUpRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Locked Features */}
          {lockedWidgets.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-muted-foreground" />
                Unlock More Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lockedWidgets.map((widget) => {
                  const Icon = widget.icon;
                  const requiredPlanInfo = planFeatures[widget.requiredPlan || "growth"];
                  return (
                    <Card key={widget.title} className="opacity-60 border-dashed">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-muted">
                              <Icon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-base">{widget.title}</CardTitle>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {requiredPlanInfo.label}+
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-3">{widget.description}</CardDescription>
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <Link to="/pricing">
                            Upgrade to {requiredPlanInfo.label}
                            <ArrowUpRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
