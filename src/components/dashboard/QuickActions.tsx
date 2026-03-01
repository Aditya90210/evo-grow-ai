import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Share2,
  FileText,
  GitBranch,
  ClipboardList,
  Plug,
} from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const actions = [
  { id: "ai-content", label: "Generate AI Content", icon: Sparkles },
  { id: "social-post", label: "Create Social Post", icon: Share2 },
  { id: "landing-copy", label: "Build Landing Page Copy", icon: FileText },
  { id: "funnel", label: "Start New Funnel", icon: GitBranch },
  { id: "lead-form", label: "Create Lead Form", icon: ClipboardList },
  { id: "connect-channel", label: "Connect Social Channel", icon: Plug },
];

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="outline"
                className="flex flex-col h-auto py-4 px-3 gap-2 text-center"
                onClick={() => onAction(action.id)}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium leading-tight">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
