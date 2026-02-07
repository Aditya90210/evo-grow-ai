import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobs = [
    { slug: "senior-ai-engineer", title: "Senior AI Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
    { slug: "product-manager", title: "Product Manager", location: "San Francisco, CA", type: "Full-time", department: "Product" },
    { slug: "customer-success-manager", title: "Customer Success Manager", location: "Remote", type: "Full-time", department: "Customer Success" },
    { slug: "senior-frontend-developer", title: "Senior Frontend Developer", location: "Remote", type: "Full-time", department: "Engineering" },
    { slug: "data-scientist", title: "Data Scientist", location: "New York, NY", type: "Full-time", department: "Data" },
    { slug: "technical-writer", title: "Technical Writer", location: "Remote", type: "Contract", department: "Documentation" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of business intelligence. We're looking for passionate people to join our mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Why EVO Scalvex?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Remote First</h3>
                  <p className="text-muted-foreground text-sm">Work from anywhere in the world with flexible hours.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Competitive Pay</h3>
                  <p className="text-muted-foreground text-sm">Top-tier compensation with equity options.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Growth Focused</h3>
                  <p className="text-muted-foreground text-sm">Learning budget and career development opportunities.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.title} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-primary font-medium">{job.department}</span>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Link to={`/careers/${job.slug}`}>
                    <Button className="gap-2">
                      Apply <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
