import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Calendar, ArrowLeft, Video, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const EventRegister = () => {
  const { eventSlug } = useParams();
  const [registered, setRegistered] = useState(false);

  const eventsData: Record<string, {
    title: string;
    type: string;
    date: string;
    time: string;
    speaker?: string;
    location?: string;
    attendees: number;
    description: string;
    agenda: string[];
    whatYouWillLearn: string[];
  }> = {
    "getting-started-business-twin": {
      title: "Getting Started with Business Twin",
      type: "Webinar",
      date: "Jan 15, 2026",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson, Product Manager",
      attendees: 234,
      description: "Learn how to set up and configure your Business Twin for maximum effectiveness. This comprehensive webinar will walk you through the entire setup process.",
      agenda: [
        "Introduction to Business Twin concepts (10 min)",
        "Step-by-step setup walkthrough (25 min)",
        "Best practices and tips (15 min)",
        "Q&A session (10 min)",
      ],
      whatYouWillLearn: [
        "How to configure your Business Twin from scratch",
        "Best practices for data import and organization",
        "Tips for maximizing prediction accuracy",
        "Common pitfalls to avoid",
      ],
    },
    "ai-predictions-deep-dive": {
      title: "AI Predictions Deep Dive",
      type: "Workshop",
      date: "Jan 22, 2026",
      time: "11:00 AM EST",
      speaker: "Dr. Michael Chen, AI Lead",
      attendees: 156,
      description: "Understand how our AI generates predictions and how to interpret them. This hands-on workshop will give you deep insights into our prediction algorithms.",
      agenda: [
        "Overview of AI prediction methodology (15 min)",
        "Understanding prediction confidence scores (20 min)",
        "Hands-on exercises (30 min)",
        "Advanced interpretation techniques (20 min)",
        "Q&A (15 min)",
      ],
      whatYouWillLearn: [
        "How AI predictions are generated",
        "How to interpret confidence scores",
        "When to trust vs. verify predictions",
        "How to improve prediction accuracy with better data",
      ],
    },
    "community-meetup-new-york": {
      title: "Community Meetup - New York",
      type: "In-Person",
      date: "Feb 5, 2026",
      time: "6:00 PM EST",
      location: "WeWork, Manhattan",
      attendees: 45,
      description: "Network with other EVO Grow users in the NYC area. Join us for an evening of networking, knowledge sharing, and community building.",
      agenda: [
        "Networking and refreshments (30 min)",
        "Community showcase presentations (45 min)",
        "Panel discussion with power users (30 min)",
        "Open networking (45 min)",
      ],
      whatYouWillLearn: [
        "Real-world use cases from other users",
        "Networking opportunities with local professionals",
        "Tips and tricks from power users",
        "Upcoming features and roadmap preview",
      ],
    },
    "advanced-integrations-masterclass": {
      title: "Advanced Integrations Masterclass",
      type: "Webinar",
      date: "Feb 12, 2026",
      time: "3:00 PM EST",
      speaker: "Alex Rivera, Integration Specialist",
      attendees: 189,
      description: "Master complex integration scenarios and custom API usage. This masterclass is designed for developers and technical users.",
      agenda: [
        "Advanced API concepts (20 min)",
        "Custom webhook configurations (25 min)",
        "Building custom integrations (30 min)",
        "Troubleshooting common issues (15 min)",
        "Q&A (10 min)",
      ],
      whatYouWillLearn: [
        "Advanced API authentication patterns",
        "How to build custom webhooks",
        "Best practices for enterprise integrations",
        "Debugging integration issues",
      ],
    },
  };

  const event = eventSlug ? eventsData[eventSlug] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Event not found</h1>
            <Link to="/community/events">
              <Button>Back to Events</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (registered) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 max-w-2xl">
            <div className="text-center p-8 rounded-xl border border-border/50 bg-card/50">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Registration Confirmed!</h1>
              <p className="text-muted-foreground mb-6">
                You're registered for "{event.title}". We've sent a confirmation email with event details.
              </p>
              <div className="p-4 rounded-lg bg-muted/30 mb-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date} at {event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setRegistered(false)}>
                  Register Another
                </Button>
                <Link to="/community/events">
                  <Button>Back to Events</Button>
                </Link>
              </div>
            </div>
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
          <Link to="/community/events">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2">
              <Badge variant={event.type === "In-Person" ? "default" : "secondary"} className="mb-4">
                {event.type === "In-Person" ? <MapPin className="w-3 h-3 mr-1" /> : <Video className="w-3 h-3 mr-1" />}
                {event.type}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{event.description}</p>

              <div className="flex flex-wrap gap-4 text-sm mb-8">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{event.attendees} registered</span>
                </div>
              </div>

              {event.speaker && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-2">Speaker</h2>
                  <p className="text-muted-foreground">{event.speaker}</p>
                </div>
              )}

              {event.location && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-2">Location</h2>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Agenda</h2>
                <ul className="space-y-2">
                  {event.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">What You'll Learn</h2>
                <ul className="space-y-2">
                  {event.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Register for this Event</h2>
                <form onSubmit={(e) => { e.preventDefault(); setRegistered(true); }} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <Button type="submit" className="w-full">
                    Register Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By registering, you agree to receive event updates via email.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventRegister;
