import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { MessageCircle, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "support", text: "Hello! Welcome to Nexus AI support. How can I help you today?" }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { from: "user", text: message }]);
      setMessage("");
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "support", text: "Thank you for your message! A support agent will be with you shortly." }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/help-center" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Live Chat Support</h1>
              <p className="text-muted-foreground">Chat with our support team in real-time</p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden">
              <div className="bg-primary/10 p-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Support Team Online</span>
                </div>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.from === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Type your message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button onClick={handleSend}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Average response time: Less than 2 minutes
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LiveChat;
