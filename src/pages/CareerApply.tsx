import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, Briefcase } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const jobs = [
  { slug: "senior-ai-engineer", title: "Senior AI Engineer", location: "Remote", type: "Full-time", department: "Engineering", description: "We're looking for a Senior AI Engineer to help build and scale our AI-powered analytics platform. You'll work on cutting-edge machine learning models and help shape the future of business intelligence." },
  { slug: "product-manager", title: "Product Manager", location: "San Francisco, CA", type: "Full-time", department: "Product", description: "Join our product team to drive the roadmap for EVO Scalvex's core platform. You'll work closely with engineering, design, and customers to deliver features that make a real impact." },
  { slug: "customer-success-manager", title: "Customer Success Manager", location: "Remote", type: "Full-time", department: "Customer Success", description: "Help our customers get the most out of EVO Scalvex. You'll be the primary point of contact for enterprise clients, ensuring their success and satisfaction." },
  { slug: "senior-frontend-developer", title: "Senior Frontend Developer", location: "Remote", type: "Full-time", department: "Engineering", description: "Build beautiful, performant user interfaces for our analytics platform. You'll work with React, TypeScript, and modern frontend technologies." },
  { slug: "data-scientist", title: "Data Scientist", location: "New York, NY", type: "Full-time", department: "Data", description: "Turn data into actionable insights. You'll work on predictive models, data visualization, and help our customers understand their business better." },
  { slug: "technical-writer", title: "Technical Writer", location: "Remote", type: "Contract", department: "Documentation", description: "Create clear, comprehensive documentation for our platform. You'll work with engineering and product teams to document APIs, features, and best practices." },
];

const CareerApply = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted successfully! We'll be in touch soon.");
    }, 1500);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">The position you're looking for doesn't exist.</p>
            <Link to="/careers">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
              </Button>
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
          <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all positions
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{job.department}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
              <p className="text-lg text-muted-foreground">{job.description}</p>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio / Website</Label>
                  <Input id="portfolio" type="url" placeholder="https://yourportfolio.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV *</Label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your resume here, or <span className="text-primary">browse</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX up to 10MB</p>
                    <Input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea 
                    id="coverLetter" 
                    placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hear">How did you hear about us?</Label>
                  <Input id="hear" placeholder="LinkedIn, referral, job board, etc." />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerApply;
