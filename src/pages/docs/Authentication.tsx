import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl">
          <Link to="/documentation">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Authentication</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Secure your API requests with our authentication system. All API calls require valid credentials.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">API Keys</h2>
            <p className="text-muted-foreground mb-4">
              Generate API keys from your dashboard under Settings → API Keys. Each key has configurable permissions and rate limits.
            </p>
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">OAuth 2.0</h2>
            <p className="text-muted-foreground mb-4">
              For user-facing applications, we support OAuth 2.0 authentication. This allows secure access without exposing API keys.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Token Refresh</h2>
            <p className="text-muted-foreground mb-4">
              Access tokens expire after 1 hour. Use your refresh token to obtain new access tokens without re-authentication.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Best Practices</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Never expose API keys in client-side code</li>
              <li>Use environment variables for key storage</li>
              <li>Rotate keys periodically</li>
              <li>Set appropriate permission scopes</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
