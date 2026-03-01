import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Plus, Download, Eye } from "lucide-react";

const leads = [
  { id: 1, name: "John Doe", email: "john@example.com", date: "Today", form: "Contact Form" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", date: "Yesterday", form: "Newsletter" },
  { id: 3, name: "Alex Johnson", email: "alex@example.com", date: "3 days ago", form: "Contact Form" },
];

const LeadCaptureForms = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Lead Capture Forms</CardTitle>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" /> Export CSV
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" /> New Form
            </Button>
          </div>
        </div>
        <CardDescription>Manage forms and view submitted leads</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-xs">{lead.form}</Badge>
                <span className="text-xs text-muted-foreground">{lead.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4 mr-1" /> View All Leads
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForms;
