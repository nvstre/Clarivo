"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export function AIChat() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: input }]);
    
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I understand you want to improve your life. Let me help you create a personalized plan. What specific area would you like to focus on first?" 
      }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Your AI Life Coach</h2>
          <p className="text-center text-muted-foreground">
            Tell me what you want to change or improve in your life, and I'll help you create a clear path forward.
          </p>
          
          <div className="h-[400px] overflow-y-auto space-y-4 p-4 border border-border rounded-lg">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Start a conversation about your goals...
              </div>
            ) : (
              messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-4",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What would you like to change in your life?"
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
} 