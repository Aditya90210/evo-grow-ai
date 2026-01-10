import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Video, Calendar, Users, Clock, Download, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventRecording = () => {
  const { eventSlug } = useParams();

  const recordingsData: Record<string, {
    title: string;
    type: string;
    date: string;
    duration: string;
    attendees: number;
    description: string;
    videoId: string;
    chapters: Array<{ time: string; title: string }>;
    resources: Array<{ title: string; type: string }>;
  }> = {
    "2025-year-in-review": {
      title: "2025 Year in Review",
      type: "Webinar",
      date: "Dec 15, 2025",
      duration: "58 min",
      attendees: 567,
      description: "Join us as we review all the major updates, features, and achievements of EVO Grow in 2025. We'll also share a sneak peek of what's coming in 2026.",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        { time: "0:00", title: "Introduction" },
        { time: "5:23", title: "Q1 Highlights" },
        { time: "15:45", title: "Q2 Major Features" },
        { time: "28:10", title: "Q3 Performance Updates" },
        { time: "40:30", title: "Q4 New Integrations" },
        { time: "50:15", title: "2026 Roadmap Preview" },
      ],
      resources: [
        { title: "2025 Annual Report (PDF)", type: "PDF" },
        { title: "Slide Deck", type: "PPTX" },
        { title: "Feature Changelog", type: "PDF" },
      ],
    },
    "holiday-product-updates": {
      title: "Holiday Product Updates",
      type: "Webinar",
      date: "Dec 8, 2025",
      duration: "45 min",
      attendees: 423,
      description: "Discover the latest product updates and improvements we've shipped just in time for the holidays. Learn how these new features can boost your productivity.",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        { time: "0:00", title: "Welcome" },
        { time: "3:15", title: "Dashboard Improvements" },
        { time: "12:30", title: "New AI Features" },
        { time: "25:00", title: "Integration Updates" },
        { time: "35:45", title: "Q&A Session" },
      ],
      resources: [
        { title: "Product Update Summary (PDF)", type: "PDF" },
        { title: "New Features Guide", type: "PDF" },
      ],
    },
    "community-showcase": {
      title: "Community Showcase",
      type: "Virtual Meetup",
      date: "Nov 28, 2025",
      duration: "72 min",
      attendees: 234,
      description: "Watch amazing presentations from our community members showcasing innovative ways they're using EVO Grow in their businesses.",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        { time: "0:00", title: "Introduction" },
        { time: "5:00", title: "Showcase 1: E-commerce Analytics" },
        { time: "20:15", title: "Showcase 2: SaaS Metrics Dashboard" },
        { time: "38:30", title: "Showcase 3: Agency Reporting" },
        { time: "55:00", title: "Panel Discussion" },
      ],
      resources: [
        { title: "Showcase Presentations", type: "ZIP" },
        { title: "Template Downloads", type: "ZIP" },
      ],
    },
  };

  const recording = eventSlug ? recordingsData[eventSlug] : null;

  if (!recording) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Recording not found</h1>
            <Link to="/community/events">
              <Button>Back to Events</Button>
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
        <div className="container px-4 max-w-5xl">
          <Link to="/community/events">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>

          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl mb-6 overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${recording.videoId}`}
              title={recording.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-3">
                <Video className="w-3 h-3 mr-1" />
                {recording.type}
              </Badge>
              <h1 className="text-2xl font-bold mb-4">{recording.title}</h1>
              <p className="text-muted-foreground mb-6">{recording.description}</p>

              <div className="flex flex-wrap gap-4 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{recording.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{recording.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{recording.attendees} attendees</span>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Chapters */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <h2 className="text-lg font-semibold mb-4">Chapters</h2>
                <div className="space-y-3">
                  {recording.chapters.map((chapter, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <span className="text-sm font-mono text-primary">{chapter.time}</span>
                      <span className="text-sm">{chapter.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Resources</h2>
                <div className="space-y-3">
                  {recording.resources.map((resource, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-between"
                    >
                      <span className="truncate">{resource.title}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                        <Download className="w-4 h-4" />
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <h3 className="font-medium mb-3">More Recordings</h3>
                  <div className="space-y-2">
                    {Object.entries(recordingsData)
                      .filter(([slug]) => slug !== eventSlug)
                      .slice(0, 2)
                      .map(([slug, rec]) => (
                        <Link 
                          key={slug}
                          to={`/community/events/recording/${slug}`}
                          className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <p className="text-sm font-medium">{rec.title}</p>
                          <p className="text-xs text-muted-foreground">{rec.date}</p>
                        </Link>
                      ))}
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

export default EventRecording;
