import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessTwin = () => {
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
              <Building className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Business Twin</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Your Business Twin is a digital replica of your business that learns and evolves with your data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What is a Business Twin?</h2>
            <p className="text-muted-foreground mb-4">
              A Business Twin is an AI-powered model that mirrors your business operations, market position, and growth patterns. It continuously learns from your data to provide accurate predictions and recommendations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
            <p className="text-muted-foreground mb-4">
              Your Business Twin ingests data from all connected sources, identifies patterns, and creates a comprehensive model of how your business operates. This model is used to simulate scenarios and predict outcomes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Real-time synchronization with your business data</li>
              <li>Scenario simulation for strategic planning</li>
              <li>Anomaly detection and early warning systems</li>
              <li>Competitive analysis and market positioning</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Training Your Business Twin</h2>
            <p className="text-muted-foreground mb-4">
              The more data you connect, the smarter your Business Twin becomes. We recommend connecting at least 3 data sources for optimal accuracy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessTwin;
