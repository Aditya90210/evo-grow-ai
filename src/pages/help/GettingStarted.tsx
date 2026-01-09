import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Rocket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GettingStarted = () => {
  const articles = [
    { title: "Creating your first account", description: "Step-by-step guide to signing up and getting started." },
    { title: "Platform overview and navigation", description: "Understanding the main dashboard and key features." },
    { title: "Setting up your organization", description: "Configure your workspace for your team." },
    { title: "Inviting team members", description: "How to add colleagues to your workspace." },
    { title: "Quick start tutorial", description: "Get up and running in under 10 minutes." },
    { title: "Understanding the dashboard", description: "Learn what each section of the dashboard shows." },
    { title: "Basic terminology and concepts", description: "Key terms you'll encounter while using the platform." },
    { title: "System requirements", description: "Browser and device compatibility information." },
  ];

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
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Getting Started</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                <h3 className="font-semibold mb-1">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GettingStarted;
