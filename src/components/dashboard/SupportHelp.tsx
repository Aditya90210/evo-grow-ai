import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const SupportHelp = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Support & Help</CardTitle>
        </div>
        <CardDescription>Get help and learn how to maximize your plan</CardDescription>
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
              <span className="text-xs">Submit Ticket</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/tutorials">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-xs">Tutorials</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/pricing">
              <ArrowUpRight className="w-5 h-5 text-primary" />
              <span className="text-xs">Upgrade Plan</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportHelp;
