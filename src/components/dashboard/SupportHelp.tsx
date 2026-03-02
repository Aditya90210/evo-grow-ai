import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, BookOpen, ArrowUpRight, Phone, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import type { PlanLimits } from "@/lib/planLimits";

interface SupportHelpProps {
  plan: PlanLimits;
}

const SupportHelp = ({ plan }: SupportHelpProps) => {
  const isPro = plan.name === "professional";

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">
            {isPro ? "Support & Performance Resources" : "Support & Help"}
          </CardTitle>
        </div>
        <CardDescription>
          {isPro ? `${plan.supportLevel} support with optimization guides` : "Get help and learn how to maximize your plan"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/help-center">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-xs">Help Center</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/help-center/email-support">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-xs">{isPro ? "Email + Chat" : "Submit Ticket"}</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/tutorials">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-xs">{isPro ? "Strategy Library" : "Tutorials"}</span>
            </Link>
          </Button>
          {isPro ? (
            <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
              <Link to="/tutorials">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-xs">Optimization Guides</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
              <Link to="/pricing">
                <ArrowUpRight className="w-5 h-5 text-primary" />
                <span className="text-xs">Upgrade Plan</span>
              </Link>
            </Button>
          )}
        </div>
        {plan.upgradeTo && (
          <Button variant="outline" className="w-full mt-3" asChild>
            <Link to="/pricing">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              Upgrade to {plan.upgradeTo.charAt(0).toUpperCase() + plan.upgradeTo.slice(1)} Plan
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SupportHelp;
