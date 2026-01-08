import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Endpoints = () => {
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
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">API Endpoints</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Complete reference for all available API endpoints. Base URL: https://api.evogrow.com/v1
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Predictions</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4 space-y-2">
              <div><code className="text-sm">GET /predictions</code> - List all predictions</div>
              <div><code className="text-sm">GET /predictions/:id</code> - Get specific prediction</div>
              <div><code className="text-sm">POST /predictions/generate</code> - Generate new prediction</div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Insights</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4 space-y-2">
              <div><code className="text-sm">GET /insights</code> - List all insights</div>
              <div><code className="text-sm">GET /insights/:id</code> - Get specific insight</div>
              <div><code className="text-sm">PUT /insights/:id/acknowledge</code> - Mark as acknowledged</div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sources</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4 space-y-2">
              <div><code className="text-sm">GET /datasources</code> - List connected sources</div>
              <div><code className="text-sm">POST /datasources</code> - Connect new source</div>
              <div><code className="text-sm">DELETE /datasources/:id</code> - Disconnect source</div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Actions</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4 space-y-2">
              <div><code className="text-sm">GET /actions</code> - List recommended actions</div>
              <div><code className="text-sm">POST /actions/:id/execute</code> - Execute action</div>
              <div><code className="text-sm">PUT /actions/:id/dismiss</code> - Dismiss action</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Endpoints;
