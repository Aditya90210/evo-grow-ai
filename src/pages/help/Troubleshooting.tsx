import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Wrench, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Troubleshooting = () => {
  const articles = [
    { title: "Can't log in to my account", description: "Solutions for login and authentication issues." },
    { title: "Data not syncing correctly", description: "Troubleshoot sync issues with your data sources." },
    { title: "Slow performance issues", description: "Tips to improve loading times and responsiveness." },
    { title: "Error messages explained", description: "Common error codes and what they mean." },
    { title: "Browser compatibility issues", description: "Fixing display and functionality problems." },
    { title: "Email notifications not arriving", description: "Check your notification settings and spam folder." },
    { title: "Integration connection failures", description: "Reconnect and troubleshoot third-party services." },
    { title: "Missing data after import", description: "Why some records might not appear." },
    { title: "Two-factor authentication problems", description: "Reset or troubleshoot 2FA issues." },
    { title: "Report generation errors", description: "Fix issues with creating and exporting reports." },
    { title: "API rate limiting", description: "Understanding and working within API limits." },
    { title: "Mobile app not working", description: "Troubleshoot the mobile experience." },
    { title: "Cache and cookie issues", description: "When to clear your browser data." },
    { title: "Account locked out", description: "Steps to regain access to your account." },
    { title: "Data export failures", description: "Troubleshoot download and export problems." },
    { title: "Webhook delivery issues", description: "Debug webhook configurations." },
    { title: "Permission and access errors", description: "Understanding access control issues." },
    { title: "Search not returning results", description: "Tips for effective searching." },
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
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Troubleshooting</h1>
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

export default Troubleshooting;
