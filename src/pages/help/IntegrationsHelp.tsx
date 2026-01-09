import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Plug, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "Connecting Salesforce", slug: "connecting-salesforce", description: "Step-by-step Salesforce integration setup.", content: "<h2>Salesforce Integration</h2><p>Connect your Salesforce account:</p><ol><li>Go to Integrations > Salesforce</li><li>Click 'Connect Salesforce'</li><li>Log in with your Salesforce credentials</li><li>Grant access permissions</li><li>Select which objects to sync</li></ol><p>Data will sync automatically every 15 minutes.</p>", readTime: "5 min read" },
  { title: "Connecting Slack", slug: "connecting-slack", description: "Get notifications and updates in your Slack workspace.", content: "<h2>Slack Integration</h2><p>Set up Slack notifications:</p><ol><li>Go to Integrations > Slack</li><li>Click 'Add to Slack'</li><li>Choose your workspace</li><li>Select a channel for notifications</li><li>Configure notification preferences</li></ol>", readTime: "4 min read" },
  { title: "Connecting HubSpot", slug: "connecting-hubspot", description: "Sync your CRM data with HubSpot.", content: "<h2>HubSpot Integration</h2><p>Connect your HubSpot CRM:</p><ol><li>Navigate to Integrations > HubSpot</li><li>Click 'Connect HubSpot'</li><li>Authenticate with your HubSpot account</li><li>Map fields between platforms</li><li>Enable bidirectional sync if needed</li></ol>", readTime: "5 min read" },
  { title: "Connecting Google Workspace", slug: "connecting-google", description: "Integrate with Google Drive, Sheets, and more.", content: "<h2>Google Workspace Integration</h2><p>Connect Google apps:</p><ul><li><strong>Google Drive</strong> - Access and import files</li><li><strong>Google Sheets</strong> - Sync data automatically</li><li><strong>Google Calendar</strong> - Schedule reports and alerts</li></ul>", readTime: "4 min read" },
  { title: "Connecting Microsoft 365", slug: "connecting-microsoft", description: "Sync with Outlook, Teams, and Office apps.", content: "<h2>Microsoft 365 Integration</h2><p>Connect Microsoft services:</p><ol><li>Go to Integrations > Microsoft 365</li><li>Sign in with your Microsoft account</li><li>Grant necessary permissions</li><li>Choose apps to connect</li></ol>", readTime: "4 min read" },
  { title: "Connecting Stripe", slug: "connecting-stripe", description: "Track payments and revenue data.", content: "<h2>Stripe Integration</h2><p>Monitor your revenue with Stripe:</p><ol><li>Navigate to Integrations > Stripe</li><li>Click 'Connect Stripe'</li><li>Log in to your Stripe account</li><li>Authorize data access</li></ol><p>Revenue data syncs in real-time.</p>", readTime: "3 min read" },
  { title: "Managing integration permissions", slug: "integration-permissions", description: "Control what data each integration can access.", content: "<h2>Integration Permissions</h2><p>Control data access:</p><ul><li>View permissions in Integration Settings</li><li>Revoke specific permissions anytime</li><li>Set read-only vs read-write access</li><li>Audit integration activity logs</li></ul>", readTime: "4 min read" },
  { title: "Troubleshooting integration errors", slug: "integration-errors", description: "Common issues and how to fix them.", content: "<h2>Troubleshooting Integrations</h2><p>Common issues and solutions:</p><ul><li><strong>Connection failed</strong> - Reconnect and re-authenticate</li><li><strong>Sync errors</strong> - Check field mappings</li><li><strong>Rate limiting</strong> - Reduce sync frequency</li><li><strong>Permission denied</strong> - Update OAuth permissions</li></ul>", readTime: "5 min read" },
  { title: "Disconnecting integrations", slug: "disconnecting", description: "How to safely remove connected services.", content: "<h2>Disconnecting Integrations</h2><p>To safely disconnect:</p><ol><li>Go to the integration settings</li><li>Click 'Disconnect'</li><li>Confirm the disconnection</li><li>Historical data is preserved</li></ol>", readTime: "2 min read" },
  { title: "Integration data sync frequency", slug: "sync-frequency", description: "Understanding when data updates.", content: "<h2>Sync Frequency</h2><p>Data sync schedules vary by integration:</p><ul><li><strong>Real-time</strong> - Stripe, Webhooks</li><li><strong>Every 15 minutes</strong> - Salesforce, HubSpot</li><li><strong>Hourly</strong> - Google Workspace</li><li><strong>Daily</strong> - Batch imports</li></ul>", readTime: "3 min read" },
];

const IntegrationsHelp = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Integrations" categorySlug="integrations" icon={Plug} articles={articles} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/help-center">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Plug className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Integrations</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/integrations/${article.slug}`}>
                <div className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                  <h3 className="font-semibold mb-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationsHelp;
