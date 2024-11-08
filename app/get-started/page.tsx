'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Shield, Clock } from 'lucide-react'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Add your form submission logic here
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-[#4A6FA5] mb-4">
            Get Started with Surgery.AI
          </h1>
          
          {/* Info Message */}
          <div className="bg-[#4A6FA5]/5 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-1">
              Upon submission, we will contact you shortly with a secure link to our HIPAA-compliant platform 
              where you can safely upload your medical documents.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A6FA5] focus:border-[#4A6FA5] outline-none"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A6FA5] focus:border-[#4A6FA5] outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Brief Description of Your Situation
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A6FA5] focus:border-[#4A6FA5] outline-none"
                placeholder="Please describe your current medical situation and what type of surgical guidance you're seeking..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] py-3 text-lg font-semibold"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Your information is protected by our privacy policy and HIPAA compliance standards.
          </p>
        </div>
      </div>
    </div>
  )
}