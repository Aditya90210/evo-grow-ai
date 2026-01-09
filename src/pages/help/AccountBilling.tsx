import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CreditCard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AccountBilling = () => {
  const articles = [
    { title: "How to update your account information", description: "Learn how to change your email, password, and profile details." },
    { title: "Understanding your billing cycle", description: "Everything you need to know about when and how you're billed." },
    { title: "How to upgrade or downgrade your plan", description: "Step-by-step guide to changing your subscription tier." },
    { title: "Managing payment methods", description: "Add, remove, or update your credit cards and payment options." },
    { title: "Viewing and downloading invoices", description: "Access your billing history and download invoices for accounting." },
    { title: "Canceling your subscription", description: "How to cancel and what happens to your data." },
    { title: "Refund policy explained", description: "Understanding when and how refunds are processed." },
    { title: "Tax and VAT information", description: "How taxes are applied to your subscription." },
    { title: "Team billing and seat management", description: "Managing billing for multiple team members." },
    { title: "Annual vs monthly billing", description: "Compare the benefits of different billing periods." },
    { title: "Failed payment troubleshooting", description: "What to do when a payment doesn't go through." },
    { title: "Account deletion and data retention", description: "How to permanently delete your account." },
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
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Account & Billing</h1>
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

export default AccountBilling;
