import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is EVO Grow and how does it work?",
    answer:
      "EVO Grow is a Business Operating Intelligence System that creates a digital twin of your business, uses AI to generate growth strategies, helps you make data-driven decisions, and automates execution. It learns your business deeply and thinks like a strategist to help you grow intelligently.",
  },
  {
    question: "What is a Business Twin?",
    answer:
      "A Business Twin is a digital replica of your business that stores and understands your business model, products, customers, market environment, goals, problems, structure, and operations. It continuously learns and adapts as your business evolves.",
  },
  {
    question: "How does the AI Growth Engine create strategies?",
    answer:
      "The AI Growth Engine analyzes your Business Twin data to create structured, logical strategies including marketing plans, sales funnels, brand identity recommendations, and innovation suggestions. Every strategy is tailored specifically to your business context and goals.",
  },
  {
    question: "Can I try EVO Grow before committing?",
    answer:
      "Yes! All plans include a 7-day free trial with no credit card required. You can explore all features and see exactly how EVO Grow can transform your business before making any commitment.",
  },
  {
    question: "What kind of businesses is EVO Grow designed for?",
    answer:
      "EVO Grow is designed for businesses of all sizes that want to grow intelligently. Whether you're a startup, scaling company, or enterprise, our different plans are tailored to match your specific needs and complexity.",
  },
  {
    question: "How does Decision Intelligence work?",
    answer:
      "Our Decision Intelligence Layer prioritizes what matters most, shows you why those decisions matter, balances risk, resources, and ROI, and suggests real-world actionable next steps. It turns complex business decisions into clear, data-backed recommendations.",
  },
  {
    question: "What automations are included in the Execution Layer?",
    answer:
      "The Execution Layer can generate content, create marketing campaigns, build documentation, create tasks and execution roadmaps, and automate repetitive processes. It makes EVO Grow feel alive and immediately useful for your daily operations.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and follow industry best practices for data protection. Your Business Twin data is private and never shared with third parties.",
  },
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

export const FAQSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about EVO Grow and how it can transform your business.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-none rounded-xl bg-card/50 backdrop-blur-sm px-6 transition-all duration-500 ease-out border border-border/30 hover:border-primary/30 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
