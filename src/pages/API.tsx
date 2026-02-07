import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const API = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">API</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Developer</span> API
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build powerful integrations with our comprehensive REST API. Access all EVO Scalvex features programmatically.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-semibold">Quick Start</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  curl -X GET "https://api.evogrow.com/v1/insights" \<br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-xl font-semibold mb-2">RESTful Design</h3>
                <p className="text-muted-foreground text-sm">Clean, predictable endpoints following REST best practices.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-xl font-semibold mb-2">Webhooks</h3>
                <p className="text-muted-foreground text-sm">Real-time event notifications for your applications.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-xl font-semibold mb-2">SDKs</h3>
                <p className="text-muted-foreground text-sm">Official libraries for Python, Node.js, and more.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-xl font-semibold mb-2">Rate Limiting</h3>
                <p className="text-muted-foreground text-sm">Generous rate limits with clear documentation.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/api-documentation">View API Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default API;
