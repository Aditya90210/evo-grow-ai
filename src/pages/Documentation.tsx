import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Documentation = () => {
  const sections = [
    { 
      title: "Getting Started", 
      description: "Learn the basics and set up your account", 
      items: [
        { name: "Quick Start Guide", slug: "quick-start-guide" },
        { name: "Installation", slug: "installation" },
        { name: "First Steps", slug: "first-steps" }
      ] 
    },
    { 
      title: "Core Concepts", 
      description: "Understand the fundamental concepts", 
      items: [
        { name: "Business Twin", slug: "business-twin" },
        { name: "AI Predictions", slug: "ai-predictions" },
        { name: "Decision Framework", slug: "decision-framework" }
      ] 
    },
    { 
      title: "API Reference", 
      description: "Complete API documentation", 
      items: [
        { name: "Authentication", slug: "authentication" },
        { name: "Endpoints", slug: "endpoints" },
        { name: "Webhooks", slug: "webhooks" }
      ] 
    },
    { 
      title: "Integrations", 
      description: "Connect with other tools", 
      items: [
        { name: "Salesforce", slug: "salesforce" },
        { name: "Slack", slug: "slack" },
        { name: "Custom Integrations", slug: "custom-integrations" }
      ] 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to know about using EVO Grow effectively.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="pl-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sections.map((section) => (
              <div key={section.title} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/docs/${item.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full justify-between p-0 h-auto text-muted-foreground hover:text-primary">
                          {item.name} <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
