import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft, CheckCircle, Award, FileCheck, Clock, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ISO27001 = () => {
  const domains = [
    { number: "A.5", title: "Information Security Policies", description: "Management direction for information security" },
    { number: "A.6", title: "Organization of Information Security", description: "Internal organization and mobile/teleworking" },
    { number: "A.7", title: "Human Resource Security", description: "Prior to, during, and termination of employment" },
    { number: "A.8", title: "Asset Management", description: "Responsibility and classification of assets" },
    { number: "A.9", title: "Access Control", description: "Business requirements and user access management" },
    { number: "A.10", title: "Cryptography", description: "Cryptographic controls and key management" },
    { number: "A.11", title: "Physical Security", description: "Secure areas and equipment security" },
    { number: "A.12", title: "Operations Security", description: "Operational procedures and protection from malware" },
    { number: "A.13", title: "Communications Security", description: "Network security and information transfer" },
    { number: "A.14", title: "System Acquisition & Development", description: "Security requirements and development security" },
    { number: "A.15", title: "Supplier Relationships", description: "Information security in supplier relationships" },
    { number: "A.16", title: "Incident Management", description: "Management of security incidents" },
    { number: "A.17", title: "Business Continuity", description: "Information security aspects of business continuity" },
    { number: "A.18", title: "Compliance", description: "Compliance with legal and contractual requirements" },
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
            <div className="p-4 rounded-2xl bg-purple-500/10">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Certification</Badge>
              <h1 className="text-3xl font-bold">ISO 27001 Certification</h1>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg">
              EVO Scalvex maintains ISO 27001:2022 certification, the international standard for information security management systems (ISMS). This certification demonstrates our commitment to systematically managing sensitive information.
            </p>
          </div>

          {/* Status Card */}
          <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold">Current Status: Certified</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-muted-foreground" />
                <span>Certified: March 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>Valid Until: March 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-muted-foreground" />
                <span>Auditor: BSI Group</span>
              </div>
            </div>
          </div>

          {/* What is ISO 27001 */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-8">
            <h2 className="text-xl font-semibold mb-4">What is ISO 27001?</h2>
            <p className="text-muted-foreground mb-4">
              ISO 27001 is the leading international standard for information security. It provides a framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS).
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Risk Management</Badge>
              <Badge variant="outline">Continuous Improvement</Badge>
              <Badge variant="outline">Security Controls</Badge>
              <Badge variant="outline">Compliance</Badge>
            </div>
          </div>

          {/* Control Domains */}
          <h2 className="text-2xl font-bold mb-6">Annex A Control Domains</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {domains.map((domain, index) => (
              <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-start gap-3">
                  <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-500 text-xs font-mono">
                    {domain.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{domain.title}</h3>
                    <p className="text-xs text-muted-foreground">{domain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request Certificate */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
            <h2 className="text-xl font-semibold mb-2">Need Our ISO 27001 Certificate?</h2>
            <p className="text-muted-foreground mb-4">
              We provide our ISO 27001 certificate to customers and prospects upon request.
            </p>
            <Link to="/help-center/email-support">
              <Button>Request Certificate</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ISO27001;
