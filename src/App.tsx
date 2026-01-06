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
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Documentation from "./pages/Documentation";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import Tutorials from "./pages/Tutorials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";

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
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/community" element={<Community />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/cookies" element={<Cookies />} />
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
