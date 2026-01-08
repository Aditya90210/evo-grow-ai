import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SlackIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl">
          <Link to="/documentation">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Slack Integration</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Get EVO Grow insights and alerts directly in your Slack workspace.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Receive predictions and insights in channels</li>
              <li>Get personal alerts via DM</li>
              <li>Use slash commands to query data</li>
              <li>Interactive action buttons</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setup Steps</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>Go to Integrations → Slack</li>
              <li>Click "Add to Slack"</li>
              <li>Authorize in your Slack workspace</li>
              <li>Select default channel for notifications</li>
              <li>Configure notification preferences</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Slash Commands</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4 space-y-2">
              <div><code className="text-sm">/evogrow insights</code> - View latest insights</div>
              <div><code className="text-sm">/evogrow predict [topic]</code> - Get predictions</div>
              <div><code className="text-sm">/evogrow actions</code> - List pending actions</div>
              <div><code className="text-sm">/evogrow help</code> - Show available commands</div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Channel Notifications</h2>
            <p className="text-muted-foreground mb-4">
              Configure which channels receive which types of notifications. You can set up different channels for different teams or topics.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SlackIntegration;
