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
    title: "How AI Helped Me Break My Self-Sabotaging Habits",
    description: "A personal journey of transformation and the unexpected ways AI coaching revealed my behavior patterns.",
    date: "March 15, 2024",
    author: "Alex Rivera",
    readTime: "6 min read",
    image: "/blog/ai-revolution.jpg",
    content: `Six months ago, I was stuck in a cycle of starting projects and never finishing them. I'd get excited, dive in, and then abandon ship when things got challenging. It was frustrating, and traditional self-help books weren't cutting it. That's when I decided to try AI-powered coaching, and it changed everything.

Here's what I discovered about breaking self-sabotaging patterns:

1. Pattern Recognition That Blew My Mind
The AI coach spotted something I never noticed – I was quitting projects exactly 3 weeks in, right when the initial excitement wore off. This wasn't random; it was a pattern tied to my fear of imperfect outcomes.

2. Micro-Interventions That Actually Worked
Instead of grand plans, the AI suggested tiny daily check-ins. When I felt the urge to quit, I'd log my thoughts. The AI analyzed these patterns and helped me develop specific counter-strategies. For example, I now have a "3-week preparation plan" for every new project.

3. Real-Time Guidance When It Matters Most
The game-changer was getting support exactly when I needed it. Late-night doubt spiral? The AI coach was there with personalized exercises based on my past successes. It wasn't generic advice – it was insights drawn from my own experiences.

4. The Science Behind the Change
What makes AI coaching different is its ability to:
- Track subtle behavior patterns over time
- Adapt strategies based on what actually works for you
- Provide objective feedback without judgment
- Offer support at any time, not just during scheduled sessions

5. Unexpected Benefits
Beyond breaking my quit-cycle, I discovered:
- Better sleep (anxiety about unfinished projects decreased)
- Improved relationships (less venting to friends about failed projects)
- More energy (not constantly starting over takes less emotional toll)

6. The Reality Check
It wasn't all smooth sailing. The first month was uncomfortable as the AI helped me face my patterns. But unlike human coaches who might let me deflect, the AI kept bringing me back to the data – my actual behavior patterns.

Today, I'm not just starting projects; I'm finishing them. My latest project is in month 4 – a personal record. The key wasn't just willpower or motivation; it was understanding my patterns and having consistent, personalized support.

If you're stuck in your own self-sabotaging cycles, consider this: sometimes the best mirror is an AI that can reflect your patterns back to you with perfect clarity.`
  },
  {
    title: "From Overwhelmed to Organized: My 30-Day Reset",
    description: "How I used AI guidance to transform my chaotic life into a structured success story, one small change at a time.",
    date: "March 12, 2024",
    author: "Maya Chen",
    readTime: "5 min read",
    image: "/blog/mental-barriers.jpg",
    content: `"I don't have enough time" was my daily mantra. Between a demanding job, side projects, and personal life, I was drowning in to-do lists. Then I took the 30-day Clarivo challenge, and everything changed. Here's my unfiltered experience.

Week 1: The Reality Check
The AI's first task surprised me – do nothing new. Instead, it tracked my current patterns:
- I was context-switching 40+ times per day
- My "quick email checks" averaged 45 minutes
- I had 7 half-finished projects consuming mental space

Week 2: The Mindset Shift
Rather than adding more productivity tools, the AI helped me eliminate:
- Deleted 4 "productivity" apps
- Reduced Slack channels from 15 to 5
- Set up "focus blocks" with actual boundaries

Week 3: The Systems Upgrade
This is where things got interesting. The AI analyzed my peak performance times and helped design a personalized workflow:
- Deep work during my natural energy peaks (8-11 AM)
- Quick tasks batched into 30-minute power sessions
- New meeting rules: 25 or 50 minutes only

Week 4: The Integration
The final week wasn't about new changes but cementing habits:
- Morning planning reduced from 30 to 5 minutes
- Energy tracking became automatic
- Stress levels dropped noticeably

The Real Results:
1. Completed more in 6 hours than I used to in 9
2. Reduced open browser tabs from 25+ to 5
3. Actually finished a course I started (first time in years)
4. Sleep improved by 1.5 hours average

Key Lessons Learned:
1. More tools aren't the answer – better systems are
2. AI coaching works because it's personalized and judgment-free
3. Small, consistent changes beat massive overhauls
4. Data doesn't lie – seeing my patterns was eye-opening

What Makes AI Coaching Different:
- It never gets tired of reminding you about your goals
- Adapts to your progress in real-time
- Provides objective feedback without emotional baggage
- Available 24/7 for quick check-ins

The Unexpected Benefits:
- Better relationships (I'm actually present now)
- Improved decision-making (less mental clutter)
- More creative ideas (space to think!)
- Reduced anxiety about productivity

Is It Perfect? No.
You still have to do the work. The AI is a guide, not a magic solution. But having an objective partner that knows your patterns and goals is invaluable.

Looking Ahead:
I'm keeping most of these changes. The best part? They don't feel like forced habits anymore – they're just how I work now. And for someone who tried every productivity system out there, that's nothing short of remarkable.`
  },
  {
    title: "The Unexpected Way AI Improved My Fitness Journey",
    description: "Moving beyond generic workout plans: How AI coaching adapted to my real-life schedule and finally made fitness stick.",
    date: "March 8, 2024",
    author: "James Cooper",
    readTime: "7 min read",
    image: "/blog/habit-formation.jpg",
    content: `I've started and quit fitness journeys more times than I can count. Gym memberships, personal trainers, fitness apps – you name it, I've tried it. But something clicked when I started using AI coaching. Here's my three-month journey and what made this time different.

The Old Pattern:
- Start strong with a rigid plan
- Miss a few days due to work/life
- Feel guilty and give up entirely
- Repeat every few months

The AI Approach:
Instead of a one-size-fits-all plan, the AI coach built around my life:

1. Smart Scheduling
- Analyzed my calendar patterns
- Suggested workout times based on my actual availability
- Automatically adjusted when meetings shifted
- Created backup plans for busy days

2. Adaptive Workouts
- Started with 10-minute sessions (seemed too easy)
- Gradually increased based on my energy levels
- Mixed high and low intensity based on sleep data
- Offered alternatives when motivation was low

3. Progress Tracking That Made Sense
- Focused on consistency over perfection
- Tracked energy levels, not just reps
- Showed patterns between sleep, diet, and performance
- Celebrated small wins I would've missed

Real Results After 90 Days:
- 80% workout completion rate (previous best: 40%)
- Down 15 pounds without crash dieting
- Actually enjoying exercise (biggest surprise)
- Stress levels noticeably lower

The Game-Changing Features:

1. Dynamic Adjustments
When I had a bad night's sleep, the AI adjusted the next day's workout instead of pushing me to stick to the original plan.

2. Pattern Recognition
- Identified that I never complete evening workouts
- Showed how my mood affects performance
- Spotted when I was overtraining
- Predicted potential skip days before they happened

3. Psychological Support
- No guilt trips about missed workouts
- Reframed setbacks as data points
- Provided science-based motivation
- Offered practical solutions instead of generic encouragement

4. Lifestyle Integration
- Suggested walking meetings for busy days
- Created 5-minute desk exercises
- Provided travel-friendly workout alternatives
- Adapted to my social schedule

Common Challenges and Solutions:

1. Initial Skepticism
I thought AI couldn't replace human coaching. Truth is, it offered something different – consistent, data-driven support without judgment.

2. Too-Easy Start
The initial workouts felt too simple, but this prevented burnout and built sustainable habits.

3. Tech Dependence
I worried about relying on technology, but the AI actually taught me to be more in tune with my body.

Looking Forward:
I'm not just fitter; I'm smarter about fitness. The AI coach taught me to:
- Listen to my body
- Adapt instead of quit
- Focus on trends over daily metrics
- Build sustainable habits

Key Takeaways:
1. Consistency beats intensity
2. Personalization is crucial
3. Data helps, but feeling good matters more
4. Small adjustments > complete overhauls

For anyone struggling with fitness consistency, consider this: sometimes the best coach isn't the one pushing you hardest, but the one helping you stick with it longest.`
  },
  {
    title: "Finding Balance: A Tech Worker's Guide to Digital Wellness",
    description: "Real strategies for maintaining mental health and productivity in an always-connected world, backed by personal experience and AI insights.",
    date: "March 5, 2024",
    author: "Sophia Martinez",
    readTime: "6 min read",
    image: "/blog/digital-wellness.jpg",
    content: `As a software developer, I spent 12+ hours a day staring at screens. Burnout wasn't just likely; it was inevitable. Here's how AI coaching helped me find balance without sacrificing productivity.

The Breaking Point:
- Constant headaches
- Sleep problems
- Weekend anxiety
- Declining code quality
- Strained relationships

The AI-Guided Reset:

1. Smart Boundaries
Instead of a strict "digital detox," the AI helped create sustainable limits:
- 50-minute focus blocks with 10-minute breaks
- Screen-free first hour after waking
- No-phone zones in the house
- Auto-DND during deep work

2. Data-Driven Insights
The AI tracked my patterns and revealed:
- Peak coding hours (9-11 AM, 4-6 PM)
- Meeting fatigue patterns
- Optimal break timing
- Screen time impact on sleep

3. Practical Solutions
Real changes that actually stuck:
- Morning routine without phones
- Nature walks between coding sessions
- Blue light management
- Mindful notification settings

The 4-Week Transformation:

Week 1: Awareness
- Tracked digital habits
- Identified trigger points
- Set baseline metrics
- Created environment changes

Week 2: Implementation
- Established new routines
- Added physical movement
- Modified workspace
- Adjusted notification settings

Week 3: Optimization
- Fine-tuned work patterns
- Enhanced break activities
- Improved sleep routine
- Balanced social media use

Week 4: Integration
- Solidified new habits
- Created contingency plans
- Established maintenance mode
- Set up progress tracking

Measurable Results:
- Productivity up 30%
- Sleep quality improved 60%
- Headaches reduced by 80%
- Better code reviews
- Improved team communication

The Surprising Benefits:

1. Better Code Quality
- Fewer bugs in my code
- More creative solutions
- Improved documentation
- Faster problem-solving

2. Enhanced Creativity
- More innovative approaches
- Better architectural decisions
- Increased learning capacity
- Improved technical writing

3. Stronger Relationships
- More present in meetings
- Better team collaboration
- Improved home life
- Enhanced communication

4. Physical Improvements
- Better posture
- Reduced eye strain
- More energy
- Better sleep

Practical Tips for Tech Workers:

1. Environment Design
- Proper monitor height
- Natural light exposure
- Standing desk intervals
- Clean workspace policy

2. Digital Habits
- Regular inbox clearing
- Structured notification times
- Focus mode automation
- Calendar blocking

3. Physical Integration
- Micro-movement breaks
- Desk exercises
- Walking meetings
- Stretching routines

4. Mental Wellness
- Mindfulness practices
- Stress monitoring
- Regular reflection
- Progress celebration

The Role of AI Support:
- Constant but non-intrusive
- Data-driven suggestions
- Personalized adjustments
- Progress tracking

Looking Forward:
Digital wellness isn't about rejecting technology; it's about using it intentionally. With AI coaching, I found a sustainable way to stay productive while protecting my wellbeing.

Remember: Technology should work for you, not the other way around. Sometimes it takes an AI to teach us how to be more human.`
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
