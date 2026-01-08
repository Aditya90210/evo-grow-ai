import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CustomIntegrations = () => {
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
              <Puzzle className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Custom Integrations</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Build custom integrations using our API and webhooks to connect any data source.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Integration Options</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>REST API:</strong> Full programmatic access to all features</li>
              <li><strong>Webhooks:</strong> Real-time event notifications</li>
              <li><strong>Data Import:</strong> Bulk data upload via CSV or API</li>
              <li><strong>SDK:</strong> Libraries for Node.js, Python, and Ruby</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Building a Custom Integration</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>Generate API credentials in Settings</li>
              <li>Review the API documentation</li>
              <li>Set up data sync endpoints</li>
              <li>Configure webhooks for real-time updates</li>
              <li>Test in sandbox environment</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Format</h2>
            <p className="text-muted-foreground mb-4">
              Custom data must follow our schema. Each record should include timestamps, identifiers, and metric values.
            </p>
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <pre className="text-sm">{`{
  "source": "custom_erp",
  "timestamp": "2024-01-15T10:30:00Z",
  "entity_type": "sale",
  "entity_id": "sale_123",
  "metrics": {
    "amount": 5000,
    "quantity": 10
  }
}`}</pre>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Support</h2>
            <p className="text-muted-foreground mb-4">
              Our integration team can help with complex custom setups. Contact integrations@evogrow.com for assistance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomIntegrations;
