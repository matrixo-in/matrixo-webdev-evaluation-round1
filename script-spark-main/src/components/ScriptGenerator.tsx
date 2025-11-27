import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Copy, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sampleScripts: Record<string, string> = {
  "YouTube Scripts": `🎬 HOOK (0-5 seconds):
"What if I told you that 90% of content creators are making the same mistake that's killing their growth?"

📌 INTRO (5-30 seconds):
Hey everyone! Welcome back to the channel. Today we're diving into something that could completely transform your content strategy...

💡 MAIN CONTENT:
[Section 1: The Problem]
Let's talk about what most creators get wrong...

[Section 2: The Solution]
Here's what top creators do differently...

[Section 3: Implementation]
Now let me show you exactly how to apply this...

🎯 CTA (End):
If you found this helpful, smash that like button and subscribe for more content tips every week. Drop a comment below telling me your biggest content struggle!`,

  "TikTok & Reels": `⚡ HOOK (First 1 second):
"POV: You just discovered the secret to going viral..."

📱 CONTENT (15-30 seconds):
- Quick visual transition
- Key point #1 with text overlay
- Surprising revelation
- Call to action with urgency

🎵 Trending audio suggestion: [Use current viral sound]

💬 Caption: "This changed everything 🤯 Save this for later! #contentcreator #viral #growthhack"`,

  "Podcast Scripts": `🎙️ EPISODE OUTLINE

📍 Cold Open (30 seconds):
Start with a compelling quote or story hook...

🎵 Intro Music & Welcome (1 minute):
"Welcome to [Podcast Name], I'm your host [Name]. Today's episode is going to blow your mind because..."

💬 Main Discussion Points:
1. Introduction to the topic (5 min)
2. Deep dive with examples (15 min)
3. Expert insights or interview segment (10 min)
4. Listener questions (5 min)

🎯 Outro:
Recap key takeaways, preview next episode, CTA for reviews and follows.`,

  "Ad Scripts": `🎯 30-SECOND AD SCRIPT

[Opening - 3 seconds]
ATTENTION-GRABBING STATEMENT

[Problem - 7 seconds]
"Are you tired of [pain point]? You're not alone..."

[Solution - 10 seconds]
"Introducing [Product] - the only solution that [unique benefit]..."

[Social Proof - 5 seconds]
"Join 10,000+ happy customers who've already transformed their [result]..."

[CTA - 5 seconds]
"Click the link below and get 20% off with code CREATOR. Limited time only!"`,

  "Social Posts": `📱 THREAD SCRIPT (Twitter/X)

Tweet 1 (Hook):
I spent 6 months studying viral content. Here are 7 patterns that guarantee engagement: 🧵

Tweet 2:
Pattern #1: The Curiosity Gap
Start with a question that begs to be answered...

Tweet 3:
Pattern #2: Contrarian Takes
Challenge conventional wisdom with data...

[Continue pattern...]

Final Tweet:
If you found this valuable:
• Repost to help others
• Follow for more breakdowns
• Drop a 🔥 if you want Part 2`,

  "Course Scripts": `📚 LESSON SCRIPT

🎯 Learning Objective:
By the end of this lesson, you'll be able to...

📖 Introduction (2 minutes):
Welcome students, preview what they'll learn...

🔑 Key Concepts:
Concept 1: Definition and explanation
- Example
- Common misconception
- Practice exercise

Concept 2: Building on previous knowledge...

✅ Summary & Action Items:
Recap main points, assign homework or practice activity...

❓ Discussion Prompt:
"Share your experience with [topic] in the comments..."`,
};

interface ScriptGeneratorProps {
  selectedCategory: string | null;
}

const ScriptGenerator = ({ selectedCategory }: ScriptGeneratorProps) => {
  const [topic, setTopic] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!selectedCategory) {
      toast({
        title: "Select a category",
        description: "Please choose a script type from the categories above.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      const baseScript = sampleScripts[selectedCategory] || sampleScripts["YouTube Scripts"];
      const customized = topic 
        ? baseScript.replace(/\[topic\]/g, topic).replace(/\[Product\]/g, topic)
        : baseScript;
      setGeneratedScript(customized);
      setIsGenerating(false);
      toast({
        title: "Script generated!",
        description: "Your script is ready. Feel free to customize it further.",
      });
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedScript);
    toast({
      title: "Copied!",
      description: "Script copied to clipboard.",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([generatedScript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `script-${selectedCategory?.toLowerCase().replace(/\s+/g, "-") || "content"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded!",
      description: "Script saved to your device.",
    });
  };

  return (
    <section id="generator" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Generate Your <span className="gradient-text-accent">Script</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your topic or idea, select a category, and watch the magic happen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                What's your content about?
              </label>
              <Textarea
                placeholder="E.g., '5 productivity hacks for remote workers' or 'Product launch announcement for our new app'"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="min-h-[100px] bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            {selectedCategory && (
              <div className="mb-6 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm text-primary">Selected: {selectedCategory}</span>
              </div>
            )}

            <Button
              variant="glow"
              size="lg"
              className="w-full"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Script
                </>
              )}
            </Button>

            {generatedScript && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Your Script</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload}>
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-border/50">
                  <pre className="whitespace-pre-wrap text-sm text-foreground/90 font-mono">
                    {generatedScript}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptGenerator;
