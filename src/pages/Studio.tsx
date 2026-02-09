import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Image, 
  Video, 
  FileText, 
  TrendingUp, 
  Brain, 
  Database,
  BarChart3,
  Users,
  Zap,
  Download,
  Copy,
  RefreshCw,
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ThemeToggle";

const GENERATE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-ad-content`;

const Studio = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Generator state
  const [businessDescription, setBusinessDescription] = useState("");
  const [contentType, setContentType] = useState("photo");
  const [targetAudience, setTargetAudience] = useState("");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  
  // Analytics mock data
  const analyticsData = {
    totalCampaigns: 24,
    impressions: 125600,
    conversions: 3420,
    conversionRate: 2.72,
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleGenerate = async () => {
    if (!businessDescription.trim()) {
      toast({
        title: "Missing information",
        description: "Please describe your business to generate content.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedContent("");

    try {
      const response = await fetch(GENERATE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          businessDescription,
          contentType,
          targetAudience: targetAudience || "General audience",
          tone,
        }),
      });

      if (response.status === 429) {
        toast({
          title: "Rate limit exceeded",
          description: "Please wait a moment and try again.",
          variant: "destructive",
        });
        setIsGenerating(false);
        return;
      }

      if (response.status === 402) {
        toast({
          title: "Usage limit reached",
          description: "Please upgrade your plan to continue generating content.",
          variant: "destructive",
        });
        setIsGenerating(false);
        return;
      }

      if (!response.ok || !response.body) {
        throw new Error("Failed to generate content");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let contentSoFar = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              contentSoFar += content;
              setGeneratedContent(contentSoFar);
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      toast({
        title: "Content generated!",
        description: "Your ad content ideas are ready.",
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Generation failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EVO Scalvex Studio</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Content Generator</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generator" className="space-y-8">
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Generator</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">AI Insights</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Data</span>
            </TabsTrigger>
          </TabsList>

          {/* Content Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Generate Ad Content
                  </CardTitle>
                  <CardDescription>
                    Describe your business and let AI create compelling ad ideas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Business Description *
                    </label>
                    <Textarea
                      placeholder="Describe your business, products, or services..."
                      value={businessDescription}
                      onChange={(e) => setBusinessDescription(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Content Type
                      </label>
                      <Select value={contentType} onValueChange={setContentType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photo">
                            <div className="flex items-center gap-2">
                              <Image className="w-4 h-4" />
                              Photo Ad Ideas
                            </div>
                          </SelectItem>
                          <SelectItem value="video">
                            <div className="flex items-center gap-2">
                              <Video className="w-4 h-4" />
                              Video Ad Ideas
                            </div>
                          </SelectItem>
                          <SelectItem value="text">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              Ad Copy/Text
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Tone
                      </label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual & Friendly</SelectItem>
                          <SelectItem value="bold">Bold & Energetic</SelectItem>
                          <SelectItem value="luxurious">Luxurious</SelectItem>
                          <SelectItem value="playful">Playful & Fun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Target Audience (optional)
                    </label>
                    <Input
                      placeholder="e.g., Young professionals aged 25-35"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Content Ideas
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated Content</CardTitle>
                    {generatedContent && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleCopy}>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                      </div>
                    )}
                  </div>
                  <CardDescription>
                    AI-generated ad ideas based on your input
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating && !generatedContent && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <RefreshCw className="w-8 h-8 text-primary animate-spin mb-4" />
                      <p className="text-muted-foreground">Generating creative ideas...</p>
                    </div>
                  )}
                  {generatedContent ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-foreground bg-muted/30 rounded-lg p-4 max-h-[500px] overflow-y-auto">
                        {generatedContent}
                      </div>
                    </div>
                  ) : !isGenerating && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Sparkles className="w-12 h-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">
                        Your generated content will appear here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Campaigns</p>
                      <p className="text-3xl font-bold text-foreground">{analyticsData.totalCampaigns}</p>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <Progress value={75} className="mt-4" />
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Impressions</p>
                      <p className="text-3xl font-bold text-foreground">{(analyticsData.impressions / 1000).toFixed(1)}K</p>
                    </div>
                    <div className="p-3 rounded-full bg-accent/10">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <Progress value={62} className="mt-4" />
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Conversions</p>
                      <p className="text-3xl font-bold text-foreground">{(analyticsData.conversions / 1000).toFixed(1)}K</p>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <Progress value={48} className="mt-4" />
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Conv. Rate</p>
                      <p className="text-3xl font-bold text-foreground">{analyticsData.conversionRate}%</p>
                    </div>
                    <div className="p-3 rounded-full bg-accent/10">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <Progress value={analyticsData.conversionRate * 10} className="mt-4" />
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Track your content performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Performance charts will display here as you generate and track content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Predictions Tab */}
          <TabsContent value="predictions" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription>Smart insights based on your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-medium text-foreground mb-2">Trending Content Types</h4>
                    <p className="text-sm text-muted-foreground">
                      Video ads are performing 43% better in your industry this week. Consider shifting budget.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-medium text-foreground mb-2">Optimal Posting Times</h4>
                    <p className="text-sm text-muted-foreground">
                      Your audience is most active between 6-8 PM. Schedule posts accordingly.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <h4 className="font-medium text-foreground mb-2">Audience Growth Forecast</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on current trends, expect 15% audience growth in the next 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Performance Predictions
                  </CardTitle>
                  <CardDescription>AI-powered forecasting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Reach</p>
                      <p className="text-2xl font-bold text-foreground">+25%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm text-muted-foreground">Engagement Forecast</p>
                      <p className="text-2xl font-bold text-foreground">+18%</p>
                    </div>
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm text-muted-foreground">ROI Projection</p>
                      <p className="text-2xl font-bold text-foreground">3.2x</p>
                    </div>
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Management Tab */}
          <TabsContent value="data" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    Import Data
                  </CardTitle>
                  <CardDescription>Upload your existing campaign data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Database className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-3">
                      Drag & drop files or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Select Files
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Integrations
                  </CardTitle>
                  <CardDescription>Connect your marketing platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 rounded bg-primary mr-3" />
                    Connect Facebook Ads
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 rounded bg-accent mr-3" />
                    Connect Instagram
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-5 h-5 rounded bg-secondary mr-3" />
                    Connect Google Ads
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    Export Data
                  </CardTitle>
                  <CardDescription>Download your campaign reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Export as CSV
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Studio;
