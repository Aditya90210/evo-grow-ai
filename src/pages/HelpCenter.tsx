import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { HelpCircle, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
  const categories = [
    { title: "Account & Billing", count: 12 },
    { title: "Getting Started", count: 8 },
    { title: "Features & Usage", count: 24 },
    { title: "Integrations", count: 15 },
    { title: "Troubleshooting", count: 18 },
    { title: "Security & Privacy", count: 10 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We <span className="text-gradient">Help</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-10" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {categories.map((cat) => (
                <div key={cat.title} className="p-4 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                  <h3 className="font-semibold">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} articles</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">Chat with our support team in real-time.</p>
                <Button>Start Chat</Button>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Get a response within 24 hours.</p>
                <Button variant="outline">Send Email</Button>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-4">Available Mon-Fri, 9am-5pm EST.</p>
                <Button variant="outline">Call Us</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
