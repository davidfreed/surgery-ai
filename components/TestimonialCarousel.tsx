'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Dr. Michael R., MD",
    title: "Orthopedic Surgeon",
    location: "Dallas, TX",
    quote: "CarePath has transformed my practice. My administrative workload is down 70%, and I've been able to increase my surgical volume by 40% while providing better care.",
  },
  {
    id: 2,
    name: "Dr. Sarah K., MD",
    title: "Sports Medicine Surgeon",
    location: "Austin, TX",
    quote: "The 24/7 PA coverage is a game-changer. My patients get immediate responses, and I haven't had to take a midnight call in months. It's revolutionized my work-life balance.",
  },
  {
    id: 3,
    name: "Dr. James L., MD",
    title: "Joint Replacement Specialist",
    location: "Houston, TX",
    quote: "Their proactive complication monitoring has reduced our readmission rates by 35%. My patients love the concierge-level care, and I can focus entirely on surgeries.",
  },
  {
    id: 4,
    name: "Dr. Patricia M., MD",
    title: "Orthopedic Surgeon",
    location: "San Antonio, TX",
    quote: "Since implementing CarePath, patient satisfaction scores are up 50%. The platform handles all routine follow-ups, letting me focus on complex cases.",
  },
  {
    id: 5,
    name: "Dr. Robert H., MD",
    title: "Sports Medicine Specialist",
    location: "Fort Worth, TX",
    quote: "The ROI has been incredible. Reduced administrative burden, increased surgical volume, and happier patients. CarePath delivers exactly what they promise.",
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
                <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.location}</p>
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