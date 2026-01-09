import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Phone, ArrowLeft, Clock, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PhoneSupport = () => {
  const phoneNumbers = [
    { region: "United States", number: "+1 (800) 555-0199", hours: "Mon-Fri, 9am-6pm EST" },
    { region: "United Kingdom", number: "+44 20 7123 4567", hours: "Mon-Fri, 9am-5pm GMT" },
    { region: "Europe", number: "+49 30 1234 5678", hours: "Mon-Fri, 9am-5pm CET" },
    { region: "Asia Pacific", number: "+65 6789 0123", hours: "Mon-Fri, 9am-5pm SGT" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/help-center" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Phone Support</h1>
              <p className="text-muted-foreground">Speak directly with our support team</p>
            </div>

            <div className="grid gap-4 mb-8">
              {phoneNumbers.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-border/50 bg-card/50 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold">{item.region}</h3>
                      </div>
                      <a href={`tel:${item.number.replace(/\s/g, '')}`} className="text-2xl font-bold text-primary hover:underline">
                        {item.number}
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {item.hours}
                      </div>
                    </div>
                    <Button asChild>
                      <a href={`tel:${item.number.replace(/\s/g, '')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Headphones className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enterprise Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enterprise customers have access to 24/7 priority phone support with dedicated account managers.
                  </p>
                  <Link to="/pricing">
                    <Button variant="outline">Learn About Enterprise</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Tip:</strong> For faster support, please have your account email and any relevant error messages ready when you call.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhoneSupport;
