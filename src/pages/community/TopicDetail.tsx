import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { MessageSquare, ArrowLeft, ThumbsUp, Share2, Flag, Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TopicDetail = () => {
  const { topicSlug } = useParams();

  const topicsData: Record<string, {
    title: string;
    author: string;
    authorInitials: string;
    category: string;
    time: string;
    views: number;
    content: string;
    replies: Array<{
      author: string;
      authorInitials: string;
      time: string;
      content: string;
      likes: number;
    }>;
  }> = {
    "best-practices-business-twin": {
      title: "Best practices for setting up Business Twin",
      author: "Sarah M.",
      authorInitials: "SM",
      category: "Tips & Tricks",
      time: "2 hours ago",
      views: 456,
      content: `I've been using EVO Grow for about 6 months now and wanted to share some best practices I've discovered for setting up your Business Twin effectively.

**1. Start with Clean Data**
Before importing your data, make sure it's cleaned and organized. Remove duplicates and ensure consistent formatting.

**2. Define Clear Metrics**
Identify the key metrics that matter most to your business. Don't try to track everything at once.

**3. Set Realistic Baselines**
Your first month should be about establishing baselines rather than making major decisions.

**4. Regular Reviews**
Schedule weekly reviews of your Business Twin to stay on top of trends.

What other best practices have you discovered?`,
      replies: [
        { author: "John D.", authorInitials: "JD", time: "1 hour ago", content: "Great tips! I'd add that integrating with your CRM early on makes a huge difference.", likes: 12 },
        { author: "Alex K.", authorInitials: "AK", time: "45 min ago", content: "The regular reviews point is so important. We do bi-weekly syncs with our team to discuss insights.", likes: 8 },
        { author: "Maria L.", authorInitials: "ML", time: "30 min ago", content: "Thanks for sharing! Just started my setup and this is really helpful.", likes: 5 },
      ],
    },
    "integrate-custom-crm": {
      title: "How to integrate with custom CRM?",
      author: "John D.",
      authorInitials: "JD",
      category: "General Discussion",
      time: "4 hours ago",
      views: 234,
      content: `Has anyone successfully integrated EVO Grow with a custom-built CRM? We're using an in-house solution and wondering about the best approach.

I've looked at the API documentation but I'm not sure where to start. Any pointers would be greatly appreciated!`,
      replies: [
        { author: "Alex K.", authorInitials: "AK", time: "3 hours ago", content: "Yes! We did this using the REST API. Start with the authentication endpoints and work from there.", likes: 15 },
        { author: "Sarah M.", authorInitials: "SM", time: "2 hours ago", content: "Check out the custom integrations documentation - it has a step-by-step guide.", likes: 10 },
      ],
    },
    "dark-mode-feature-request": {
      title: "Feature request: Dark mode for reports",
      author: "Alex K.",
      authorInitials: "AK",
      category: "Feature Requests",
      time: "6 hours ago",
      views: 789,
      content: `Would love to see dark mode support for the reports section. Currently, when I'm reviewing reports late at night, the bright interface is quite harsh on the eyes.

Is this something that's on the roadmap?`,
      replies: [
        { author: "EVO Team", authorInitials: "ET", time: "5 hours ago", content: "Thanks for the suggestion! This is definitely on our radar. We're planning to roll out dark mode in Q2.", likes: 45 },
        { author: "Maria L.", authorInitials: "ML", time: "4 hours ago", content: "+1 for this! Would be a great addition.", likes: 23 },
      ],
    },
    "ecommerce-dashboard-setup": {
      title: "Sharing my dashboard setup for e-commerce",
      author: "Maria L.",
      authorInitials: "ML",
      category: "Showcase",
      time: "8 hours ago",
      views: 345,
      content: `Hey everyone! I wanted to share my dashboard setup for our e-commerce store.

**Key widgets I'm using:**
- Revenue tracker with daily/weekly/monthly views
- Customer acquisition funnel
- Product performance heatmap
- Inventory prediction alerts

Happy to share more details if anyone's interested!`,
      replies: [
        { author: "John D.", authorInitials: "JD", time: "7 hours ago", content: "This looks amazing! Could you share how you set up the inventory prediction alerts?", likes: 8 },
      ],
    },
    "slack-integration-solved": {
      title: "Slack integration not syncing - solved!",
      author: "David R.",
      authorInitials: "DR",
      category: "Tips & Tricks",
      time: "12 hours ago",
      views: 123,
      content: `For anyone having issues with Slack integration not syncing properly, here's what fixed it for me:

1. Disconnect the integration
2. Clear your browser cache
3. Reconnect with admin permissions
4. Make sure to select all the channels you want to sync

This resolved the issue completely!`,
      replies: [
        { author: "Emma W.", authorInitials: "EW", time: "10 hours ago", content: "Thank you! This fixed my issue too!", likes: 6 },
      ],
    },
    "weekly-predictions-accuracy": {
      title: "Weekly predictions accuracy discussion",
      author: "Emma W.",
      authorInitials: "EW",
      category: "General Discussion",
      time: "1 day ago",
      views: 567,
      content: `I've been tracking the accuracy of the weekly predictions for the past 3 months. Here are my findings:

- Revenue predictions: ~92% accurate
- Customer churn predictions: ~88% accurate
- Inventory needs: ~95% accurate

Has anyone else been tracking this? Would love to compare notes!`,
      replies: [
        { author: "Dr. Michael C.", authorInitials: "MC", time: "20 hours ago", content: "Great analysis! The accuracy can vary based on your industry and data quality.", likes: 18 },
        { author: "Sarah M.", authorInitials: "SM", time: "18 hours ago", content: "My numbers are similar! The revenue predictions have been spot on.", likes: 12 },
      ],
    },
  };

  const topic = topicSlug ? topicsData[topicSlug] : null;

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
            <Link to="/community/discussion">
              <Button>Back to Discussion Forum</Button>
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
        <div className="container px-4 max-w-4xl">
          <Link to="/community/discussion">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Discussion Forum
            </Button>
          </Link>

          {/* Topic Header */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
            <Badge variant="secondary" className="mb-3">{topic.category}</Badge>
            <h1 className="text-2xl font-bold mb-4">{topic.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <Avatar>
                <AvatarFallback>{topic.authorInitials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{topic.author}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{topic.time}</span>
                  <span>·</span>
                  <span>{topic.views} views</span>
                </div>
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
              {topic.content}
            </div>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border/50">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </div>

          {/* Replies */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">{topic.replies.length} Replies</h2>
            <div className="space-y-4">
              {topic.replies.map((reply, index) => (
                <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">{reply.authorInitials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">{reply.author}</span>
                        <span className="text-xs text-muted-foreground">{reply.time}</span>
                      </div>
                      <p className="text-sm">{reply.content}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {reply.likes}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          <div className="p-6 rounded-xl border border-border/50 bg-card/50">
            <h3 className="font-semibold mb-4">Add a Reply</h3>
            <Textarea placeholder="Share your thoughts..." className="mb-4" rows={4} />
            <Button>Post Reply</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TopicDetail;
