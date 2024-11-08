'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John D. (Austin, TX)",
    quote: "Surgery.AI provided me with invaluable insights that helped me make an informed decision about my surgery. I'm grateful for their expert guidance.",
  },
  {
    id: 2,
    name: "Kevin L. (Laredo, TX)",
    quote: "The speed and accuracy of Surgery.AI's analysis amazed me. Within 24 hours, I had a clear understanding of my options.",
  },
  {
    id: 3,
    name: "Ellen T. (New Orleans, LA)",
    quote: "Thanks to Surgery.AI, I avoided an unnecessary procedure and found a less invasive alternative. Their service is truly life-changing.",
  },
  {
    id: 4,
    name: "Ignacio L. (Houston, TX)",
    quote: "The detailed analysis I received helped me avoid an unnecessary surgery. Their expert guidance was invaluable in making this important decision.",
  },
  {
    id: 5,
    name: "Dana M. (Dallas, TX)",
    quote: "Within 24 hours, I had a clear understanding of all my surgical options. The service was professional, thorough, and exactly what I needed.",
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      // Reset to first item when screen size changes
      setCurrentIndex(0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getVisibleCount = () => {
    if (windowWidth >= 1024) return 3      // desktop
    if (windowWidth >= 768) return 2       // tablet
    return 1                               // mobile
  }

  const nextSlide = () => {
    const visibleCount = getVisibleCount()
    setCurrentIndex((prev) => 
      (prev + 1) % (testimonials.length - visibleCount + 1)
    )
  }

  const prevSlide = () => {
    const visibleCount = getVisibleCount()
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + getVisibleCount()
  )

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-16">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
      >
        <ChevronLeft className="w-6 h-6 text-[#4A6FA5]" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
      >
        <ChevronRight className="w-6 h-6 text-[#4A6FA5]" />
      </button>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="transition-all duration-500"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                <blockquote className="text-lg italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="font-semibold text-[#4A6FA5]">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: testimonials.length - getVisibleCount() + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-[#4A6FA5] w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}