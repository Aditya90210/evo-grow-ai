import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, RefreshCw, Copy, FileText, Mail, MessageSquare, Megaphone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIContentGeneratorProps {
  generationsUsed: number;
  maxGenerations: number;
  onGenerate: () => void;
}

const pastGenerations = [
  { id: 1, type: "Blog", title: "5 Growth Strategies for Startups", date: "2 hours ago" },
  { id: 2, type: "Ad", title: "Product Launch Campaign", date: "Yesterday" },
  { id: 3, type: "Email", title: "Welcome Sequence Email", date: "3 days ago" },
];

const AIContentGenerator = ({ generationsUsed, maxGenerations, onGenerate }: AIContentGeneratorProps) => {
  const { toast } = useToast();
  const [contentType, setContentType] = useState("blog");
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const remaining = maxGenerations - generationsUsed;

  const handleGenerate = async () => {
    if (remaining <= 0) {
      toast({
        title: "Limit reached",
        description: "You've used all 50 AI generations this month. Upgrade your plan for more.",
        variant: "destructive",
      });
      return;
    }
    if (!prompt.trim()) {
      toast({ title: "Enter a prompt", description: "Describe what you want to create.", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setGeneratedContent(
        `Here's your generated ${contentType} content based on: "${prompt}"\n\n` +
        `This is a sample output demonstrating the AI content generation capability. ` +
        `In production, this would connect to the AI generation endpoint to produce high-quality ${contentType} content ` +
        `with a ${tone} tone tailored to your business needs.\n\n` +
        `Key highlights:\n- Engaging opening hook\n- Clear value proposition\n- Strong call-to-action\n- Optimized for your target audience`
      );
      setIsGenerating(false);
      onGenerate();
      toast({ title: "Content generated!", description: `${remaining - 1} generations remaining this month.` });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({ title: "Copied!", description: "Content copied to clipboard." });
  };

  const contentTypeIcons: Record<string, any> = {
    blog: FileText,
    ad: Megaphone,
    email: Mail,
    caption: MessageSquare,
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">AI Content Generator</CardTitle>
          </div>
          <Badge variant={remaining <= 5 ? "destructive" : "secondary"}>
            {remaining}/{maxGenerations} remaining
          </Badge>
        </div>
        <CardDescription>Generate blog posts, ads, emails, and captions with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="generate">
          <TabsList className="mb-4">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Content Type</label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="ad">Ad Copy</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="caption">Social Caption</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tone</label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="bold">Bold</SelectItem>
                    <SelectItem value="playful">Playful</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">What are you creating?</label>
              <Textarea
                placeholder="Describe the content you want to generate..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating || remaining <= 0} className="w-full">
              {isGenerating ? (
                <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
              ) : (
                <><Sparkles className="w-4 h-4 mr-2" /> Generate Content</>
              )}
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

          <TabsContent value="history">
            <div className="space-y-3">
              {pastGenerations.map((gen) => {
                const Icon = contentTypeIcons[gen.type.toLowerCase()] || FileText;
                return (
                  <div key={gen.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{gen.title}</p>
                        <p className="text-xs text-muted-foreground">{gen.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {gen.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;
