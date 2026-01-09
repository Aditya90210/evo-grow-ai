import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "Our security practices", slug: "security-practices", description: "How we keep your data safe and secure.", content: "<h2>Security Practices</h2><p>We take security seriously:</p><ul><li>SOC 2 Type II certified</li><li>Regular penetration testing</li><li>24/7 security monitoring</li><li>Bug bounty program</li><li>Security-first development practices</li></ul>", readTime: "4 min read" },
  { title: "Data encryption explained", slug: "data-encryption", description: "Understanding how your data is encrypted.", content: "<h2>Data Encryption</h2><p>Your data is protected at every stage:</p><ul><li><strong>In transit</strong> - TLS 1.3 encryption</li><li><strong>At rest</strong> - AES-256 encryption</li><li><strong>Backups</strong> - Encrypted and geo-redundant</li></ul>", readTime: "3 min read" },
  { title: "Two-factor authentication setup", slug: "2fa-setup", description: "Add an extra layer of security to your account.", content: "<h2>Setting Up 2FA</h2><p>Enable two-factor authentication:</p><ol><li>Go to Settings > Security</li><li>Click 'Enable 2FA'</li><li>Scan QR code with authenticator app</li><li>Enter verification code</li><li>Save your backup codes securely</li></ol>", readTime: "4 min read" },
  { title: "Password best practices", slug: "password-best-practices", description: "Creating and managing strong passwords.", content: "<h2>Password Best Practices</h2><p>Create strong passwords:</p><ul><li>Use at least 12 characters</li><li>Mix letters, numbers, and symbols</li><li>Never reuse passwords</li><li>Use a password manager</li><li>Change passwords if compromised</li></ul>", readTime: "3 min read" },
  { title: "GDPR compliance", slug: "gdpr-compliance", description: "How we comply with European data regulations.", content: "<h2>GDPR Compliance</h2><p>We are fully GDPR compliant:</p><ul><li>Data processing agreements available</li><li>Right to access your data</li><li>Right to deletion (right to be forgotten)</li><li>Data portability supported</li><li>EU data residency options</li></ul>", readTime: "5 min read" },
  { title: "SOC 2 certification", slug: "soc2-certification", description: "Our security audit and compliance status.", content: "<h2>SOC 2 Certification</h2><p>Our SOC 2 Type II certification covers:</p><ul><li>Security</li><li>Availability</li><li>Processing Integrity</li><li>Confidentiality</li></ul><p>Request our audit report through your account manager.</p>", readTime: "3 min read" },
  { title: "Data retention policies", slug: "data-retention", description: "How long we keep your data and why.", content: "<h2>Data Retention</h2><p>Our retention policies:</p><ul><li><strong>Active accounts</strong> - Data retained while account is active</li><li><strong>Deleted accounts</strong> - 30 days then permanently deleted</li><li><strong>Audit logs</strong> - 1 year retention</li><li><strong>Backups</strong> - 90 days rolling</li></ul>", readTime: "3 min read" },
  { title: "Right to data portability", slug: "data-portability", description: "Export all your data at any time.", content: "<h2>Data Portability</h2><p>Export your data anytime:</p><ol><li>Go to Settings > Data Export</li><li>Select data types to export</li><li>Choose format (JSON or CSV)</li><li>Request export</li><li>Download when ready</li></ol>", readTime: "3 min read" },
  { title: "Third-party security audits", slug: "security-audits", description: "Independent verification of our security.", content: "<h2>Security Audits</h2><p>We undergo regular audits:</p><ul><li>Annual SOC 2 audits</li><li>Quarterly penetration tests</li><li>Continuous vulnerability scanning</li><li>Third-party code reviews</li></ul>", readTime: "3 min read" },
  { title: "Incident response procedures", slug: "incident-response", description: "What happens if there's a security incident.", content: "<h2>Incident Response</h2><p>Our response process:</p><ol><li>Detection and containment</li><li>Impact assessment</li><li>Customer notification within 72 hours</li><li>Root cause analysis</li><li>Remediation and prevention</li></ol>", readTime: "4 min read" },
];

const SecurityPrivacy = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Security & Privacy" categorySlug="security-privacy" icon={Shield} articles={articles} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/help-center">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Security & Privacy</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/security-privacy/${article.slug}`}>
                <div className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                  <h3 className="font-semibold mb-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPrivacy;
