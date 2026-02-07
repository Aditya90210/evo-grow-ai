import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of business leaders using EVO Scalvex to transform their organizations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Discussion Forum</h3>
                <p className="text-muted-foreground mb-4">Ask questions, share insights, and learn from other users.</p>
                <Link to="/community/discussion">
                  <Button>Join Discussion</Button>
                </Link>
              </div>
              <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Events & Webinars</h3>
                <p className="text-muted-foreground mb-4">Attend live events and learn from industry experts.</p>
                <Link to="/community/events">
                  <Button variant="outline">View Events</Button>
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-12">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Community Champions</h2>
              <p className="text-muted-foreground mb-6">Our most active and helpful community members earn special recognition and exclusive benefits.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                  <p className="text-sm text-muted-foreground">Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <p className="text-sm text-muted-foreground">Champions</p>
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

export default Community;
