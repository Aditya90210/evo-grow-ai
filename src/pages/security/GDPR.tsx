import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft, CheckCircle, Globe, Users, Lock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GDPR = () => {
  const rights = [
    { title: "Right to Access", description: "Users can request a copy of all personal data we hold about them." },
    { title: "Right to Rectification", description: "Users can request correction of inaccurate personal data." },
    { title: "Right to Erasure", description: "Users can request deletion of their personal data under certain conditions." },
    { title: "Right to Restrict Processing", description: "Users can request limitation of how we use their data." },
    { title: "Right to Data Portability", description: "Users can receive their data in a structured, machine-readable format." },
    { title: "Right to Object", description: "Users can object to processing based on legitimate interests or for direct marketing." },
  ];

  const measures = [
    { icon: Lock, title: "Data Encryption", description: "All personal data is encrypted both in transit and at rest using AES-256 encryption." },
    { icon: Users, title: "Access Controls", description: "Strict role-based access controls ensure only authorized personnel can access personal data." },
    { icon: Globe, title: "EU Data Residency", description: "Data for EU customers is stored and processed within the European Union." },
    { icon: FileText, title: "Data Processing Agreements", description: "We maintain DPAs with all sub-processors who handle personal data." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl">
          <Link to="/security">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Security
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-blue-500/10">
              <Globe className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Regulation</Badge>
              <h1 className="text-3xl font-bold">GDPR Compliance</h1>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg">
              EVO Grow is fully compliant with the General Data Protection Regulation (GDPR). We are committed to protecting the privacy and rights of individuals in the European Union and beyond.
            </p>
          </div>

          {/* Status Card */}
          <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold">GDPR Compliant Since 2018</h2>
            </div>
            <p className="text-muted-foreground">
              We have been fully compliant with GDPR requirements since its enforcement date of May 25, 2018.
            </p>
          </div>

          {/* Data Subject Rights */}
          <h2 className="text-2xl font-bold mb-6">Your Rights Under GDPR</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {rights.map((right, index) => (
              <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Measures */}
          <h2 className="text-2xl font-bold mb-6">Technical & Organizational Measures</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {measures.map((measure, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <measure.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">{measure.title}</h3>
                <p className="text-sm text-muted-foreground">{measure.description}</p>
              </div>
            ))}
          </div>

          {/* Data Protection Officer */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Protection Officer</h2>
            <p className="text-muted-foreground mb-4">
              Our Data Protection Officer oversees our compliance with GDPR and handles all data protection inquiries.
            </p>
            <div className="text-sm">
              <p><strong>Email:</strong> dpo@evogrow.com</p>
              <p><strong>Address:</strong> EVO Grow, Data Protection Office, 123 Tech Street, Berlin, Germany</p>
            </div>
          </div>

          {/* Request Actions */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
            <h2 className="text-xl font-semibold mb-2">Exercise Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              To exercise any of your rights under GDPR, please contact our Data Protection Officer.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/privacy">
                <Button variant="outline">Privacy Policy</Button>
              </Link>
              <Link to="/help-center/email-support">
                <Button>Contact DPO</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
