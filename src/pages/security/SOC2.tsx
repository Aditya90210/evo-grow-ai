import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft, CheckCircle, FileCheck, Clock, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SOC2 = () => {
  const principles = [
    {
      title: "Security",
      description: "Information and systems are protected against unauthorized access, unauthorized disclosure of information, and damage to systems.",
      controls: ["Access controls", "Encryption", "Vulnerability management", "Security monitoring"],
    },
    {
      title: "Availability",
      description: "Information and systems are available for operation and use as committed or agreed.",
      controls: ["Disaster recovery", "Incident management", "Capacity planning", "Performance monitoring"],
    },
    {
      title: "Processing Integrity",
      description: "System processing is complete, valid, accurate, timely, and authorized.",
      controls: ["Quality assurance", "Data validation", "Error handling", "Transaction logging"],
    },
    {
      title: "Confidentiality",
      description: "Information designated as confidential is protected as committed or agreed.",
      controls: ["Data classification", "Encryption at rest", "Access restrictions", "Secure disposal"],
    },
    {
      title: "Privacy",
      description: "Personal information is collected, used, retained, disclosed, and disposed of in conformity with commitments.",
      controls: ["Privacy policies", "Consent management", "Data minimization", "Individual rights"],
    },
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
            <div className="p-4 rounded-2xl bg-primary/10">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Certification</Badge>
              <h1 className="text-3xl font-bold">SOC 2 Type II Compliance</h1>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg">
              EVO Grow maintains SOC 2 Type II compliance, demonstrating our commitment to the highest standards of security, availability, and data protection. Our compliance is audited annually by independent third-party auditors.
            </p>
          </div>

          {/* Status Card */}
          <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-semibold">Current Status: Compliant</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-muted-foreground" />
                <span>Last Audit: October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>Next Audit: October 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-muted-foreground" />
                <span>Auditor: Deloitte</span>
              </div>
            </div>
          </div>

          {/* Trust Service Principles */}
          <h2 className="text-2xl font-bold mb-6">Trust Service Principles</h2>
          <div className="space-y-6 mb-12">
            {principles.map((principle, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
                <div className="flex flex-wrap gap-2">
                  {principle.controls.map((control, i) => (
                    <Badge key={i} variant="outline">{control}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Request Report */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
            <h2 className="text-xl font-semibold mb-2">Need Our SOC 2 Report?</h2>
            <p className="text-muted-foreground mb-4">
              We provide our SOC 2 Type II report to customers and prospects under NDA.
            </p>
            <Link to="/help-center/email-support">
              <Button>Request Report</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SOC2;
