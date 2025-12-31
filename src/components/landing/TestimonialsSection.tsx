import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Startup",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "EVO Grow completely transformed how we approach growth. The Business Twin feature gave us insights we never knew we needed. Our revenue increased 40% in just 3 months.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, Scale Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "The AI Growth Engine is like having a team of consultants available 24/7. The strategies it generates are incredibly tailored and actionable. Game-changer for our agency.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CMO, Bloom Commerce",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "Decision Intelligence is exactly what we needed. It cuts through the noise and helps us focus on what actually moves the needle. Our team productivity doubled.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "COO, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "The Execution Layer automates so much of our workflow. What used to take days now happens automatically. It's like having an extra team member who never sleeps.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "VP Growth, Velocity SaaS",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content:
      "We tried several growth platforms before EVO Grow. Nothing comes close. The depth of understanding it has about our business is remarkable. ROI was visible in week one.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Founder, NextGen Ventures",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content:
      "EVO Grow helped us identify market opportunities we were completely missing. The AI suggestions are brilliant and always backed by solid reasoning. Essential for any serious business.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Companies Growing" },
  { value: "40%", label: "Avg. Revenue Increase" },
  { value: "10x", label: "Faster Decisions" },
  { value: "98%", label: "Customer Satisfaction" },
];

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

export const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Trusted By Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              What Our
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses already transforming their growth with EVO Grow.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-border/50 to-border/20 hover:from-primary/40 hover:to-secondary/40 transition-all duration-500">
                    <div className="h-full rounded-2xl bg-card/60 backdrop-blur-xl p-6 flex flex-col">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50" />
            <CarouselNext className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
