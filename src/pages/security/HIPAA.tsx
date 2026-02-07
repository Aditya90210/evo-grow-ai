import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft, CheckCircle, Heart, Lock, FileText, UserCheck, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HIPAA = () => {
  const safeguards = [
    {
      category: "Administrative Safeguards",
      items: [
        "Security management processes and risk analysis",
        "Workforce security and access management",
        "Information access management policies",
        "Security awareness and training programs",
        "Security incident procedures",
        "Contingency planning and disaster recovery",
      ],
    },
    {
      category: "Physical Safeguards",
      items: [
        "Facility access controls",
        "Workstation use and security policies",
        "Device and media controls",
        "Physical access audit controls",
      ],
    },
    {
      category: "Technical Safeguards",
      items: [
        "Access control mechanisms",
        "Audit controls and monitoring",
        "Data integrity controls",
        "Transmission security (encryption)",
        "Authentication protocols",
      ],
    },
  ];

  const features = [
    { icon: Lock, title: "End-to-End Encryption", description: "All PHI is encrypted using AES-256 in transit and at rest." },
    { icon: UserCheck, title: "Access Controls", description: "Role-based access with multi-factor authentication for all users." },
    { icon: FileText, title: "Audit Logging", description: "Comprehensive audit trails for all access to protected health information." },
    { icon: Server, title: "Secure Infrastructure", description: "HIPAA-compliant hosting with isolated environments for healthcare data." },
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
            <div className="p-4 rounded-2xl bg-red-500/10">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Regulation</Badge>
              <h1 className="text-3xl font-bold">HIPAA Compliance</h1>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg">
              EVO Scalvex is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We implement comprehensive safeguards to protect Protected Health Information (PHI) for healthcare organizations.
            </p>
          </div>

          {/* Status Card */}
          <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold">HIPAA Compliant</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We execute Business Associate Agreements (BAAs) with all healthcare customers and maintain comprehensive HIPAA compliance documentation.
            </p>
            <Badge variant="outline">BAA Available</Badge>
          </div>

          {/* Key Features */}
          <h2 className="text-2xl font-bold mb-6">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <feature.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Safeguards */}
          <h2 className="text-2xl font-bold mb-6">HIPAA Safeguards</h2>
          <div className="space-y-6 mb-12">
            {safeguards.map((section, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BAA Request */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
            <h2 className="text-xl font-semibold mb-2">Need a Business Associate Agreement?</h2>
            <p className="text-muted-foreground mb-4">
              We provide BAAs to all healthcare customers. Contact our compliance team to get started.
            </p>
            <Link to="/help-center/email-support">
              <Button>Request BAA</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HIPAA;
