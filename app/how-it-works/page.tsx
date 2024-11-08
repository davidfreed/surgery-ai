'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ClipboardList, 
  Brain, 
  FileText, 
  Shield, 
  Clock, 
  Search,
  Database,
  ChartBar,
  FileCheck,
  Microscope
} from 'lucide-react'

const ParallaxElement: React.FC<{ children: React.ReactNode; speed?: number }> = ({ children, speed = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current
      if (element && typeof window !== 'undefined') {
        const scrollTop = window.scrollY
        element.style.transform = `translateY(${scrollTop * speed}px)`
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return <div ref={ref}>{children}</div>
}

const AnimatedIcon: React.FC<{ Icon: React.ElementType; color: string }> = ({ Icon, color }) => (
  <div className="relative w-16 h-16 mx-auto mb-4">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-full animate-pulse" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
  </div>
)

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F0F4F8] to-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A6FA5] text-center mb-6">
              How Surgery.AI Works
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              Our advanced platform combines AI technology with expert medical knowledge to provide 
              you with comprehensive surgical guidance in just 24 hours.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-5">

              {/* Step 1 */}
              <div className="max-w-4xl mx-auto mb-16 bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#4A6FA5] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h3 className="text-2xl font-bold text-[#4A6FA5]">Enter Your Medical Information</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Share your medical records securely through our HIPAA-compliant platform. All
                      we need are your scanned images, a description of your clinical history, and the
                      initial questions you want to see answered.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <Shield className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">HIPAA Compliant Security</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <Clock className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">Quick 10-Minute Process</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#4A6FA5]/5 p-6 rounded-lg flex flex-col items-center text-center">
                      <div className="bg-white p-4 rounded-full shadow-md mb-4">
                        <ClipboardList className="w-8 h-8 text-[#4A6FA5]" />
                      </div>
                      <span className="text-sm font-medium">Medical Records</span>
                    </div>
                    <div className="bg-[#4A6FA5]/5 p-6 rounded-lg flex flex-col items-center text-center">
                      <div className="bg-white p-4 rounded-full shadow-md mb-4">
                        <FileText className="w-8 h-8 text-[#4A6FA5]" />
                      </div>
                      <span className="text-sm font-medium">Lab Results</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="max-w-4xl mx-auto mb-16 bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#4A6FA5] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h3 className="text-2xl font-bold text-[#4A6FA5]">AI-Powered Digital Analysis</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our advanced AI system processes your information. The 'brain' has been
                      trained directly by Dr. Anup and will reflect the latest clinical research and
                      medical databases.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <Search className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">Latest Clinical Trials</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <Database className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">Comprehensive Data</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-[#4A6FA5]/5 p-8 rounded-lg">
                      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                        <div className="flex flex-col items-center">
                          <Brain className="w-12 h-12 text-[#4A6FA5] mb-4" />
                          <span className="text-sm font-medium mb-2">AI Analysis in Progress</span>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-[#4A6FA5] rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <ChartBar className="w-12 h-12 text-[#4A6FA5] mb-4" />
                          <span className="text-sm font-medium">Data Comparison</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#4A6FA5] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h3 className="text-2xl font-bold text-[#4A6FA5]">Receive A Personalized Blueprint</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Within 24 hours, you'll receive your comprehensive report with clear
                      recommendations. Dr. Anup personally reviews every patient's data and edits
                      the report every night before they are sent to you.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <Clock className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">24-Hour Turnaround</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#4A6FA5]/10 p-3 rounded-full">
                          <FileCheck className="w-6 h-6 text-[#4A6FA5]" />
                        </div>
                        <span className="text-gray-700">Expert-Reviewed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#4A6FA5]/5 p-8 rounded-lg w-full">
                      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FileCheck className="w-16 h-16 text-[#4A6FA5] mb-4" />
                        <span className="text-lg font-medium text-center">Personalized Report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               {/* Add CTA Section */}
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <div className="bg-[#4A6FA5] text-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-lg mb-6">
                    Get your customized report in less than 24 hours.
                  </p>
                  <Link href="/get-started">
                    <Button 
                        className="bg-white text-[#4A6FA5] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
                    >
                      Get Advice From Dr. Anup
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}