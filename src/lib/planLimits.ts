export interface PlanLimits {
  name: string;
  label: string;
  price: string;
  tagline: string;
  aiGenerations: number;
  maxCampaigns: number | "Unlimited";
  maxFunnels: number | "Unlimited";
  maxIntegrations: number;
  storageGB: number;
  maxTeamMembers: number;
  contentTypes: string[];
  quickActions: { id: string; label: string; icon: string }[];
  hasABTesting: boolean;
  hasAdvancedAnalytics: boolean;
  hasAutomation: boolean;
  hasCRM: boolean;
  hasCRMPipeline: boolean;
  hasAPIAccess: boolean;
  hasCompetitorAnalysis: boolean;
  hasBrandVoice: boolean;
  hasPredictiveScoring: boolean;
  hasConditionalWorkflows: boolean;
  hasDropOffAnalysis: boolean;
  hasRevenueForecasting: boolean;
  supportLevel: string;
  upgradeTo: string | null;
}

export const planLimitsMap: Record<string, PlanLimits> = {
  starter: {
    name: "starter",
    label: "Starter Plan",
    price: "$49/mo",
    tagline: "Let's build momentum today.",
    aiGenerations: 50,
    maxCampaigns: 1,
    maxFunnels: 1,
    maxIntegrations: 3,
    storageGB: 10,
    maxTeamMembers: 1,
    contentTypes: ["blog", "ad", "email", "caption"],
    quickActions: [
      { id: "ai-content", label: "Generate AI Content", icon: "Sparkles" },
      { id: "social-post", label: "Create Social Post", icon: "Share2" },
      { id: "landing-copy", label: "Build Landing Page Copy", icon: "FileText" },
      { id: "funnel", label: "Start New Funnel", icon: "GitBranch" },
      { id: "lead-form", label: "Create Lead Form", icon: "ClipboardList" },
      { id: "connect-channel", label: "Connect Social Channel", icon: "Plug" },
    ],
    hasABTesting: false,
    hasAdvancedAnalytics: false,
    hasAutomation: false,
    hasCRM: false,
    hasCRMPipeline: false,
    hasAPIAccess: false,
    hasCompetitorAnalysis: false,
    hasBrandVoice: false,
    hasPredictiveScoring: false,
    hasConditionalWorkflows: false,
    hasDropOffAnalysis: false,
    hasRevenueForecasting: false,
    supportLevel: "Email",
    upgradeTo: "growth",
  },
  growth: {
    name: "growth",
    label: "Growth Plan",
    price: "$149/mo",
    tagline: "Your growth systems are active.",
    aiGenerations: 300,
    maxCampaigns: 5,
    maxFunnels: 5,
    maxIntegrations: 15,
    storageGB: 50,
    maxTeamMembers: 5,
    contentTypes: ["blog", "seo", "ad", "email-sequence", "caption", "landing"],
    quickActions: [
      { id: "ai-content", label: "Generate AI Content", icon: "Sparkles" },
      { id: "seo-blog", label: "Create SEO Blog Post", icon: "FileText" },
      { id: "email-seq", label: "Generate Email Sequence", icon: "Mail" },
      { id: "ad-copy", label: "Create Ad Copy Variations", icon: "Megaphone" },
      { id: "campaign", label: "Start New Campaign", icon: "Target" },
      { id: "funnel", label: "Build Funnel", icon: "GitBranch" },
      { id: "automation", label: "Set Automation Workflow", icon: "Workflow" },
      { id: "connect-channel", label: "Connect Integration", icon: "Plug" },
    ],
    hasABTesting: false,
    hasAdvancedAnalytics: false,
    hasAutomation: true,
    hasCRM: true,
    hasCRMPipeline: false,
    hasAPIAccess: false,
    hasCompetitorAnalysis: false,
    hasBrandVoice: false,
    hasPredictiveScoring: false,
    hasConditionalWorkflows: false,
    hasDropOffAnalysis: false,
    hasRevenueForecasting: false,
    supportLevel: "Priority",
    upgradeTo: "professional",
  },
  professional: {
    name: "professional",
    label: "Professional Plan",
    price: "$299/mo",
    tagline: "Performance optimization in progress.",
    aiGenerations: 1000,
    maxCampaigns: "Unlimited",
    maxFunnels: "Unlimited",
    maxIntegrations: 50,
    storageGB: 200,
    maxTeamMembers: 25,
    contentTypes: ["blog-seo", "multi-ad", "email-campaign", "sales-page", "funnel-script", "social-batch", "landing"],
    quickActions: [
      { id: "ai-content", label: "Generate Advanced AI Content", icon: "Sparkles" },
      { id: "multi-ad", label: "Launch Multi-Variant Ad", icon: "Megaphone" },
      { id: "automation", label: "Start Automated Workflow", icon: "Workflow" },
      { id: "ab-test", label: "Create A/B Test", icon: "FlaskConical" },
      { id: "competitor", label: "Analyze Competitor Content", icon: "Search" },
      { id: "brand-voice", label: "Train Brand Voice AI", icon: "Mic" },
      { id: "api-tools", label: "Access API Tools", icon: "Code" },
    ],
    hasABTesting: true,
    hasAdvancedAnalytics: true,
    hasAutomation: true,
    hasCRM: true,
    hasCRMPipeline: true,
    hasAPIAccess: true,
    hasCompetitorAnalysis: true,
    hasBrandVoice: true,
    hasPredictiveScoring: true,
    hasConditionalWorkflows: true,
    hasDropOffAnalysis: true,
    hasRevenueForecasting: true,
    supportLevel: "Email + Chat",
    upgradeTo: "business",
  },
};

export const getPlanLimits = (planName: string): PlanLimits => {
  return planLimitsMap[planName] || planLimitsMap.starter;
};
