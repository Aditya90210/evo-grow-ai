import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: January 1, 2026</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground">Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">Essential Cookies</h2>
                <p className="text-muted-foreground">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">Analytics Cookies</h2>
                <p className="text-muted-foreground">We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">Marketing Cookies</h2>
                <p className="text-muted-foreground">These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground">You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
