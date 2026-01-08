import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Installation = () => {
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
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Installation</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              EVO Grow is a cloud-based platform that requires no local installation. However, you may want to set up our SDK for advanced integrations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Web Access</h2>
            <p className="text-muted-foreground mb-4">
              Simply log in at app.evogrow.com to access the full platform. No downloads required.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">SDK Installation</h2>
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <code className="text-sm">npm install @evogrow/sdk</code>
            </div>
            <p className="text-muted-foreground mb-4">
              Or using yarn:
            </p>
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <code className="text-sm">yarn add @evogrow/sdk</code>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">System Requirements</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              <li>Stable internet connection</li>
              <li>Node.js 16+ for SDK usage</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Mobile Apps</h2>
            <p className="text-muted-foreground mb-4">
              Download our mobile apps from the App Store or Google Play for on-the-go access to your business insights.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Installation;
