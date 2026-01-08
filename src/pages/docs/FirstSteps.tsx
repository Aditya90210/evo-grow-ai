import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FirstSteps = () => {
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
              <Footprints className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">First Steps</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Congratulations on setting up your account! Here's what to do next to get the most out of EVO Grow.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Explore the Dashboard</h2>
            <p className="text-muted-foreground mb-4">
              Your dashboard is your command center. Familiarize yourself with the key sections: Overview, Predictions, Insights, and Actions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Set Your Goals</h2>
            <p className="text-muted-foreground mb-4">
              Define your business objectives in the Goals section. Our AI will use these to prioritize recommendations and track your progress.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Invite Your Team</h2>
            <p className="text-muted-foreground mb-4">
              Collaboration is key. Invite team members from Settings → Team to share insights and delegate actions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Configure Notifications</h2>
            <p className="text-muted-foreground mb-4">
              Set up alerts for important events, predictions, and action items. Choose email, push, or in-app notifications.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Review Your First Insights</h2>
            <p className="text-muted-foreground mb-4">
              Within 24 hours of connecting your data, you'll start seeing AI-generated insights. Review them and take your first recommended actions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FirstSteps;
