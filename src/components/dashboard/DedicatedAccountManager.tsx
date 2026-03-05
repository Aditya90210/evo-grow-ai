import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserCheck, Phone, Mail, Calendar, FileText, Lightbulb, MessageSquare, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const DedicatedAccountManager = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Dedicated Account Management</CardTitle>
        </div>
        <CardDescription>Your enterprise success team & strategic resources</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Account Manager */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">JR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">Jessica Rodriguez</p>
              <p className="text-xs text-muted-foreground">Senior Enterprise Account Manager</p>
              <Badge variant="default" className="text-[10px] mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 inline-block" /> Available
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Phone className="w-4 h-4 mr-1" /> Direct Line
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Mail className="w-4 h-4 mr-1" /> Email
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <MessageSquare className="w-4 h-4 mr-1" /> Chat
            </Button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/help-center/phone-support">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-xs">Enterprise Support</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/help-center/email-support">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-xs">Priority Tickets</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-xs">Schedule QBR</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-xs">Custom Integration Request</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/tutorials">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-xs">Growth Playbooks</span>
            </Link>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2" asChild>
            <Link to="/tutorials">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-xs">Strategic Guides</span>
            </Link>
          </Button>
        </div>

        {/* Upcoming QBR */}
        <div className="p-3 rounded-lg bg-muted/30 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Next Quarterly Business Review</span>
            </div>
            <Badge variant="secondary" className="text-[10px]">Scheduled</Badge>
          </div>
          <p className="text-xs text-muted-foreground">March 15, 2026 • 2:00 PM EST • With Jessica Rodriguez</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DedicatedAccountManager;
