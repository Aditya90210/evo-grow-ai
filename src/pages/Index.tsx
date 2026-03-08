import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
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
        const { data } = await supabase.rpc("has_role", {
          _user_id: user.id,
          _role: "super_admin" as const,
        });
        if (data) {
          navigate("/super-admin");
        } else {
          navigate("/home");
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
