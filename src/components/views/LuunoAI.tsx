import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Zap, TrendingUp, Send, Settings, BarChart3, Cpu, Database, Network, TestTube, RotateCw, Eye, Rocket, FileText, Lightbulb, RefreshCw, Download } from "lucide-react";
import { useState } from "react";

const aiMetrics = [
  {
    title: "AI Conversations",
    value: "12,847",
    change: "+23%",
    period: "This month",
    icon: MessageSquare
  },
  {
    title: "Processing Speed",
    value: "1.2ms",
    change: "+15%",
    period: "Average response time",
    icon: Zap
  },
  {
    title: "Accuracy Rate",
    value: "98.7%",
    change: "+2.1%",
    period: "Model performance",
    icon: TrendingUp
  },
  {
    title: "Active Models",
    value: "24",
    change: "+4",
    period: "Deployed AI models",
    icon: Brain
  }
];

const aiCapabilities = [
  "Natural language processing",
  "Intelligent automation",
  "Predictive analytics",
  "Multi-modal understanding",
  "Real-time decision making",
  "Continuous learning"
];

export default function LuunoAI() {
  const [message, setMessage] = useState("");

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">LUUNO AI</h1>
            <p className="text-sm text-muted-foreground">Intelligent Business Assistant</p>
          </div>
        </div>
        
        {/* AI Control Panel Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="glow-hover">
              <Settings className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <div className="py-4">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="h-5 w-5 text-accent" />
                <h2 className="text-lg font-semibold">AI Control Panel</h2>
              </div>
              
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="features">AI Control Features</TabsTrigger>
                  <TabsTrigger value="status">System Status</TabsTrigger>
                  <TabsTrigger value="tests">Test Functions</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics & Actions</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">AI Personality Mode</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">⚖️ Balanced</Badge>
                        <span className="text-sm text-muted-foreground">Optimal balance of speed and accuracy</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="status" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Brain className="h-4 w-4" />
                            <span className="text-sm font-medium">Local LLM</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Online</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Connected</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4" />
                            <span className="text-sm font-medium">Available Models</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Active</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">2 models loaded: llama2:7b, llama3.2</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            <span className="text-sm font-medium">Quantum Core</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Active</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Processing ready</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Network className="h-4 w-4" />
                            <span className="text-sm font-medium">Knowledge Graph</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Loaded</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">15.2K nodes</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-sm font-medium">ChatGPT API</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Connected</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">API key valid</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4" />
                            <span className="text-sm font-medium">Memory System</span>
                          </div>
                          <Badge className="bg-success text-success-foreground">🟢 Active</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">3 sessions</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tests" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <TestTube className="h-5 w-5 mb-2" />
                      <span className="font-medium">Test Ollama</span>
                      <span className="text-xs text-muted-foreground">Test local LLM connection</span>
                    </Button>
                    
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <RotateCw className="h-5 w-5 mb-2" />
                      <span className="font-medium">Quantum Test</span>
                      <span className="text-xs text-muted-foreground">Run quantum processing test</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Brain className="h-5 w-5 mb-2" />
                      <span className="font-medium">Test Consciousness</span>
                      <span className="text-xs text-muted-foreground">Calculate Φ values</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Zap className="h-5 w-5 mb-2" />
                      <span className="font-medium">Quantum Demo</span>
                      <span className="text-xs text-muted-foreground">Show quantum visualization</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Eye className="h-5 w-5 mb-2" />
                      <span className="font-medium">Show Knowledge Graph</span>
                      <span className="text-xs text-muted-foreground">Display neural network</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <MessageSquare className="h-5 w-5 mb-2" />
                      <span className="font-medium">Test ChatGPT</span>
                      <span className="text-xs text-muted-foreground">Test API connection</span>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="metrics" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Self-Improvement Metrics</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">📈 Queries Analyzed:</span>
                          <span className="font-medium">1,247</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">🔍 Issues Detected:</span>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">📊 Improvement Rate:</span>
                          <span className="font-medium">94.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">⭐ Avg Response Quality:</span>
                          <span className="font-medium">9.4/10</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Learning from interactions...</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Quick Actions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Rocket className="h-4 w-4 mr-2" />
                          Deploy AI Workforce
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Business Document
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Get R7 Recommendations
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset Memory
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="h-4 w-4 mr-2" />
                          Export Analytics
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-start">
            <div className="bg-card border border-border p-4 rounded-lg max-w-2xl">
              <p className="text-sm">Hello! I'm LUUNO AI, your intelligent business automation assistant. How can I help you today?</p>
              <p className="text-xs text-muted-foreground mt-2">4:55:27 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask LUUNO AI anything about business automation..."
            className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <Button size="lg" className="glow">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}