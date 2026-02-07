import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    { slug: "future-of-ai-in-business", title: "The Future of AI in Business Decision Making", date: "Jan 2, 2026", category: "AI Insights", excerpt: "Explore how artificial intelligence is transforming the way businesses make strategic decisions." },
    { slug: "optimize-business-twin", title: "5 Ways to Optimize Your Business Twin", date: "Dec 28, 2025", category: "Product Tips", excerpt: "Get the most out of your digital twin with these practical optimization strategies." },
    { slug: "techcorp-case-study", title: "Case Study: How TechCorp Increased Revenue by 40%", date: "Dec 20, 2025", category: "Case Studies", excerpt: "Learn how one of our customers achieved remarkable growth using EVO Scalvex." },
    { slug: "understanding-predictive-analytics", title: "Understanding Predictive Analytics", date: "Dec 15, 2025", category: "Education", excerpt: "A beginner's guide to predictive analytics and its applications in modern business." },
    { slug: "2026-business-intelligence-trends", title: "2026 Business Intelligence Trends", date: "Dec 10, 2025", category: "Industry", excerpt: "What to expect in the world of business intelligence in the coming year." },
    { slug: "building-data-driven-culture", title: "Building a Data-Driven Culture", date: "Dec 5, 2025", category: "Strategy", excerpt: "Tips for fostering a culture that embraces data-driven decision making." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in business intelligence and AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all group">
                <span className="text-xs text-primary font-medium">{post.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="gap-1 p-0 h-auto">
                      Read <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
