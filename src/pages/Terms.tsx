import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: January 1, 2026</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">By accessing or using EVO Grow services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground">We grant you a limited, non-exclusive, non-transferable license to use our services for your internal business purposes, subject to these terms.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">4. Service Availability</h2>
                <p className="text-muted-foreground">We strive to provide 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">EVO Grow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">6. Modifications</h2>
                <p className="text-muted-foreground">We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
