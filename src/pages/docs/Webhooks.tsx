import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Webhook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Webhooks = () => {
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
              <Webhook className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Webhooks</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Receive real-time notifications when events occur in your EVO Scalvex account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Webhooks</h2>
            <p className="text-muted-foreground mb-4">
              Navigate to Settings → Webhooks to create a new webhook endpoint. Provide your URL and select the events you want to receive.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Available Events</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><code>prediction.created</code> - New prediction generated</li>
              <li><code>prediction.updated</code> - Prediction confidence changed</li>
              <li><code>insight.new</code> - New insight discovered</li>
              <li><code>action.recommended</code> - New action recommended</li>
              <li><code>alert.triggered</code> - Alert threshold reached</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payload Format</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <pre className="text-sm">{`{
  "event": "prediction.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "pred_123",
    "type": "revenue",
    "confidence": 0.87
  }
}`}</pre>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Verification</h2>
            <p className="text-muted-foreground mb-4">
              All webhook requests include a signature header (X-EvoGrow-Signature) for verification. Use your webhook secret to validate authenticity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Webhooks;
