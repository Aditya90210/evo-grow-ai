import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Video, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tutorials = () => {
  const tutorials = [
    { title: "Getting Started with EVO Scalvex", duration: "10 min", level: "Beginner", description: "Learn the basics of setting up your account and navigating the dashboard." },
    { title: "Building Your First Business Twin", duration: "15 min", level: "Beginner", description: "Step-by-step guide to creating and configuring your digital business twin." },
    { title: "Understanding AI Predictions", duration: "20 min", level: "Intermediate", description: "Deep dive into how our AI generates predictions and how to interpret them." },
    { title: "Advanced Decision Framework", duration: "25 min", level: "Advanced", description: "Master the decision framework for complex business scenarios." },
    { title: "Setting Up Integrations", duration: "12 min", level: "Intermediate", description: "Connect EVO Scalvex with your existing tools and workflows." },
    { title: "Team Collaboration Features", duration: "18 min", level: "Intermediate", description: "Learn how to collaborate effectively with your team using EVO Scalvex." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tutorials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video <span className="text-gradient">Tutorials</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn at your own pace with our comprehensive video tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tutorials.map((tutorial) => (
              <div key={tutorial.title} className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all group">
                <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-500' : tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'}`}>
                      {tutorial.level}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {tutorial.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-muted-foreground text-sm">{tutorial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
