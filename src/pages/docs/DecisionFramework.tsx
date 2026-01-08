import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DecisionFramework = () => {
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
              <GitBranch className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Decision Framework</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Our Decision Framework helps you make data-driven decisions with confidence and clarity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">The DECIDE Model</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>D - Define:</strong> Clearly state the decision to be made</li>
              <li><strong>E - Evaluate:</strong> Assess available data and predictions</li>
              <li><strong>C - Consider:</strong> Review AI-generated alternatives</li>
              <li><strong>I - Implement:</strong> Execute the chosen action</li>
              <li><strong>D - Document:</strong> Record the decision and rationale</li>
              <li><strong>E - Evaluate:</strong> Review outcomes and learn</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Decision Scoring</h2>
            <p className="text-muted-foreground mb-4">
              Each decision option is scored based on potential impact, risk level, resource requirements, and alignment with your goals.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Scenario Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Use the scenario analyzer to simulate different outcomes before committing to a decision. See how various choices might play out.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Decision History</h2>
            <p className="text-muted-foreground mb-4">
              Track all decisions made through the platform. Review outcomes and improve future decision-making based on what worked.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DecisionFramework;
