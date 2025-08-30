import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Zap, TrendingUp } from "lucide-react";

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
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
          <Brain className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-gradient-purple">
          LUUNO AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience the next generation of artificial intelligence. LUUNO AI combines 
          advanced machine learning with intuitive interaction to power your business automation.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button size="lg" className="glow">
            <MessageSquare className="h-4 w-4 mr-2" />
            Start Conversation
          </Button>
          <Button variant="outline" size="lg">
            View Capabilities
          </Button>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiMetrics.map((metric) => (
          <Card key={metric.title} className="glow-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <metric.icon className="h-5 w-5 text-accent" />
                <Badge variant="secondary" className="bg-success text-success-foreground">
                  {metric.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">{metric.value}</h3>
                <p className="text-sm text-muted-foreground">{metric.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Chat Interface */}
        <Card className="glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              AI Chat Interface
            </CardTitle>
            <p className="text-muted-foreground">
              Interact with LUUNO AI to automate tasks and get insights
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-muted/20 rounded-lg p-4 flex flex-col">
              <div className="flex-1 space-y-4 mb-4">
                <div className="flex justify-start">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg max-w-xs">
                    Hello! I'm LUUNO AI. How can I help you automate your business processes today?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg max-w-xs">
                    I want to create a workflow for processing customer emails
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg max-w-xs">
                    Perfect! I can help you set up an email processing workflow. What specific actions would you like to automate?
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm"
                  disabled
                />
                <Button size="sm" disabled>
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Capabilities */}
        <Card className="glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Capabilities
            </CardTitle>
            <p className="text-muted-foreground">
              Advanced features powered by machine learning
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Zap className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-medium">{capability}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 glow">
              Explore AI Features
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Control Panel Notice */}
      <Card className="border-accent/30 glow-border">
        <CardContent className="text-center py-12">
          <Brain className="h-16 w-16 mx-auto mb-4 text-accent animate-glow-pulse" />
          <h3 className="text-2xl font-semibold mb-2">AI Control Panel</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            The AI Control Panel will appear when you open the chat window. 
            Use it to manage AI conversations, settings, and advanced features.
          </p>
          <Button size="lg" className="glow">
            <MessageSquare className="h-4 w-4 mr-2" />
            Open Chat to Access AI Controls
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}