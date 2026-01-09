import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Wrench, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "Can't log in to my account", slug: "cant-login", description: "Solutions for login and authentication issues.", content: "<h2>Login Troubleshooting</h2><p>Try these steps:</p><ol><li>Check your email address is correct</li><li>Use 'Forgot Password' to reset</li><li>Clear browser cookies and cache</li><li>Try a different browser</li><li>Disable browser extensions</li></ol><p>Still stuck? Contact support with your email address.</p>", readTime: "4 min read" },
  { title: "Data not syncing correctly", slug: "data-not-syncing", description: "Troubleshoot sync issues with your data sources.", content: "<h2>Sync Issues</h2><p>Resolve data sync problems:</p><ol><li>Check integration connection status</li><li>Verify permissions are still valid</li><li>Review sync logs for errors</li><li>Try manual sync</li><li>Reconnect the integration if needed</li></ol>", readTime: "5 min read" },
  { title: "Slow performance issues", slug: "slow-performance", description: "Tips to improve loading times and responsiveness.", content: "<h2>Performance Optimization</h2><p>Speed up your experience:</p><ul><li>Use a modern browser (Chrome, Firefox, Edge)</li><li>Clear browser cache</li><li>Reduce dashboard widgets</li><li>Use date filters to limit data</li><li>Check your internet connection speed</li></ul>", readTime: "4 min read" },
  { title: "Error messages explained", slug: "error-messages", description: "Common error codes and what they mean.", content: "<h2>Error Messages</h2><p>Common errors and solutions:</p><ul><li><strong>401</strong> - Session expired, please log in again</li><li><strong>403</strong> - Permission denied, contact admin</li><li><strong>404</strong> - Resource not found</li><li><strong>500</strong> - Server error, try again later</li><li><strong>503</strong> - Service temporarily unavailable</li></ul>", readTime: "3 min read" },
  { title: "Browser compatibility issues", slug: "browser-compatibility", description: "Fixing display and functionality problems.", content: "<h2>Browser Compatibility</h2><p>Ensure best compatibility:</p><ul><li>Use latest Chrome, Firefox, Safari, or Edge</li><li>Enable JavaScript</li><li>Disable ad blockers on our site</li><li>Clear cache if issues persist</li></ul>", readTime: "3 min read" },
  { title: "Email notifications not arriving", slug: "email-notifications", description: "Check your notification settings and spam folder.", content: "<h2>Email Notification Issues</h2><p>Not receiving emails?</p><ol><li>Check spam/junk folder</li><li>Add our domain to safe senders</li><li>Verify email in account settings</li><li>Check notification preferences</li></ol>", readTime: "3 min read" },
  { title: "Integration connection failures", slug: "integration-failures", description: "Reconnect and troubleshoot third-party services.", content: "<h2>Integration Failures</h2><p>Fix connection issues:</p><ol><li>Disconnect the integration</li><li>Wait 30 seconds</li><li>Reconnect with fresh credentials</li><li>Re-authorize permissions</li><li>Test with a simple sync</li></ol>", readTime: "4 min read" },
  { title: "Missing data after import", slug: "missing-data", description: "Why some records might not appear.", content: "<h2>Missing Import Data</h2><p>Data might be missing due to:</p><ul><li>Format errors in source file</li><li>Duplicate records filtered out</li><li>Field mapping issues</li><li>Import size limits exceeded</li></ul><p>Check the import log for details.</p>", readTime: "4 min read" },
  { title: "Two-factor authentication problems", slug: "2fa-problems", description: "Reset or troubleshoot 2FA issues.", content: "<h2>2FA Troubleshooting</h2><p>If you can't access 2FA:</p><ol><li>Check your authenticator app time sync</li><li>Use backup codes if available</li><li>Contact support with identity verification</li></ol><p>Keep backup codes in a safe place.</p>", readTime: "4 min read" },
  { title: "Report generation errors", slug: "report-errors", description: "Fix issues with creating and exporting reports.", content: "<h2>Report Errors</h2><p>Common report issues:</p><ul><li><strong>Timeout</strong> - Reduce date range or filters</li><li><strong>No data</strong> - Check filter settings</li><li><strong>Export failed</strong> - Try a smaller file format</li></ul>", readTime: "3 min read" },
];

const Troubleshooting = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Troubleshooting" categorySlug="troubleshooting" icon={Wrench} articles={articles} />;
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
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Troubleshooting</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/troubleshooting/${article.slug}`}>
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

export default Troubleshooting;
