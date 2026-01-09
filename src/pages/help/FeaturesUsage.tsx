import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesUsage = () => {
  const articles = [
    { title: "Using the Business Twin feature", description: "Create and manage your digital business twin." },
    { title: "AI-powered predictions explained", description: "How our AI generates accurate business predictions." },
    { title: "Decision framework walkthrough", description: "Step-by-step guide to using the decision tools." },
    { title: "Creating custom reports", description: "Build reports tailored to your business needs." },
    { title: "Data visualization options", description: "Explore different ways to visualize your data." },
    { title: "Exporting data and reports", description: "Download your data in various formats." },
    { title: "Setting up automated workflows", description: "Create automation rules to save time." },
    { title: "Using the API for custom integrations", description: "Technical guide to our API endpoints." },
    { title: "Collaboration features", description: "Work together with your team on projects." },
    { title: "Version history and rollback", description: "Track changes and restore previous versions." },
    { title: "Advanced filtering and search", description: "Find exactly what you're looking for quickly." },
    { title: "Customizing your dashboard", description: "Personalize your workspace layout." },
    { title: "Notification preferences", description: "Control when and how you receive alerts." },
    { title: "Keyboard shortcuts", description: "Speed up your workflow with shortcuts." },
    { title: "Mobile app features", description: "Using the platform on your phone or tablet." },
    { title: "Offline mode capabilities", description: "What you can do without an internet connection." },
    { title: "Batch operations", description: "Perform actions on multiple items at once." },
    { title: "Templates and presets", description: "Use pre-built templates to get started faster." },
    { title: "Sharing and permissions", description: "Control who can see and edit your data." },
    { title: "Audit logs and activity tracking", description: "Monitor all actions in your workspace." },
    { title: "Webhooks configuration", description: "Set up real-time notifications to external services." },
    { title: "Custom fields and metadata", description: "Add custom data fields to your records." },
    { title: "Bulk import and export", description: "Move large amounts of data efficiently." },
    { title: "Scheduled reports", description: "Automatically generate and send reports." },
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
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Features & Usage</h1>
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

export default FeaturesUsage;
