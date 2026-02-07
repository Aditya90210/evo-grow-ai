import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Rocket, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "Creating your first account", slug: "creating-account", description: "Step-by-step guide to signing up and getting started.", content: "<h2>Creating Your Account</h2><p>Getting started with EVO Scalvex is easy. Follow these simple steps:</p><ol><li><strong>Visit the signup page</strong> - Go to our website and click 'Get Started'</li><li><strong>Enter your email</strong> - Use your work email for best results</li><li><strong>Create a password</strong> - Choose a strong, unique password</li><li><strong>Verify your email</strong> - Check your inbox for a verification link</li><li><strong>Complete your profile</strong> - Add your name and company information</li></ol><p>Once verified, you'll have full access to your dashboard and can start exploring features.</p>", readTime: "3 min read" },
  { title: "Platform overview and navigation", slug: "platform-overview", description: "Understanding the main dashboard and key features.", content: "<h2>Platform Overview</h2><p>The EVO Scalvex platform is designed for intuitive navigation:</p><ul><li><strong>Dashboard</strong> - Your home base with key metrics and insights</li><li><strong>Business Twin</strong> - Create and manage your digital business model</li><li><strong>Predictions</strong> - View AI-powered forecasts and recommendations</li><li><strong>Integrations</strong> - Connect your existing tools and data sources</li><li><strong>Reports</strong> - Generate and schedule custom reports</li></ul><p>Use the sidebar navigation to move between sections quickly.</p>", readTime: "4 min read" },
  { title: "Setting up your organization", slug: "setup-organization", description: "Configure your workspace for your team.", content: "<h2>Setting Up Your Organization</h2><p>Configure your workspace to match your business structure:</p><ol><li>Navigate to Settings > Organization</li><li>Add your company name and logo</li><li>Set your timezone and currency preferences</li><li>Configure department or team structures</li><li>Set up approval workflows if needed</li></ol><p>Your organization settings affect how data is displayed and how team members collaborate.</p>", readTime: "5 min read" },
  { title: "Inviting team members", slug: "inviting-team", description: "How to add colleagues to your workspace.", content: "<h2>Inviting Team Members</h2><p>Collaboration is key to getting the most from EVO Scalvex:</p><ol><li>Go to Settings > Team Members</li><li>Click 'Invite Member'</li><li>Enter their email address</li><li>Select their role (Admin, Editor, or Viewer)</li><li>Click 'Send Invitation'</li></ol><p>Invited members will receive an email with instructions to join your workspace.</p>", readTime: "3 min read" },
  { title: "Quick start tutorial", slug: "quick-start", description: "Get up and running in under 10 minutes.", content: "<h2>Quick Start Tutorial</h2><p>Follow these steps to get value from EVO Scalvex in under 10 minutes:</p><ol><li><strong>Connect your first data source</strong> - Start with your most important integration</li><li><strong>Create a simple Business Twin</strong> - Model one key process</li><li><strong>View initial predictions</strong> - See what insights are already available</li><li><strong>Set up one alert</strong> - Get notified about important changes</li></ol><p>You're now ready to explore more advanced features!</p>", readTime: "10 min read" },
  { title: "Understanding the dashboard", slug: "understanding-dashboard", description: "Learn what each section of the dashboard shows.", content: "<h2>Understanding the Dashboard</h2><p>Your dashboard provides at-a-glance insights:</p><ul><li><strong>Key Metrics</strong> - Your most important KPIs</li><li><strong>Recent Activity</strong> - Latest changes and updates</li><li><strong>Predictions Summary</strong> - Upcoming trends and forecasts</li><li><strong>Quick Actions</strong> - Common tasks you perform often</li></ul><p>Customize your dashboard by clicking the settings icon in the top right.</p>", readTime: "4 min read" },
  { title: "Basic terminology and concepts", slug: "terminology", description: "Key terms you'll encounter while using the platform.", content: "<h2>Basic Terminology</h2><p>Understanding these key terms will help you navigate the platform:</p><ul><li><strong>Business Twin</strong> - A digital representation of your business processes</li><li><strong>Prediction</strong> - AI-generated forecast based on your data</li><li><strong>Integration</strong> - A connection to an external data source</li><li><strong>Workflow</strong> - Automated sequence of actions</li><li><strong>Insight</strong> - Actionable recommendation from the AI</li></ul>", readTime: "3 min read" },
  { title: "System requirements", slug: "system-requirements", description: "Browser and device compatibility information.", content: "<h2>System Requirements</h2><p>EVO Scalvex works best with:</p><ul><li><strong>Browsers</strong> - Chrome, Firefox, Safari, or Edge (latest 2 versions)</li><li><strong>Screen Resolution</strong> - 1280x720 or higher recommended</li><li><strong>Internet</strong> - Stable broadband connection</li><li><strong>Mobile</strong> - iOS 14+ or Android 10+</li></ul><p>JavaScript must be enabled for full functionality.</p>", readTime: "2 min read" },
];

const GettingStarted = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Getting Started" categorySlug="getting-started" icon={Rocket} articles={articles} />;
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
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Getting Started</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/getting-started/${article.slug}`}>
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

export default GettingStarted;
