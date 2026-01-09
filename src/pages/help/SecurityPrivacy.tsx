import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecurityPrivacy = () => {
  const articles = [
    { title: "Our security practices", description: "How we keep your data safe and secure." },
    { title: "Data encryption explained", description: "Understanding how your data is encrypted." },
    { title: "Two-factor authentication setup", description: "Add an extra layer of security to your account." },
    { title: "Password best practices", description: "Creating and managing strong passwords." },
    { title: "GDPR compliance", description: "How we comply with European data regulations." },
    { title: "SOC 2 certification", description: "Our security audit and compliance status." },
    { title: "Data retention policies", description: "How long we keep your data and why." },
    { title: "Right to data portability", description: "Export all your data at any time." },
    { title: "Third-party security audits", description: "Independent verification of our security." },
    { title: "Incident response procedures", description: "What happens if there's a security incident." },
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
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Security & Privacy</h1>
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

export default SecurityPrivacy;
