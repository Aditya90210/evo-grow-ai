import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PillarsSection from "@/components/landing/PillarsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Enable dark mode by default for the futuristic theme
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const checkRoleAndRedirect = async () => {
      if (!loading && user) {
        // 1. Check super_admin role first
        const { data: isSuperAdmin } = await supabase.rpc("has_role", {
          _user_id: user.id,
          _role: "super_admin" as const,
        });
        if (isSuperAdmin) {
          navigate("/super-admin");
          return;
        }

        // 2. Check subscription
        const { data: sub } = await supabase
          .from("subscriptions")
          .select("plan_name, status")
          .eq("user_id", user.id)
          .maybeSingle();

        if (sub && sub.status === "active" && sub.plan_name) {
          navigate(`/${sub.plan_name}-dashboard`);
        } else {
          navigate("/pricing");
        }
      }
    };
    checkRoleAndRedirect();
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="pillars">
          <PillarsSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
