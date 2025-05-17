"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Diamond, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$49/mo",
    description: "Perfect for individuals and small teams starting out.",
    features: [
      "All core features",
      "Basic analytics",
      "Email support",
    ],
    icon: Diamond,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$149/mo",
    description: "For growing businesses that need more power and support.",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    icon: Crown,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    description: "Custom solutions for large organizations.",
    features: [
      "Everything in Pro",
      "Dedicated manager",
      "Custom SLAs",
      "White-glove onboarding",
    ],
    icon: Crown,
    highlight: false,
  },
]

const LuxuryPricingSection = () => (
  <section className="w-full py-24 bg-gradient-to-b from-[#0f172a] via-[#0ea5e9] to-[#38bdf8] text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Premium Pricing</h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">Choose the plan that fits your ambitions. All plans come with our luxury support and AI-powered features.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => {
          const Icon = plan.icon
          return (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.04 }}
              className={cn(
                "rounded-2xl shadow-xl border border-blue-200/20 bg-gradient-to-br from-white/10 to-blue-900/30 backdrop-blur-lg",
                plan.highlight && "ring-2 ring-cyan-400 scale-105 z-10"
              )}
            >
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader className="flex flex-col items-center gap-2">
                  <Badge className={cn("mb-2 px-4 py-1 text-base font-semibold", plan.highlight ? "bg-cyan-500 text-white" : "bg-blue-900/60 text-cyan-200")}>{plan.name}</Badge>
                  <Icon className={cn("w-10 h-10", plan.highlight ? "text-cyan-400" : "text-blue-200")} />
                  <CardTitle className="text-3xl font-bold mt-2">{plan.price}</CardTitle>
                  <CardDescription className="text-blue-100 text-center mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 my-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-blue-50">
                        <Check className="w-5 h-5 text-cyan-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full py-2 text-lg font-semibold transition-all duration-200",
                      plan.highlight ? "bg-cyan-500 hover:bg-cyan-600 text-white" : "bg-blue-900/60 hover:bg-blue-900/80 text-cyan-200"
                    )}
                  >
                    {plan.price === "Contact us" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default LuxuryPricingSection;