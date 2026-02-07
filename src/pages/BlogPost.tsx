import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, { title: string; date: string; category: string; excerpt: string; content: string; author: string }> = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business Decision Making",
    date: "Jan 2, 2026",
    category: "AI Insights",
    excerpt: "Explore how artificial intelligence is transforming the way businesses make strategic decisions.",
    author: "Sarah Chen",
    content: `Artificial intelligence is rapidly reshaping the landscape of business decision-making. From predictive analytics to automated insights, AI is enabling organizations to make faster, more informed decisions than ever before.

## The Rise of AI-Powered Analytics

Traditional business intelligence relied heavily on historical data and manual analysis. Today, AI-powered systems can process vast amounts of data in real-time, identifying patterns and trends that would be impossible for humans to detect.

## Key Benefits of AI in Decision Making

1. **Speed**: AI can analyze millions of data points in seconds
2. **Accuracy**: Machine learning models continuously improve their predictions
3. **Scalability**: AI systems can handle growing data volumes effortlessly
4. **Objectivity**: AI removes human bias from data analysis

## Looking Ahead

As AI technology continues to evolve, we can expect even more sophisticated decision-making tools. Natural language processing will make it easier for non-technical users to query complex datasets, while advanced machine learning models will provide increasingly accurate predictions.

The future of business intelligence is not about replacing human decision-makers, but about augmenting their capabilities with powerful AI tools.`
  },
  "optimize-business-twin": {
    title: "5 Ways to Optimize Your Business Twin",
    date: "Dec 28, 2025",
    category: "Product Tips",
    excerpt: "Get the most out of your digital twin with these practical optimization strategies.",
    author: "Michael Rivera",
    content: `Your digital business twin is only as powerful as how you configure and use it. Here are five proven strategies to maximize the value of your EVO Scalvex Business Twin.

## 1. Keep Your Data Fresh

The accuracy of your Business Twin depends on the quality and freshness of your data. Set up automated data syncs to ensure your twin always reflects the current state of your business.

## 2. Define Clear Metrics

Identify the key performance indicators that matter most to your business. Configure your Business Twin to focus on these metrics for more relevant insights.

## 3. Run Regular Simulations

Don't just use your Business Twin reactively. Run regular what-if scenarios to anticipate potential challenges and opportunities before they arise.

## 4. Integrate All Data Sources

The more data your Business Twin has access to, the more comprehensive its insights will be. Connect all relevant data sources, from CRM to financial systems.

## 5. Train Your Team

Ensure your team understands how to interpret and act on the insights provided by your Business Twin. Regular training sessions can significantly increase adoption and ROI.`
  },
  "techcorp-case-study": {
    title: "Case Study: How TechCorp Increased Revenue by 40%",
    date: "Dec 20, 2025",
    category: "Case Studies",
    excerpt: "Learn how one of our customers achieved remarkable growth using EVO Scalvex.",
    author: "Emily Thompson",
    content: `TechCorp, a mid-sized software company, was struggling with flat revenue growth and inefficient operations. After implementing EVO Scalvex, they achieved a remarkable 40% increase in revenue within 12 months.

## The Challenge

TechCorp faced several challenges:
- Disconnected data sources across departments
- Slow decision-making processes
- Difficulty identifying growth opportunities

## The Solution

TechCorp implemented EVO Scalvex's Business Twin to create a unified view of their operations. Key implementations included:

- **Real-time revenue tracking** across all product lines
- **Customer behavior analysis** to identify upsell opportunities
- **Predictive churn modeling** to retain at-risk customers

## The Results

Within the first year of implementation:
- Revenue increased by 40%
- Customer retention improved by 25%
- Decision-making time reduced by 60%

## Key Takeaways

The success of TechCorp demonstrates the power of having a comprehensive, AI-driven view of your business operations.`
  },
  "understanding-predictive-analytics": {
    title: "Understanding Predictive Analytics",
    date: "Dec 15, 2025",
    category: "Education",
    excerpt: "A beginner's guide to predictive analytics and its applications in modern business.",
    author: "David Park",
    content: `Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes. This guide will help you understand the fundamentals.

## What is Predictive Analytics?

Predictive analytics is a branch of advanced analytics that uses data to predict future trends and behaviors. It combines various techniques from data mining, machine learning, and statistics.

## Common Use Cases

1. **Sales Forecasting**: Predict future sales based on historical trends
2. **Customer Churn**: Identify customers likely to leave
3. **Inventory Management**: Optimize stock levels
4. **Risk Assessment**: Evaluate potential risks and opportunities

## Getting Started

To begin with predictive analytics, you need:
- Clean, historical data
- Clear business objectives
- The right tools and platforms

EVO Scalvex makes predictive analytics accessible to businesses of all sizes, with built-in models and intuitive interfaces.`
  },
  "2026-business-intelligence-trends": {
    title: "2026 Business Intelligence Trends",
    date: "Dec 10, 2025",
    category: "Industry",
    excerpt: "What to expect in the world of business intelligence in the coming year.",
    author: "Lisa Wong",
    content: `As we enter 2026, the business intelligence landscape continues to evolve rapidly. Here are the key trends that will shape the industry this year.

## 1. Augmented Analytics

AI-powered augmented analytics will become mainstream, automatically surfacing insights without manual querying.

## 2. Data Democratization

More organizations will prioritize making data accessible to all employees, not just data specialists.

## 3. Real-Time Decision Intelligence

The shift from historical reporting to real-time decision support will accelerate.

## 4. Natural Language Interfaces

Conversational AI will make it easier than ever to interact with business data using natural language.

## 5. Embedded Analytics

Analytics capabilities will be increasingly embedded directly into business applications and workflows.

## Preparing for the Future

Organizations that embrace these trends early will gain significant competitive advantages in the coming year.`
  },
  "building-data-driven-culture": {
    title: "Building a Data-Driven Culture",
    date: "Dec 5, 2025",
    category: "Strategy",
    excerpt: "Tips for fostering a culture that embraces data-driven decision making.",
    author: "James Miller",
    content: `Creating a data-driven culture is about more than just implementing the right tools. It requires a fundamental shift in how your organization approaches decision-making.

## Start from the Top

Leadership must champion data-driven decision making. When executives consistently reference data in their decisions, it sets the tone for the entire organization.

## Invest in Training

Ensure all employees have the skills to work with data. This doesn't mean everyone needs to be a data scientist, but basic data literacy is essential.

## Make Data Accessible

Remove barriers to data access. When employees can easily access the data they need, they're more likely to use it in their decision-making.

## Celebrate Data Wins

Share stories of successful data-driven decisions across the organization. This reinforces the value of the approach and encourages others to follow suit.

## Embrace Experimentation

A data-driven culture requires a willingness to experiment and learn from failures. Create a safe environment for testing hypotheses.

## Measure Progress

Track metrics that reflect your organization's data maturity and celebrate improvements over time.`
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container px-4 max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace(/^[\d]+\.\s\*\*(.+)\*\*:?\s*/, '').replace(/^-\s\*\*(.+)\*\*:?\s*/, '').replace(/^\d+\.\s/, '').replace(/^-\s/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;