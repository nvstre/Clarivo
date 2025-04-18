import { PhoneCall } from "lucide-react";
import { Badge } from "./badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Button } from "./button5";

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Got questions? We&apos;ve got answers.
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Whether you&apos;re curious about how ClarioAI works or wondering how the free plan compares — this section covers our most commonly asked questions.
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Still unsure? Contact us <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>What exactly does your AI goal coach do?</AccordionTrigger>
              <AccordionContent>
                Our AI coach helps you define goals, break them down into actionable steps, and stay on track. It’s like having a personal strategist in your pocket, 24/7.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Is there a free plan available?</AccordionTrigger>
              <AccordionContent>
                Yes — our free plan gives you limited access to the AI coach, supported by ads. You can still get valuable insights and start making progress without paying a cent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>How is this different from ChatGPT or other AI tools?</AccordionTrigger>
              <AccordionContent>
                Our AI is trained specifically for life improvement. It's tailored to guide users through real personal development frameworks — not just answer general questions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>What happens if I cancel my subscription?</AccordionTrigger>
              <AccordionContent>
                You’ll retain access until the end of your billing cycle. After that, your account will downgrade to the free plan automatically — no surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>Can I use this on my phone?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Our web app is fully responsive and mobile-friendly, and we’re currently working on native iOS and Android apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
              <AccordionTrigger>Is my data private and secure?</AccordionTrigger>
              <AccordionContent>
                100%. We use industry-standard encryption and do not sell or share your data with third parties. Your progress is yours alone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="7">
              <AccordionTrigger>How fast will I see results?</AccordionTrigger>
              <AccordionContent>
                It depends on your goals and consistency, but many users begin seeing clarity and momentum in just a few days of use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="8">
              <AccordionTrigger>Who is this tool best suited for?</AccordionTrigger>
              <AccordionContent>
                Anyone serious about self-growth — students, professionals, entrepreneurs, or anyone feeling stuck and wanting direction.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
