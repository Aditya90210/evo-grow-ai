import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticlePage from "@/components/help/ArticlePage";

const articles = [
  { title: "Using the Business Twin feature", slug: "business-twin", description: "Create and manage your digital business twin.", content: "<h2>Business Twin Feature</h2><p>The Business Twin is a digital representation of your business:</p><ol><li>Navigate to Business Twin section</li><li>Click 'Create New Twin'</li><li>Define your business processes</li><li>Connect relevant data sources</li><li>Configure simulation parameters</li></ol><p>Your Business Twin will update in real-time as new data flows in.</p>", readTime: "6 min read" },
  { title: "AI-powered predictions explained", slug: "ai-predictions", description: "How our AI generates accurate business predictions.", content: "<h2>AI Predictions</h2><p>Our AI analyzes your data to predict future outcomes:</p><ul><li><strong>Data Collection</strong> - AI gathers data from all connected sources</li><li><strong>Pattern Recognition</strong> - Advanced algorithms identify trends</li><li><strong>Prediction Generation</strong> - Forecasts are created with confidence levels</li><li><strong>Continuous Learning</strong> - The AI improves with more data</li></ul>", readTime: "5 min read" },
  { title: "Decision framework walkthrough", slug: "decision-framework", description: "Step-by-step guide to using the decision tools.", content: "<h2>Decision Framework</h2><p>Make data-driven decisions with our framework:</p><ol><li>Define the decision you need to make</li><li>Input relevant variables and constraints</li><li>Review AI-generated scenarios</li><li>Compare outcomes and risks</li><li>Make your decision with confidence</li></ol>", readTime: "7 min read" },
  { title: "Creating custom reports", slug: "custom-reports", description: "Build reports tailored to your business needs.", content: "<h2>Custom Reports</h2><p>Create reports that match your needs:</p><ol><li>Go to Reports > Create New</li><li>Choose a template or start from scratch</li><li>Add metrics and visualizations</li><li>Configure filters and date ranges</li><li>Save and schedule if desired</li></ol>", readTime: "5 min read" },
  { title: "Data visualization options", slug: "data-visualization", description: "Explore different ways to visualize your data.", content: "<h2>Data Visualization</h2><p>Choose from multiple visualization types:</p><ul><li>Line charts for trends over time</li><li>Bar charts for comparisons</li><li>Pie charts for proportions</li><li>Heat maps for density</li><li>Scatter plots for correlations</li></ul>", readTime: "4 min read" },
  { title: "Exporting data and reports", slug: "exporting-data", description: "Download your data in various formats.", content: "<h2>Exporting Data</h2><p>Export your data in multiple formats:</p><ul><li><strong>CSV</strong> - For spreadsheet applications</li><li><strong>PDF</strong> - For sharing and printing</li><li><strong>Excel</strong> - For advanced analysis</li><li><strong>JSON</strong> - For developers</li></ul>", readTime: "3 min read" },
  { title: "Setting up automated workflows", slug: "automated-workflows", description: "Create automation rules to save time.", content: "<h2>Automated Workflows</h2><p>Automate repetitive tasks:</p><ol><li>Go to Settings > Workflows</li><li>Click 'Create Workflow'</li><li>Define trigger conditions</li><li>Add actions to perform</li><li>Test and activate</li></ol>", readTime: "6 min read" },
  { title: "Using the API for custom integrations", slug: "api-usage", description: "Technical guide to our API endpoints.", content: "<h2>API Usage</h2><p>Build custom integrations with our API:</p><ul><li>RESTful API with JSON responses</li><li>OAuth 2.0 authentication</li><li>Rate limiting at 1000 requests/hour</li><li>Comprehensive documentation available</li></ul><p>Get your API key in Settings > Developer.</p>", readTime: "8 min read" },
  { title: "Collaboration features", slug: "collaboration", description: "Work together with your team on projects.", content: "<h2>Collaboration Features</h2><p>Work effectively with your team:</p><ul><li>Share dashboards and reports</li><li>Comment on specific data points</li><li>Mention team members with @username</li><li>Track changes and version history</li></ul>", readTime: "4 min read" },
  { title: "Version history and rollback", slug: "version-history", description: "Track changes and restore previous versions.", content: "<h2>Version History</h2><p>Never lose your work:</p><ul><li>Automatic version saving every 5 minutes</li><li>View all previous versions in History tab</li><li>Compare versions side by side</li><li>Restore any previous version with one click</li></ul>", readTime: "3 min read" },
  { title: "Advanced filtering and search", slug: "filtering-search", description: "Find exactly what you're looking for quickly.", content: "<h2>Advanced Filtering</h2><p>Powerful search capabilities:</p><ul><li>Filter by any field or attribute</li><li>Combine multiple filters with AND/OR logic</li><li>Save filter presets for quick access</li><li>Full-text search across all content</li></ul>", readTime: "4 min read" },
  { title: "Customizing your dashboard", slug: "customize-dashboard", description: "Personalize your workspace layout.", content: "<h2>Dashboard Customization</h2><p>Make the dashboard your own:</p><ol><li>Click the customize button</li><li>Drag and drop widgets to rearrange</li><li>Add new widgets from the library</li><li>Resize widgets as needed</li><li>Save your layout</li></ol>", readTime: "3 min read" },
];

const FeaturesUsage = () => {
  const { articleSlug } = useParams();

  if (articleSlug) {
    return <ArticlePage category="Features & Usage" categorySlug="features-usage" icon={Sparkles} articles={articles} />;
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
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Features & Usage</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <Link key={index} to={`/help-center/features-usage/${article.slug}`}>
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

export default FeaturesUsage;
