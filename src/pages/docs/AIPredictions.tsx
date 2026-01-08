import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIPredictions = () => {
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
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">AI Predictions</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Leverage advanced machine learning to forecast trends, identify opportunities, and anticipate challenges.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Predictions</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>Revenue Forecasting:</strong> Predict future revenue based on historical trends and market conditions</li>
              <li><strong>Customer Churn:</strong> Identify customers at risk of leaving before it happens</li>
              <li><strong>Market Trends:</strong> Stay ahead of industry shifts and emerging opportunities</li>
              <li><strong>Resource Optimization:</strong> Forecast resource needs for efficient allocation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Prediction Accuracy</h2>
            <p className="text-muted-foreground mb-4">
              Our models achieve 85-95% accuracy depending on data quality and prediction timeframe. Accuracy improves as more data is collected.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Confidence Scores</h2>
            <p className="text-muted-foreground mb-4">
              Each prediction comes with a confidence score indicating reliability. Higher scores mean more certain predictions based on stronger data patterns.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Acting on Predictions</h2>
            <p className="text-muted-foreground mb-4">
              Predictions are paired with actionable recommendations. Review the suggested actions and implement them directly from your dashboard.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIPredictions;
