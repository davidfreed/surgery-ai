'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'react-hot-toast'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Validate all required fields
      const name = formData.get('name')?.toString().trim();
      const email = formData.get('email')?.toString().trim();
      const surgeries = formData.get('surgeries')?.toString().trim();
      const address = formData.get('address')?.toString().trim();
      
      if (!name || !email || !surgeries || !address) {
        toast.error('Please fill in all required fields');
        setSubmitting(false);
        return;
      }
      
      const result = await emailjs.sendForm(
        'service_m7v7rwu',
        'template_wz6fuxf',
        form,
        'ZRgvTpy3y-Yp9FEkf'
      );
      
      if (result.text === 'OK') {
        toast.success('Thank you! We will contact you within 24 hours to schedule a demo.', {
          duration: 5000,
          style: {
            background: '#4A6FA5',
            color: '#fff',
          },
        });
        form.reset();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-[#4A6FA5] mb-4">
            Get Started with CarePath
          </h1>
          
          {/* Info Message */}
          <div className="bg-[#4A6FA5]/5 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-1">
              We'll reach out within 24 hours to schedule a personalized demo of how CarePath can transform your practice.
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
                placeholder="Dr. John Smith"
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
                placeholder="john@practice.com"
              />
            </div>

            <div>
              <label htmlFor="surgeries" className="block text-sm font-medium text-gray-700 mb-1">
                Approximate Surgeries Per Year
              </label>
              <input
                type="number"
                id="surgeries"
                name="surgeries"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A6FA5] focus:border-[#4A6FA5] outline-none"
                placeholder="500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Practice Address
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A6FA5] focus:border-[#4A6FA5] outline-none"
                placeholder="123 Medical Center Drive, Suite 100&#10;Dallas, TX 75001"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] py-3 text-lg font-semibold"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Schedule Demo'}
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Your information is protected by our privacy policy.
          </p>
        </div>
      </div>
    </div>
  )
}