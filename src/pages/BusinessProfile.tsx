import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Building2, Globe, MapPin, Target, TrendingUp, Facebook, Twitter, Linkedin, Instagram, ArrowLeft } from "lucide-react";

const INDUSTRIES = [
  "Technology", "Healthcare", "Finance & Banking", "E-commerce & Retail",
  "Education", "Real Estate", "Manufacturing", "Food & Beverage",
  "Travel & Hospitality", "Media & Entertainment", "Consulting",
  "Marketing & Advertising", "Logistics & Transportation", "Agriculture",
  "Energy & Utilities", "Legal Services", "Non-Profit", "Other",
];

const COMPANY_SIZES = [
  "Solo (1)", "Micro (2-10)", "Small (11-50)", "Medium (51-200)",
  "Large (201-1000)", "Enterprise (1000+)",
];

const REVENUE_RANGES = [
  "Pre-revenue", "Under $10K", "$10K - $50K", "$50K - $100K",
  "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M", "$10M+",
];

const BusinessProfile = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const isOnboarding = searchParams.get("onboarding") === "true";
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [businessGoals, setBusinessGoals] = useState("");
  const [description, setDescription] = useState("");
  const [socialFacebook, setSocialFacebook] = useState("");
  const [socialTwitter, setSocialTwitter] = useState("");
  const [socialLinkedin, setSocialLinkedin] = useState("");
  const [socialInstagram, setSocialInstagram] = useState("");
  const [existingProfile, setExistingProfile] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchBusinessProfile = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("business_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (data) {
        setExistingProfile(true);
        setBusinessName(data.business_name || "");
        setIndustry(data.industry || "");
        setCompanySize(data.company_size || "");
        setWebsite(data.website || "");
        setLocation(data.location || "");
        setRevenueRange(data.revenue_range || "");
        setTargetAudience(data.target_audience || "");
        setBusinessGoals(data.business_goals || "");
        setDescription(data.description || "");
        setSocialFacebook(data.social_facebook || "");
        setSocialTwitter(data.social_twitter || "");
        setSocialLinkedin(data.social_linkedin || "");
        setSocialInstagram(data.social_instagram || "");
      }
      setLoading(false);
    };
    if (user) fetchBusinessProfile();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (!businessName.trim()) {
      toast({ title: "Business name is required", variant: "destructive" });
      return;
    }

    setSaving(true);
    const profileData = {
      user_id: user.id,
      business_name: businessName.trim(),
      industry: industry || null,
      company_size: companySize || null,
      website: website.trim() || null,
      location: location.trim() || null,
      revenue_range: revenueRange || null,
      target_audience: targetAudience.trim() || null,
      business_goals: businessGoals.trim() || null,
      description: description.trim() || null,
      social_facebook: socialFacebook.trim() || null,
      social_twitter: socialTwitter.trim() || null,
      social_linkedin: socialLinkedin.trim() || null,
      social_instagram: socialInstagram.trim() || null,
    };

    let error;
    if (existingProfile) {
      ({ error } = await supabase
        .from("business_profiles")
        .update(profileData)
        .eq("user_id", user.id));
    } else {
      ({ error } = await supabase
        .from("business_profiles")
        .insert(profileData));
    }

    if (error) {
      toast({ title: "Error", description: "Failed to save business profile", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Business profile saved successfully!" });
      if (isOnboarding) {
        navigate("/dashboard");
      }
    }
    setSaving(false);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto px-4 py-8 max-w-3xl relative z-10">
        {!isOnboarding && (
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        )}

        <Card className="border-border/50">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">
              {isOnboarding ? "Set Up Your Business Profile" : "Edit Business Profile"}
            </CardTitle>
            <CardDescription>
              {isOnboarding
                ? "Help us understand your business so we can provide tailored insights and recommendations."
                : "Update your business information to get better recommendations."}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            {/* Business Info Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Business Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your Business Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      {INDUSTRIES.map((ind) => (
                        <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Company Size</Label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      {COMPANY_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Revenue Range</Label>
                  <Select value={revenueRange} onValueChange={setRevenueRange}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      {REVENUE_RANGES.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe what your business does..."
                  rows={3}
                />
              </div>
            </div>

            {/* Location & Web */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4" /> Location & Web
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Location
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Website
                  </Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourbusiness.com"
                  />
                </div>
              </div>
            </div>

            {/* Growth & Goals */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Growth & Goals
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="targetAudience" className="flex items-center gap-1">
                    <Target className="w-3 h-3" /> Target Audience
                  </Label>
                  <Input
                    id="targetAudience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g. Small business owners, B2B SaaS companies"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessGoals">Business Goals</Label>
                  <Textarea
                    id="businessGoals"
                    value={businessGoals}
                    onChange={(e) => setBusinessGoals(e.target.value)}
                    placeholder="What are you looking to achieve? e.g. Increase online sales, expand to new markets..."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Social Media Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Facebook className="w-3 h-3" /> Facebook
                  </Label>
                  <Input
                    value={socialFacebook}
                    onChange={(e) => setSocialFacebook(e.target.value)}
                    placeholder="https://facebook.com/yourbusiness"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Twitter className="w-3 h-3" /> Twitter / X
                  </Label>
                  <Input
                    value={socialTwitter}
                    onChange={(e) => setSocialTwitter(e.target.value)}
                    placeholder="https://x.com/yourbusiness"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </Label>
                  <Input
                    value={socialLinkedin}
                    onChange={(e) => setSocialLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/company/yourbusiness"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Instagram className="w-3 h-3" /> Instagram
                  </Label>
                  <Input
                    value={socialInstagram}
                    onChange={(e) => setSocialInstagram(e.target.value)}
                    placeholder="https://instagram.com/yourbusiness"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex justify-between items-center border-t border-border/50">
              {isOnboarding ? (
                <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                  Skip for now
                </Button>
              ) : (
                <div />
              )}
              <Button onClick={handleSave} disabled={saving}>
                {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {isOnboarding ? "Save & Continue" : "Save Changes"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessProfile;
