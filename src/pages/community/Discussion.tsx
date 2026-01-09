import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { MessageSquare, ArrowLeft, Users, Search, TrendingUp, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Discussion = () => {
  const categories = [
    { name: "General Discussion", topics: 234, icon: MessageSquare },
    { name: "Feature Requests", topics: 89, icon: Star },
    { name: "Tips & Tricks", topics: 156, icon: TrendingUp },
    { name: "Showcase", topics: 67, icon: Users },
  ];

  const recentTopics = [
    { title: "Best practices for setting up Business Twin", author: "Sarah M.", replies: 23, views: 456, category: "Tips & Tricks", time: "2 hours ago" },
    { title: "How to integrate with custom CRM?", author: "John D.", replies: 15, views: 234, category: "General Discussion", time: "4 hours ago" },
    { title: "Feature request: Dark mode for reports", author: "Alex K.", replies: 45, views: 789, category: "Feature Requests", time: "6 hours ago" },
    { title: "Sharing my dashboard setup for e-commerce", author: "Maria L.", replies: 12, views: 345, category: "Showcase", time: "8 hours ago" },
    { title: "Slack integration not syncing - solved!", author: "David R.", replies: 8, views: 123, category: "Tips & Tricks", time: "12 hours ago" },
    { title: "Weekly predictions accuracy discussion", author: "Emma W.", replies: 34, views: 567, category: "General Discussion", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/community">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Community
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Discussion Forum</h1>
              <p className="text-muted-foreground">Join conversations with the community</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search discussions..." className="pl-10" />
                </div>
                <Button>New Topic</Button>
              </div>

              <div className="space-y-4">
                {recentTopics.map((topic, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 hover:text-primary transition-colors">{topic.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>by {topic.author}</span>
                          <Badge variant="secondary" className="text-xs">{topic.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.time}
                        </div>
                        <div className="mt-1">{topic.replies} replies · {topic.views} views</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Topics</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <cat.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{cat.topics}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <h3 className="font-semibold mb-4">Community Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Topics</span>
                    <span className="font-medium">546</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Replies</span>
                    <span className="font-medium">2,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Members</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Online Now</span>
                    <span className="font-medium text-green-500">89</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discussion;
