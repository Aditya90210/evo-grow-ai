import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CreditCard, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "How to update your account information", slug: "update-account", description: "Learn how to change your email, password, and profile details.", content: "<h2>Updating Account Information</h2><p>Keep your account details current:</p><ol><li>Go to Settings > Account</li><li>Click on the field you want to update</li><li>Enter your new information</li><li>Click Save Changes</li></ol><p>Some changes may require email verification for security.</p>", readTime: "3 min read" },
  { title: "Understanding your billing cycle", slug: "billing-cycle", description: "Everything you need to know about when and how you're billed.", content: "<h2>Billing Cycle Explained</h2><p>Your billing cycle starts on the day you subscribed:</p><ul><li><strong>Monthly plans</strong> - Billed every 30 days</li><li><strong>Annual plans</strong> - Billed once per year with 20% discount</li></ul><p>View your next billing date in Settings > Billing.</p>", readTime: "4 min read" },
  { title: "How to upgrade or downgrade your plan", slug: "change-plan", description: "Step-by-step guide to changing your subscription tier.", content: "<h2>Changing Your Plan</h2><p>Upgrade or downgrade anytime:</p><ol><li>Navigate to Settings > Plans</li><li>Compare available plans</li><li>Click 'Switch to This Plan'</li><li>Confirm the change</li></ol><p>Upgrades take effect immediately. Downgrades take effect at the next billing cycle.</p>", readTime: "3 min read" },
  { title: "Managing payment methods", slug: "payment-methods", description: "Add, remove, or update your credit cards and payment options.", content: "<h2>Managing Payment Methods</h2><p>Keep your payment information up to date:</p><ol><li>Go to Settings > Payment Methods</li><li>Click 'Add Payment Method' to add a new card</li><li>Click the edit icon on existing methods to update</li><li>Set a default payment method for automatic billing</li></ol>", readTime: "3 min read" },
  { title: "Viewing and downloading invoices", slug: "invoices", description: "Access your billing history and download invoices for accounting.", content: "<h2>Accessing Invoices</h2><p>Find all your billing documents:</p><ol><li>Go to Settings > Billing History</li><li>Browse your invoice list by date</li><li>Click on any invoice to view details</li><li>Download as PDF for your records</li></ol>", readTime: "2 min read" },
  { title: "Canceling your subscription", slug: "cancel-subscription", description: "How to cancel and what happens to your data.", content: "<h2>Canceling Your Subscription</h2><p>We're sorry to see you go. Here's how to cancel:</p><ol><li>Go to Settings > Subscription</li><li>Click 'Cancel Subscription'</li><li>Complete the cancellation survey</li><li>Confirm your cancellation</li></ol><p>Your access continues until the end of the current billing period. Data is retained for 30 days after cancellation.</p>", readTime: "4 min read" },
  { title: "Refund policy explained", slug: "refund-policy", description: "Understanding when and how refunds are processed.", content: "<h2>Refund Policy</h2><p>Our refund policy:</p><ul><li><strong>Monthly plans</strong> - No partial refunds for unused time</li><li><strong>Annual plans</strong> - Pro-rated refund within first 30 days</li><li><strong>Processing time</strong> - 5-10 business days</li></ul><p>Contact support for refund requests.</p>", readTime: "3 min read" },
  { title: "Tax and VAT information", slug: "tax-vat", description: "How taxes are applied to your subscription.", content: "<h2>Tax Information</h2><p>Taxes are applied based on your location:</p><ul><li>US customers may see state sales tax</li><li>EU customers are charged VAT</li><li>Business customers can add VAT ID for exemption</li></ul><p>Add your tax ID in Settings > Billing > Tax Information.</p>", readTime: "3 min read" },
  { title: "Team billing and seat management", slug: "team-billing", description: "Managing billing for multiple team members.", content: "<h2>Team Billing</h2><p>Manage seats and costs for your team:</p><ul><li>Each active user requires a seat</li><li>Add or remove seats in Settings > Team</li><li>View per-seat costs in Billing</li><li>Bulk discounts available for 10+ seats</li></ul>", readTime: "4 min read" },
  { title: "Annual vs monthly billing", slug: "annual-vs-monthly", description: "Compare the benefits of different billing periods.", content: "<h2>Annual vs Monthly Billing</h2><p>Choose the billing period that works for you:</p><ul><li><strong>Monthly</strong> - More flexibility, pay as you go</li><li><strong>Annual</strong> - Save 20%, predictable yearly cost</li></ul><p>Switch between billing periods in Settings > Subscription.</p>", readTime: "2 min read" },
  { title: "Failed payment troubleshooting", slug: "failed-payment", description: "What to do when a payment doesn't go through.", content: "<h2>Failed Payment Troubleshooting</h2><p>If your payment fails:</p><ol><li>Check your card has sufficient funds</li><li>Verify the card hasn't expired</li><li>Ensure billing address matches card</li><li>Try a different payment method</li><li>Contact your bank if issues persist</li></ol>", readTime: "3 min read" },
  { title: "Account deletion and data retention", slug: "account-deletion", description: "How to permanently delete your account.", content: "<h2>Account Deletion</h2><p>To permanently delete your account:</p><ol><li>Export any data you want to keep</li><li>Go to Settings > Account > Delete Account</li><li>Confirm by entering your password</li></ol><p><strong>Warning:</strong> This action is irreversible. All data is permanently deleted after 30 days.</p>", readTime: "3 min read" },
];

const AccountBilling = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Account & Billing" categorySlug="account-billing" icon={CreditCard} articles={articles} />;
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
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Account & Billing</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/account-billing/${article.slug}`}>
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

export default AccountBilling;
