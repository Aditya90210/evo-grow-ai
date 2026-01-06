import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Code, FileText, HelpCircle, Zap } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const IntegrationDocs = () => {
  const [searchParams] = useSearchParams();
  const integration = searchParams.get("integration") || "Integration";

  const sections = [
    {
      icon: Book,
      title: "Overview",
      description: `Learn about the ${integration} integration capabilities, features, and how it can enhance your EVO Grow experience.`,
      topics: ["Introduction", "Key Features", "Use Cases", "Supported Features"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Detailed API documentation for developers who want to build custom integrations or extend functionality.",
      topics: ["Authentication", "Endpoints", "Rate Limits", "Error Handling"],
    },
    {
      icon: FileText,
      title: "Configuration Guide",
      description: "Step-by-step instructions for configuring and customizing your integration settings.",
      topics: ["Initial Setup", "Field Mapping", "Sync Settings", "Advanced Options"],
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and their solutions to help you resolve problems quickly.",
      topics: ["Connection Issues", "Sync Errors", "Permission Problems", "FAQ"],
    },
  ];

  const quickLinks = [
    { title: "Getting Started Guide", href: "#getting-started" },
    { title: "Authentication Setup", href: "#auth" },
    { title: "Data Sync Configuration", href: "#sync" },
    { title: "Webhook Events", href: "#webhooks" },
    { title: "Best Practices", href: "#best-practices" },
    { title: "Release Notes", href: "#releases" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/integrations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Integrations
          </Link>

          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Documentation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient capitalize">{integration}</span> Documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Comprehensive documentation for integrating and using {integration} with EVO Grow.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {sections.map((section) => (
                  <div key={section.title} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 rounded-full text-sm bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      {quickLinks.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <Link to="/help-center">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Support
                      </Button>
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                    <h4 className="font-semibold mb-2">Ready to Start?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set up your {integration} integration now.
                    </p>
                    <Link to={`/integrations/get-started?integration=${encodeURIComponent(integration)}`}>
                      <Button size="sm" className="w-full gap-2">
                        Get Started <Zap className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationDocs;