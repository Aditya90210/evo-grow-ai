import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Clock, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ArticlePageProps {
  category: string;
  categorySlug: string;
  icon: LucideIcon;
  articles: Array<{
    title: string;
    description: string;
    slug: string;
    content: string;
    readTime?: string;
  }>;
}

const ArticlePage = ({ category, categorySlug, icon: Icon, articles }: ArticlePageProps) => {
  const { articleSlug } = useParams();
  const article = articles.find(a => a.slug === articleSlug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <Link to={`/help-center/${categorySlug}`}>
              <Button>Back to {category}</Button>
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
        <div className="container px-4">
          <Link to={`/help-center/${categorySlug}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {category}
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{category}</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime || "5 min read"}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{article.description}</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-8">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>

            <div className="border-t border-border/50 pt-8 mt-8">
              <p className="text-sm text-muted-foreground mb-4">Was this article helpful?</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
