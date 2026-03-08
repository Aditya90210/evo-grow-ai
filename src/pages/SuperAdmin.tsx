import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSuperAdmin } from "@/hooks/useSuperAdmin";
import { Loader2, Shield, LayoutDashboard, Users, CreditCard, DollarSign, Brain, FileText, ShieldAlert, Settings, ScrollText, UserCog, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

import PlatformOverview from "@/components/superadmin/PlatformOverview";
import GlobalUserManagement from "@/components/superadmin/GlobalUserManagement";
import SubscriptionControl from "@/components/superadmin/SubscriptionControl";
import RevenueAnalytics from "@/components/superadmin/RevenueAnalytics";
import AIUsageMonitoring from "@/components/superadmin/AIUsageMonitoring";
import ContentMonitoring from "@/components/superadmin/ContentMonitoring";
import FraudDetection from "@/components/superadmin/FraudDetection";
import PlatformSettings from "@/components/superadmin/PlatformSettings";
import SystemLogs from "@/components/superadmin/SystemLogs";
import RoleManagement from "@/components/superadmin/RoleManagement";

const navItems = [
  { id: "platform-overview", label: "Overview", icon: LayoutDashboard },
  { id: "user-management", label: "Users", icon: Users },
  { id: "subscriptions", label: "Subscriptions", icon: CreditCard },
  { id: "revenue", label: "Revenue", icon: DollarSign },
  { id: "ai-usage", label: "AI Usage", icon: Brain },
  { id: "content", label: "Content", icon: FileText },
  { id: "fraud", label: "Fraud", icon: ShieldAlert },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "logs", label: "Logs", icon: ScrollText },
  { id: "roles", label: "Roles", icon: UserCog },
];

const SuperAdmin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const { isSuperAdmin, loading: roleLoading, logAction } = useSuperAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!authLoading && !roleLoading && user && !isSuperAdmin) {
      navigate("/pricing");
    }
  }, [authLoading, roleLoading, user, isSuperAdmin, navigate]);

  useEffect(() => {
    if (isSuperAdmin && user) {
      logAction("super_admin_access", { page: "control_center" });
    }
  }, [isSuperAdmin, user]);

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isSuperAdmin) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-destructive" />
            <div>
              <h1 className="text-lg font-bold text-foreground">Super Admin Control Center</h1>
              <p className="text-xs text-muted-foreground">EVO Scalvex Platform Administration</p>
            </div>
            <Badge variant="destructive" className="ml-2">SUPER ADMIN</Badge>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/home"><Button variant="outline" size="sm">User Dashboard</Button></Link>
            <Button variant="ghost" size="sm" onClick={signOut}>Sign Out</Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 border-b border-border/30 bg-background/90 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollTo(item.id)}
                className="shrink-0 gap-1 text-xs"
              >
                <item.icon className="h-3 w-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 space-y-16">
        {/* Welcome */}
        <div className="p-6 rounded-xl border border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-destructive" />
            <div>
              <h2 className="text-2xl font-bold text-foreground">Welcome, Super Admin</h2>
              <p className="text-muted-foreground">All systems operational. Full platform control active.</p>
            </div>
          </div>
        </div>

        <PlatformOverview />
        <GlobalUserManagement />
        <SubscriptionControl />
        <RevenueAnalytics />
        <AIUsageMonitoring />
        <ContentMonitoring />
        <FraudDetection />
        <PlatformSettings />
        <SystemLogs />
        <RoleManagement />
      </main>
    </div>
  );
};

export default SuperAdmin;
