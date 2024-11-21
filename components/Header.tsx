'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#4A6FA5]">CarePath</Link>
        
        {/* Hamburger button for mobile */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-[#4A6FA5]" fill="none" strokeLinecap="round" 
               strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#4A6FA5] hover:text-[#9BA9B9]">Home</Link>
          <Link href="/about" className="text-[#4A6FA5] hover:text-[#9BA9B9]">About</Link>
        </nav>

        {/* Desktop Get Started Button */}
        <Link href="/get-started" className="hidden md:block">
          <Button className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C]">Get Started</Button>
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link href="/" className="text-[#4A6FA5] hover:text-[#9BA9B9]">Home</Link>
            <Link href="/about" className="text-[#4A6FA5] hover:text-[#9BA9B9]">About</Link>
            <Link href="/get-started">
              <Button className="w-full bg-[#4A6FA5] text-white hover:bg-[#3A5A8C]">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}