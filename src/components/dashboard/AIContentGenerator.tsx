import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, RefreshCw, Copy, FileText, Mail, MessageSquare, Megaphone, Clock, Search, Mic, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { PlanLimits } from "@/lib/planLimits";

interface AIContentGeneratorProps {
  generationsUsed: number;
  maxGenerations: number;
  onGenerate: () => void;
  plan: PlanLimits;
}

const contentTypeOptions: Record<string, { label: string; icon: any }> = {
  "blog": { label: "Blog Post", icon: FileText },
  "blog-seo": { label: "SEO Blog (Advanced)", icon: FileText },
  "ad": { label: "Ad Copy", icon: Megaphone },
  "multi-ad": { label: "Multi-Variant Ad Copy", icon: Megaphone },
  "email": { label: "Email", icon: Mail },
  "email-sequence": { label: "Email Sequence", icon: Mail },
  "email-campaign": { label: "Email Campaign", icon: Mail },
  "caption": { label: "Social Caption", icon: MessageSquare },
  "social-batch": { label: "Social Content Batch", icon: MessageSquare },
  "landing": { label: "Landing Page Copy", icon: FileText },
  "seo": { label: "SEO Article", icon: FileText },
  "sales-page": { label: "Sales Page Copy", icon: FileText },
  "funnel-script": { label: "Funnel Script", icon: FileText },
};

const pastGenerations = [
  { id: 1, type: "Blog", title: "5 Growth Strategies for Startups", date: "2 hours ago" },
  { id: 2, type: "Ad", title: "Product Launch Campaign", date: "Yesterday" },
  { id: 3, type: "Email", title: "Welcome Sequence Email", date: "3 days ago" },
];

const AIContentGenerator = ({ generationsUsed, maxGenerations, onGenerate, plan }: AIContentGeneratorProps) => {
  const { toast } = useToast();
  const [contentType, setContentType] = useState(plan.contentTypes[0]);
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const remaining = maxGenerations - generationsUsed;
  const isPro = plan.name === "professional";

  const handleGenerate = async () => {
    if (remaining <= 0) {
      toast({ title: "Limit reached", description: `Upgrade for more AI generations.`, variant: "destructive" });
      return;
    }
    if (!prompt.trim()) {
      toast({ title: "Enter a prompt", description: "Describe what you want to create.", variant: "destructive" });
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedContent(
        `Generated ${contentType} content: "${prompt}"\n\n` +
        `Tone: ${tone} | Audience: ${audience || "General"}\n` +
        (keywords ? `Keywords: ${keywords}\n` : "") +
        (isPro ? `\n🎯 Predictive Performance Score: 87/100\n📊 Estimated CTR: 4.2%\n` : "") +
        `\nThis is sample output. Connect to the AI engine for real content.`
      );
      setIsGenerating(false);
      onGenerate();
      toast({ title: "Content generated!", description: `${remaining - 1} generations remaining.` });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({ title: "Copied!", description: "Content copied to clipboard." });
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">
              {isPro ? "AI Content Intelligence Engine" : "AI Content Generator"}
            </CardTitle>
          </div>
          <Badge variant={remaining <= 10 ? "destructive" : "secondary"}>
            {remaining}/{maxGenerations} remaining
          </Badge>
        </div>
        <CardDescription>
          {isPro
            ? "Advanced content generation with competitor analysis & predictive scoring"
            : "Generate blog posts, ads, emails, and captions with AI"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="generate">
          <TabsList className="mb-4">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            {isPro && <TabsTrigger value="tools">Pro Tools</TabsTrigger>}
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4">
            <div className={`grid ${isPro ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2"} gap-3`}>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Content Type</label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {plan.contentTypes.map(ct => (
                      <SelectItem key={ct} value={ct}>
                        {contentTypeOptions[ct]?.label || ct}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tone</label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="bold">Bold</SelectItem>
                    <SelectItem value="playful">Playful</SelectItem>
                    {isPro && <SelectItem value="brand-trained">Brand Voice (Trained)</SelectItem>}
                  </SelectContent>
                </Select>
              </div>
              {isPro && (
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Audience Persona</label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger><SelectValue placeholder="Select persona" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup-founder">Startup Founders</SelectItem>
                      <SelectItem value="marketing-team">Marketing Teams</SelectItem>
                      <SelectItem value="enterprise">Enterprise Buyers</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Owners</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {isPro && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Keywords (SEO)</label>
                <Input placeholder="Enter target keywords, comma-separated" value={keywords} onChange={e => setKeywords(e.target.value)} />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">What are you creating?</label>
              <Textarea placeholder="Describe the content you want to generate..." value={prompt} onChange={(e) => setPrompt(e.target.value)} className="min-h-[80px]" />
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating || remaining <= 0} className="w-full">
              {isGenerating ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Generating...</> : <><Sparkles className="w-4 h-4 mr-2" /> Generate Content</>}
            </Button>

            {generatedContent && (
              <div className="relative">
                <div className="bg-muted/30 rounded-lg p-4 text-sm text-foreground whitespace-pre-wrap max-h-[300px] overflow-y-auto">
                  {generatedContent}
                </div>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2" onClick={handleCopy}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            )}
          </TabsContent>

          {isPro && (
            <TabsContent value="tools" className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  <span className="text-xs">Competitor Analyzer</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-xs">Keyword Strategy</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Mic className="w-5 h-5 text-primary" />
                  <span className="text-xs">Train Brand Voice</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-xs">Performance Leaderboard</span>
                </Button>
              </div>
            </TabsContent>
          )}

          <TabsContent value="history">
            <div className="space-y-3">
              {pastGenerations.map((gen) => (
                <div key={gen.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{gen.title}</p>
                      <p className="text-xs text-muted-foreground">{gen.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />{gen.date}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;
