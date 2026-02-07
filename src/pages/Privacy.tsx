import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: January 1, 2026</p>
          </div>

          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="space-y-8">
              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, company information, and usage data.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and platform.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
                <p className="text-muted-foreground">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
                <p className="text-muted-foreground">You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data.</p>
              </section>

              <section className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us at privacy@evoscalvex.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
