import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, X, Send } from "lucide-react";

export default function AISupportButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("AI Support message:", message);
      setMessage("");
    }
  };

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-40"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-ai-support"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 shadow-xl z-40" data-testid="card-ai-chat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <CardTitle className="text-lg">AI Customer Support</CardTitle>
              <CardDescription>Powered by GPT/Claude integration</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-64 bg-muted rounded-lg p-4 overflow-y-auto">
              <div className="text-center text-muted-foreground text-sm py-12">
                <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="mb-2">AI Chatbot Interface</p>
                <p className="text-xs">
                  Integration with GPT/Claude API will be implemented in production
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                data-testid="input-ai-message"
              />
              <Button size="icon" onClick={handleSend} data-testid="button-send-message">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Chat interface reserved for AI integration
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
