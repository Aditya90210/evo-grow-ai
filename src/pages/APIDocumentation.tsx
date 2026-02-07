import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Code, Terminal, Key, Shield, Zap, Database, Webhook, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const APIDocumentation = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/v1/insights",
      description: "Retrieve business insights and analytics data",
    },
    {
      method: "POST",
      path: "/v1/workflows",
      description: "Create and trigger automated workflows",
    },
    {
      method: "GET",
      path: "/v1/contacts",
      description: "List all contacts with filtering options",
    },
    {
      method: "PUT",
      path: "/v1/contacts/:id",
      description: "Update contact information",
    },
    {
      method: "DELETE",
      path: "/v1/contacts/:id",
      description: "Remove a contact from your database",
    },
    {
      method: "GET",
      path: "/v1/reports",
      description: "Generate and retrieve custom reports",
    },
  ];

  const sections = [
    {
      icon: Key,
      title: "Authentication",
      description: "Learn how to authenticate your API requests using API keys and OAuth 2.0.",
    },
    {
      icon: Database,
      title: "Data Models",
      description: "Understand the structure of objects returned by the API.",
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Set up real-time notifications for events in your account.",
    },
    {
      icon: Shield,
      title: "Rate Limits",
      description: "Understand our rate limiting policies and best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">API Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">API</span> Reference
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete documentation for the EVO Scalvex REST API. Everything you need to build powerful integrations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Quick Links */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all cursor-pointer"
                >
                  <section.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              ))}
            </div>

            {/* Base URL */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold">Base URL</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <code className="text-foreground">https://api.evogrow.com/v1</code>
              </div>
            </div>

            {/* Authentication */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Key className="w-5 h-5 text-primary" />
                <span className="font-semibold">Authentication</span>
              </div>
              <p className="text-muted-foreground mb-4">
                All API requests require authentication. Include your API key in the Authorization header:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

            {/* Endpoints */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-semibold">API Endpoints</span>
              </div>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1 rounded text-xs font-bold w-fit ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-500"
                          : endpoint.method === "POST"
                          ? "bg-blue-500/20 text-blue-500"
                          : endpoint.method === "PUT"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm text-foreground">{endpoint.path}</code>
                    <span className="text-sm text-muted-foreground md:ml-auto">
                      {endpoint.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Request */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <span className="font-semibold">Example Request</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground whitespace-pre-wrap">
{`curl -X GET "https://api.evogrow.com/v1/insights" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </div>

            {/* Example Response */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <span className="font-semibold">Example Response</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground whitespace-pre-wrap">
{`{
  "success": true,
  "data": {
    "insights": [
      {
        "id": "ins_123",
        "type": "revenue",
        "value": 125000,
        "change": 12.5,
        "period": "monthly"
      }
    ],
    "meta": {
      "total": 1,
      "page": 1
    }
  }
}`}
                </pre>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Need help getting started? Check out our API quickstart guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/api">Back to API Overview</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/help-center">Get Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default APIDocumentation;
