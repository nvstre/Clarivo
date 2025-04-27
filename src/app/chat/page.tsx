"use client"

import { Layers, BarChart, Calendar, User, Search, Bell, Info, Moon, ChevronDown, Sparkles, RefreshCw } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const HF_API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base"
const HF_API_KEY = process.env.NEXT_PUBLIC_HF_API_KEY // Set this in your .env.local file

async function fetchAIResponse(userMessage: string): Promise<string> {
  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: userMessage }),
  })
  const data = await response.json()
  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text.trim()
  }
  if (typeof data.generated_text === "string") {
    return data.generated_text.trim()
  }
  return "[No response from AI]"
}

export default function ChatMockupPage() {
  const [messages, setMessages] = useState<{ sender: "user" | "assistant"; text: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((msgs) => [...msgs, { sender: "user", text: input }])
    setInput("")
    setLoading(true)
    const aiReply = await fetchAIResponse(input)
    setMessages((msgs) => [...msgs, { sender: "assistant", text: aiReply }])
    setLoading(false)
  }

  async function handleRegenerate() {
    if (messages.length === 0) return
    setLoading(true)
    const lastUserMsg = [...messages].reverse().find((m) => m.sender === "user")?.text || "Hello!"
    const aiReply = await fetchAIResponse(lastUserMsg)
    setMessages((msgs) => [...msgs, { sender: "assistant", text: aiReply }])
    setLoading(false)
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafd]">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="fixed z-30 md:static md:translate-x-0 top-0 left-0 h-full md:h-auto transition-transform duration-300 bg-white shadow-sm flex flex-col justify-between rounded-none md:rounded-r-3xl py-8 px-6 min-h-screen w-[80vw] max-w-xs md:w-[270px]">
          <div>
            <div className="flex items-center gap-2 mb-10 justify-between">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-[#23244a]">CLARIVO</span>
                <span className="font-semibold text-[#5f749b] text-base">AI FREE</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <SidebarItem icon={<Sparkles className="w-5 h-5" />} label="Chat" active />
              <SidebarItem icon={<Layers className="w-5 h-5" />} label="My Projects" pro />
              <SidebarItem icon={<BarChart className="w-5 h-5" />} label="Insights" pro />
              <SidebarItem icon={<Calendar className="w-5 h-5" />} label="Progress Tracking" pro />
              <div className="ml-8 flex flex-col gap-1 mt-2">
                <SidebarSubItem label="Weekly check-in" />
                <SidebarSubItem label="Milestones" />
                <SidebarSubItem label="Vision Board" />
              </div>
            </nav>
            <div className="mt-10 bg-gradient-to-br from-[#7b5cff] to-[#4f8cff] rounded-2xl p-5 flex flex-col items-center text-white shadow-lg">
              <div className="bg-white bg-opacity-20 rounded-full p-2 mb-2">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="font-semibold text-base mb-1 text-center">Unlock Your Full Potential with PRO</div>
              <div className="text-xs text-white/80 text-center mb-3">Get personalized plans, unlimited chat access, and weekly deep-dives to accelerate your transformation.</div>
              <button className="w-full bg-white text-[#4f8cff] font-bold py-2 rounded-xl text-sm shadow hover:bg-[#f7fafd] transition">Get started with PRO</button>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="rounded-full bg-[#f3f6fa] flex items-center justify-center w-10 h-10">
              <User className="w-6 h-6 text-[#5f749b]" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-[#23244a] text-sm leading-tight">Demo User</div>
            </div>
            <button className="ml-auto text-[#5f749b] hover:text-[#7b5cff]">
              <User className="w-5 h-5" />
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col px-0 py-8">
          {/* Top Bar */}
          <div className="flex items-center justify-end gap-4 px-12 mb-6">
            <div className="relative">
              <input type="text" placeholder="Search" className="rounded-full bg-[#f3f6fa] px-4 py-2 pl-10 text-sm outline-none border border-transparent focus:border-[#7b5cff] transition w-56" />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#5f749b]" />
            </div>
            <button className="text-[#5f749b] hover:text-[#7b5cff]">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-[#5f749b] hover:text-[#7b5cff]">
              <Info className="w-5 h-5" />
            </button>
            <button className="text-[#5f749b] hover:text-[#7b5cff]">
              <Moon className="w-5 h-5" />
            </button>
            <div className="rounded-full bg-[#f3f6fa] flex items-center justify-center w-9 h-9">
              <User className="w-5 h-5 text-[#5f749b]" />
            </div>
          </div>
          {/* Chat Header */}
          <div className="px-12 mb-4">
            <h1 className="text-3xl font-bold text-[#23244a]">Chat</h1>
          </div>
          {/* Chat Tabs & Tools */}
          <div className="px-12 flex items-center gap-4 mb-4">
            <div className="flex bg-[#f3f6fa] rounded-full p-1 gap-1">
              <button className="px-6 py-2 rounded-full bg-white font-semibold text-[#7b5cff] shadow-sm">Clarivo Basic</button>
              <button className="px-6 py-2 rounded-full text-[#5f749b] font-semibold">Clarivo Advanced</button>
            </div>
            <div className="ml-6 flex items-center gap-2 text-[#5f749b] text-sm">
              No tools added <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {/* Chat Card(s) */}
          <div className="px-12 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="rounded-full bg-[#f3f6fa] p-2">
                  <Sparkles className="w-5 h-5 text-[#7b5cff]" />
                </div>
                <div className="font-semibold text-[#23244a] flex-1 truncate">
                  {(() => {
                    const lastUserMsg = [...messages].reverse().find(m => m.sender === "user")?.text
                    if (!lastUserMsg) return null
                    return lastUserMsg
                  })()}
                </div>
              </div>
              <div className="text-[#23244a] text-sm leading-relaxed whitespace-pre-line min-h-[200px] max-h-[320px] overflow-y-auto">
                {messages.length === 0 && !loading ? (
                  <div className="text-[#5f749b] flex flex-col items-center gap-2 py-8">
                    <Sparkles className="w-8 h-8 mb-2 text-[#7b5cff]" />
                    Start a conversation!
                  </div>
                ) : (
                  messages.map((msg, i) => (
                    <div key={i} className="mb-4">
                      <div className="text-xs text-[#5f749b] mb-1">{msg.sender === "assistant" ? "Clarivo AI" : "You"}</div>
                      <div className="whitespace-pre-line font-normal text-[#23244a]">{msg.text}</div>
                    </div>
                  ))
                )}
                {loading && (
                  <div className="text-[#7b5cff] text-base flex flex-col items-center gap-2 py-4 animate-pulse">
                    <Sparkles className="w-6 h-6 mb-2 text-[#7b5cff]" />
                    Clarivo AI is thinking...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="flex justify-center mt-2">
                <button type="button" onClick={handleRegenerate} className="flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow text-[#7b5cff] font-semibold border border-[#e3e8f0] hover:bg-[#f3f6fa] transition">
                  <RefreshCw className="w-4 h-4" />
                  Regenerate response
                </button>
              </div>
              <form className="flex items-center gap-4 mt-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type anything...."
                  className="flex-1 rounded-full bg-white px-6 py-4 text-sm border border-[#e3e8f0] shadow focus:border-[#7b5cff] outline-none transition"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={loading}
                />
                <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-br from-[#7b5cff] to-[#4f8cff] text-white font-bold shadow hover:from-[#4f8cff] hover:to-[#7b5cff] transition">
                  {loading ? "Thinking..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          {/* Footer */}
          <footer className="flex justify-end gap-6 text-xs text-[#5f749b] px-12 mt-8 mb-2">
            <a href="#" className="hover:underline">Homepage</a>
            <a href="#" className="hover:underline">License</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </footer>
        </main>
      </div>
      {/* Add animation for new messages */}
      <style jsx global>{`
      @keyframes fadein { from { opacity: 0; transform: translateY(16px);} to { opacity: 1; transform: none; } }
      .animate-fadein { animation: fadein 0.5s; }
      `}</style>
    </div>
  )
}

function SidebarItem({ icon, label, active, pro, onClick }: { icon: React.ReactNode; label: string; active?: boolean; pro?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition font-medium text-base ${active ? "bg-[var(--color-lighter)] text-[var(--color-blue)]" : "text-[var(--color-navy)] hover:bg-[var(--color-lighter)]"}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
      {pro && <span className="ml-auto bg-[var(--color-lighter)] text-[var(--color-blue)] text-[10px] font-bold px-2 py-0.5 rounded">PRO</span>}
    </div>
  )
}

function SidebarSubItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div className="text-[var(--color-accent)] text-sm px-3 py-1 rounded hover:bg-[var(--color-lighter)] cursor-pointer transition" onClick={onClick}>
      {label}
    </div>
  )
} 