import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SalesforceIntegration = () => {
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
              <Cloud className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Salesforce Integration</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Connect your Salesforce CRM to unlock powerful sales predictions and customer insights.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What Gets Synced</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Leads and Opportunities</li>
              <li>Accounts and Contacts</li>
              <li>Sales Activities and Tasks</li>
              <li>Custom Objects (configurable)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setup Steps</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>Go to Integrations → Salesforce</li>
              <li>Click "Connect Salesforce"</li>
              <li>Authorize EVO Grow in Salesforce</li>
              <li>Select objects to sync</li>
              <li>Configure sync frequency</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Features Enabled</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Deal probability scoring</li>
              <li>Lead prioritization</li>
              <li>Customer churn prediction</li>
              <li>Revenue forecasting by pipeline</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Permissions Required</h2>
            <p className="text-muted-foreground mb-4">
              Your Salesforce user needs API access and read permissions on the objects you want to sync.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SalesforceIntegration;
