'use client'

import { useState } from 'react'
import { NavBar } from './components/Navbar'
import { Home as HomeIcon, User, Briefcase, FileText, CheckCircle, Star, Globe } from 'lucide-react'
import { FlickeringGrid } from './components/FlickeringGrid'
import { Hero } from './components/Hero'
import { cn } from "./components/lib/utils"


export default function Home() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [showChat, setShowChat] = useState(false)

  const navItems = [
    { name: 'Features', url: '#', icon: HomeIcon },
    { name: 'Pricing', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Blog', url: '#', icon: FileText }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    setResponse('')
    setShowChat(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      })

      const data = await res.json()
      setResponse(data.output || 'No response.')
    } catch (error) {
      console.error(error)
      setResponse('Something went wrong.')
    }

    setLoading(false)
  }

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
      </div>
    </main>
  )
}