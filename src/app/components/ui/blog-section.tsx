"use client";

import { MoveRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./dialog";
import { useState } from "react";

const articles = [
  {
    title: "ClarivoAI: Revolutionizing Personal Growth with Specialized AI",
    description: "Our journey to create an AI that truly understands personal development and goal achievement.",
    date: "March 20, 2024",
    author: "Clarivo Team",
    readTime: "5 min read",
    image: "/blog/ai-revolution.jpg",
    content: `Today marks a significant milestone in our journey - the launch of ClarivoAI, a specialized AI assistant designed to help you achieve your personal goals and transform your life.

The Problem We're Solving:
Have you ever found yourself stuck in an endless cycle of research, reading countless books and guides, yet making no real progress? You're not alone. The modern world bombards us with information, but what we truly need is clear direction and personalized guidance.

Why We're Different:
While general AI assistants like ChatGPT can provide broad information, they lack the depth and specialization needed for effective personal development. That's where ClarivoAI comes in. Our AI is specifically trained in the field of self-improvement, making it uniquely qualified to guide you through your personal growth journey.

Our Vision:
ClarivoAI is more than just another AI chatbot. It's a specialized companion that:
- Understands the nuances of personal development
- Provides clear, actionable direction
- Helps you break through research paralysis
- Offers personalized guidance based on your specific goals

What Sets Us Apart:
1. Specialized Knowledge
Unlike general AI models, ClarivoAI is trained specifically in self-improvement methodologies, psychology, and personal development strategies.

2. Clear Direction
We help you move from endless research to actionable steps, providing clear objectives and timelines for your goals.

3. Personalized Approach
Our AI adapts to your unique situation, offering guidance that's tailored to your specific needs and circumstances.

4. Focused Scope
We're not trying to be everything to everyone. We focus on what we do best - helping you achieve personal growth and life transformation.

The Future:
As we grow, we plan to:
- Expand our AI's capabilities in personal development
- Add more structured goal-setting features
- Develop community aspects for shared growth
- Implement advanced progress tracking

Join Us on This Journey:
We're excited to have you as part of the ClarivoAI community. Whether you're looking to improve your career, health, relationships, or personal development, we're here to help you achieve your goals with clarity and purpose.

Start your journey today and experience the difference that specialized AI guidance can make in your life.`
  }
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const handleArticleClick = (article: typeof articles[0]) => {
    setSelectedArticle(article);
  };

  return (
    <div id="blog" className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Latest articles
        </h4>
          <Dialog open={showAllArticles} onOpenChange={setShowAllArticles}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-4 hover:bg-muted transition-all duration-300">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background/95 backdrop-blur-sm border-none shadow-[0_0_50px_#3b82f6/30]">
              <DialogHeader>
                <DialogTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                  All Articles
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Explore our complete collection of insights and strategies
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 mt-6">
                {articles.map((article, index) => (
                  <div key={index} className="flex flex-col gap-4 p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
      </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-400/10 hover:text-blue-500 transition-all duration-300"
                        onClick={() => {
                          setSelectedArticle(article);
                          setShowAllArticles(false);
                        }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Dialog 
              key={index} 
              open={selectedArticle?.title === article.title} 
              onOpenChange={(open) => {
                if (!open) setSelectedArticle(null);
              }}
            >
              <DialogTrigger asChild>
                <div 
                  className="group flex flex-col gap-2 hover:opacity-100 cursor-pointer transition-all duration-300"
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="relative bg-muted rounded-md aspect-video mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl tracking-tight group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-base line-clamp-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm border-none shadow-[0_0_50px_#3b82f6/30]">
                <DialogHeader>
                  <DialogTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    {article.title}
                  </DialogTitle>
                  <DialogDescription className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                  <p className="text-muted-foreground text-lg">{article.description}</p>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {article.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
        </div>
        </div>
              </DialogContent>
            </Dialog>
          ))}
      </div>
    </div>
  </div>
);
};

export { Blog };
