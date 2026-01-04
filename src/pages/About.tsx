import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building the future of business intelligence, empowering companies to make smarter decisions with AI.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-muted-foreground">
                  EVO Grow was founded in 2024 by a team of AI researchers and business strategists who believed that advanced AI should be accessible to every business, not just tech giants.
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">To democratize AI-powered business intelligence for companies of all sizes.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Companies Trust Us</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                <p className="text-muted-foreground text-sm">Decisions Optimized</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground text-sm">Uptime Guaranteed</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong className="text-foreground">Innovation:</strong> We push boundaries to deliver cutting-edge solutions.</li>
                <li>• <strong className="text-foreground">Transparency:</strong> We believe in open communication with our customers.</li>
                <li>• <strong className="text-foreground">Customer Success:</strong> Your growth is our success.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
