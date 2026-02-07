import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Calendar, ArrowLeft, Video, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const upcomingEvents = [
    { title: "Getting Started with Business Twin", slug: "getting-started-business-twin", type: "Webinar", date: "Jan 15, 2026", time: "2:00 PM EST", speaker: "Sarah Johnson, Product Manager", attendees: 234, description: "Learn how to set up and configure your Business Twin for maximum effectiveness." },
    { title: "AI Predictions Deep Dive", slug: "ai-predictions-deep-dive", type: "Workshop", date: "Jan 22, 2026", time: "11:00 AM EST", speaker: "Dr. Michael Chen, AI Lead", attendees: 156, description: "Understand how our AI generates predictions and how to interpret them." },
    { title: "Community Meetup - New York", slug: "community-meetup-new-york", type: "In-Person", date: "Feb 5, 2026", time: "6:00 PM EST", location: "WeWork, Manhattan", attendees: 45, description: "Network with other EVO Scalvex users in the NYC area." },
    { title: "Advanced Integrations Masterclass", slug: "advanced-integrations-masterclass", type: "Webinar", date: "Feb 12, 2026", time: "3:00 PM EST", speaker: "Alex Rivera, Integration Specialist", attendees: 189, description: "Master complex integration scenarios and custom API usage." },
  ];

  const pastEvents = [
    { title: "2025 Year in Review", slug: "2025-year-in-review", type: "Webinar", date: "Dec 15, 2025", attendees: 567, recording: true },
    { title: "Holiday Product Updates", slug: "holiday-product-updates", type: "Webinar", date: "Dec 8, 2025", attendees: 423, recording: true },
    { title: "Community Showcase", slug: "community-showcase", type: "Virtual Meetup", date: "Nov 28, 2025", attendees: 234, recording: true },
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
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Events & Webinars</h1>
              <p className="text-muted-foreground">Learn from experts and connect with the community</p>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="max-w-4xl">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={event.type === "In-Person" ? "default" : "secondary"}>
                            {event.type === "In-Person" ? <MapPin className="w-3 h-3 mr-1" /> : <Video className="w-3 h-3 mr-1" />}
                            {event.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{event.date}</div>
                          <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.time}</div>
                          <div className="flex items-center gap-1"><Users className="w-4 h-4" />{event.attendees} registered</div>
                        </div>
                        {event.speaker && <p className="text-sm mt-2"><span className="text-muted-foreground">Speaker:</span> {event.speaker}</p>}
                        {event.location && <p className="text-sm mt-2"><span className="text-muted-foreground">Location:</span> {event.location}</p>}
                      </div>
                      <Link to={`/community/events/register/${event.slug}`}>
                        <Button>Register Now</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{event.type}</Badge>
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.attendees} attendees</p>
                    </div>
                    {event.recording && (
                      <Link to={`/community/events/recording/${event.slug}`}>
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4 mr-2" />
                          Watch Recording
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
