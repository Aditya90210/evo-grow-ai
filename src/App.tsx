import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ThemeProvider } from "next-themes";
import BackToTop from "@/components/BackToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Integrations from "./pages/Integrations";
import IntegrationSalesforce from "./pages/IntegrationSalesforce";
import IntegrationSlack from "./pages/IntegrationSlack";
import IntegrationGoogleWorkspace from "./pages/IntegrationGoogleWorkspace";
import IntegrationMicrosoft365 from "./pages/IntegrationMicrosoft365";
import IntegrationStripe from "./pages/IntegrationStripe";
import IntegrationHubSpot from "./pages/IntegrationHubSpot";
import IntegrationGetStarted from "./pages/IntegrationGetStarted";
import IntegrationDocs from "./pages/IntegrationDocs";
import Pricing from "./pages/Pricing";
import API from "./pages/API";
import APIDocumentation from "./pages/APIDocumentation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import CareerApply from "./pages/CareerApply";
import Documentation from "./pages/Documentation";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import Tutorials from "./pages/Tutorials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";

// Documentation pages
import QuickStartGuide from "./pages/docs/QuickStartGuide";
import Installation from "./pages/docs/Installation";
import FirstSteps from "./pages/docs/FirstSteps";
import BusinessTwin from "./pages/docs/BusinessTwin";
import AIPredictions from "./pages/docs/AIPredictions";
import DecisionFramework from "./pages/docs/DecisionFramework";
import Authentication from "./pages/docs/Authentication";
import Endpoints from "./pages/docs/Endpoints";
import Webhooks from "./pages/docs/Webhooks";
import SalesforceIntegration from "./pages/docs/SalesforceIntegration";
import SlackIntegration from "./pages/docs/SlackIntegration";
import CustomIntegrations from "./pages/docs/CustomIntegrations";

// Help Center pages
import AccountBilling from "./pages/help/AccountBilling";
import GettingStarted from "./pages/help/GettingStarted";
import FeaturesUsage from "./pages/help/FeaturesUsage";
import IntegrationsHelp from "./pages/help/IntegrationsHelp";
import Troubleshooting from "./pages/help/Troubleshooting";
import SecurityPrivacy from "./pages/help/SecurityPrivacy";
import LiveChat from "./pages/help/LiveChat";
import EmailSupport from "./pages/help/EmailSupport";
import PhoneSupport from "./pages/help/PhoneSupport";

// Community pages
import Discussion from "./pages/community/Discussion";
import TopicDetail from "./pages/community/TopicDetail";
import EventRegister from "./pages/community/EventRegister";
import EventRecording from "./pages/community/EventRecording";

// Security pages
import SOC2 from "./pages/security/SOC2";
import GDPR from "./pages/security/GDPR";
import HIPAA from "./pages/security/HIPAA";
import ISO27001 from "./pages/security/ISO27001";
import Events from "./pages/community/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/integrations/salesforce" element={<IntegrationSalesforce />} />
              <Route path="/integrations/slack" element={<IntegrationSlack />} />
              <Route path="/integrations/google-workspace" element={<IntegrationGoogleWorkspace />} />
              <Route path="/integrations/microsoft-365" element={<IntegrationMicrosoft365 />} />
              <Route path="/integrations/stripe" element={<IntegrationStripe />} />
              <Route path="/integrations/hubspot" element={<IntegrationHubSpot />} />
              <Route path="/integrations/get-started" element={<IntegrationGetStarted />} />
              <Route path="/integrations/docs" element={<IntegrationDocs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/api" element={<API />} />
              <Route path="/api-documentation" element={<APIDocumentation />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerApply />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/help-center/account-billing" element={<AccountBilling />} />
              <Route path="/help-center/getting-started" element={<GettingStarted />} />
              <Route path="/help-center/features-usage" element={<FeaturesUsage />} />
              <Route path="/help-center/integrations" element={<IntegrationsHelp />} />
              <Route path="/help-center/troubleshooting" element={<Troubleshooting />} />
              <Route path="/help-center/security-privacy" element={<SecurityPrivacy />} />
              <Route path="/help-center/live-chat" element={<LiveChat />} />
              <Route path="/help-center/email-support" element={<EmailSupport />} />
              <Route path="/help-center/phone-support" element={<PhoneSupport />} />
              <Route path="/help-center/getting-started/:articleSlug" element={<GettingStarted />} />
              <Route path="/help-center/account-billing/:articleSlug" element={<AccountBilling />} />
              <Route path="/help-center/features-usage/:articleSlug" element={<FeaturesUsage />} />
              <Route path="/help-center/integrations/:articleSlug" element={<IntegrationsHelp />} />
              <Route path="/help-center/troubleshooting/:articleSlug" element={<Troubleshooting />} />
              <Route path="/help-center/security-privacy/:articleSlug" element={<SecurityPrivacy />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community/discussion" element={<Discussion />} />
              <Route path="/community/discussion/:topicSlug" element={<TopicDetail />} />
              <Route path="/community/events" element={<Events />} />
              <Route path="/community/events/register/:eventSlug" element={<EventRegister />} />
              <Route path="/community/events/recording/:eventSlug" element={<EventRecording />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/security/soc2" element={<SOC2 />} />
              <Route path="/security/gdpr" element={<GDPR />} />
              <Route path="/security/hipaa" element={<HIPAA />} />
              <Route path="/security/iso27001" element={<ISO27001 />} />
              <Route path="/cookies" element={<Cookies />} />
              {/* Documentation pages */}
              <Route path="/docs/quick-start-guide" element={<QuickStartGuide />} />
              <Route path="/docs/installation" element={<Installation />} />
              <Route path="/docs/first-steps" element={<FirstSteps />} />
              <Route path="/docs/business-twin" element={<BusinessTwin />} />
              <Route path="/docs/ai-predictions" element={<AIPredictions />} />
              <Route path="/docs/decision-framework" element={<DecisionFramework />} />
              <Route path="/docs/authentication" element={<Authentication />} />
              <Route path="/docs/endpoints" element={<Endpoints />} />
              <Route path="/docs/webhooks" element={<Webhooks />} />
              <Route path="/docs/salesforce" element={<SalesforceIntegration />} />
              <Route path="/docs/slack" element={<SlackIntegration />} />
              <Route path="/docs/custom-integrations" element={<CustomIntegrations />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BackToTop />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
