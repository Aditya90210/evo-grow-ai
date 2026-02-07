import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickStartGuide = () => {
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
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Quick Start Guide</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Get up and running with EVO Scalvex in just a few minutes. This guide will walk you through the essential steps to start using our platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 1: Create Your Account</h2>
            <p className="text-muted-foreground mb-4">
              Sign up for EVO Scalvex using your business email. You'll receive a confirmation email to verify your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 2: Set Up Your Business Profile</h2>
            <p className="text-muted-foreground mb-4">
              Enter your business details including industry, size, and primary objectives. This helps our AI tailor predictions to your specific needs.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 3: Connect Your Data Sources</h2>
            <p className="text-muted-foreground mb-4">
              Integrate your existing tools like CRM, analytics platforms, and financial software to give EVO Scalvex a complete picture of your business.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 4: Explore Your Dashboard</h2>
            <p className="text-muted-foreground mb-4">
              Navigate through your personalized dashboard to view insights, predictions, and recommended actions for your business growth.
            </p>
            
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 mt-8">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground">
                Our support team is available 24/7. Contact us at support@evoscalvex.com or visit our Help Center.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuickStartGuide;
