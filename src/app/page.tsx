'use client'

import { useState } from 'react'
import { NavBar } from './components/Navbar'
import { Home as HomeIcon, User, Briefcase, FileText } from 'lucide-react'
import { FlickeringGrid } from './components/FlickeringGrid'
import { Hero } from './components/Hero'  // Import Hero component

export default function Home() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [showChat, setShowChat] = useState(false)

  const navItems = [
    { name: 'Home', url: '#', icon: HomeIcon },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    setLoading(true);
    setResponse('');
  
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
  
      const data = await res.json();
      setResponse(data.output || 'No response.');
    } catch (error) {
      console.error(error);
      setResponse('Something went wrong.');
    }
  
    setLoading(false);
  };

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative">
      {/* Flickering Background Grid */}
      <FlickeringGrid
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="#888888"
        maxOpacity={0.3}
        className="w-full h-full absolute top-0 left-0 z-0"
      />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Navbar */}
        <NavBar items={navItems} />
        
        {/* New Hero Section */}
        <Hero />  {/* Render the Hero component */}

        {/* Chat Input Form */}
        {!showChat && (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., I want to stop procrastinating"
              className="w-full rounded-lg bg-[#1c1c1c] text-white px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition rounded-lg px-6 py-2 text-white font-semibold"
              disabled={loading}
            >
              {loading ? 'Thinking...' : 'Ask'}
            </button>
          </form>
        )}

        {/* AI Response Section */}
        {showChat && (
          <div className="mt-10 w-full flex flex-col gap-4 bg-[#1c1c1c] p-6 rounded-xl shadow-inner text-white">
            <div className="text-left whitespace-pre-wrap">{response || 'Loading...'}</div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow rounded-lg bg-[#2a2a2a] text-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition rounded-lg px-6 py-2 text-white font-semibold"
                disabled={loading}
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
