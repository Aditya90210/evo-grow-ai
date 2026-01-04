import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Lock, Shield, Server, Key } from "lucide-react";

const Security = () => {
  const features = [
    { icon: Lock, title: "End-to-End Encryption", description: "All data is encrypted in transit and at rest using AES-256 encryption." },
    { icon: Shield, title: "SOC 2 Compliant", description: "We maintain SOC 2 Type II compliance for enterprise-grade security." },
    { icon: Server, title: "Secure Infrastructure", description: "Hosted on enterprise-grade cloud infrastructure with 99.99% uptime." },
    { icon: Key, title: "Access Controls", description: "Role-based access controls and multi-factor authentication support." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="text-gradient">Security</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures to protect your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-6">Security Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="font-semibold">SOC 2</span>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="font-semibold">GDPR</span>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="font-semibold">HIPAA</span>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="font-semibold">ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
