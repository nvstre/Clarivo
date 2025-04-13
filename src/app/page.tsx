'use client'

import { useState } from 'react'
import { NavBar } from './components/Navbar'  // Correct the import here
import { Home as HomeIcon, User, Briefcase, FileText } from 'lucide-react'
import { FlickeringGrid } from './components/FlickeringGrid'; // Adjust the path based on your folder structure

export default function Home() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const navItems = [
    { name: 'Home', url: '#', icon: HomeIcon },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      })

      const data = await res.json()
      setResponse(data.output || 'No response.')
    } catch (err) {
      console.error(err)
      setResponse('Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        squareSize={4} // Size of the squares in the grid
        gridGap={6} // Gap between squares
        flickerChance={0.3} // Chance of flicker per frame
        color="#888888" // The color of the flickering squares
        maxOpacity={0.3} // Maximum opacity of the squares
        className="w-full h-full absolute top-0 left-0 z-0" // Full screen and behind content
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        <NavBar items={navItems} />

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Your AI Life Coach</h1>
        <p className="text-gray-400 mb-10 text-lg">Tell the bot what you want to improve, and get a clear action plan.</p>

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

        {response && (
          <div className="mt-10 text-left bg-[#1c1c1c] p-6 rounded-xl shadow-inner text-white whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </main>
  )
}
