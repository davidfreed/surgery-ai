import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import TestimonialCarousel from '../components/TestimonialCarousel'
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
  Upload
} from 'lucide-react'

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#F0F4F8] py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/images/surgery.jpg" 
                alt="Surgery.AI Hero Image" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A6FA5]">Expert Guidance in 24 Hours</h1>
              <p className="text-xl mb-8 text-[#333333]">12 million U.S. adults are misdiagnosed a year. You don't have to be one.
                Our team of Texas' top surgeons will give you expert guidance within 24 hours. Register below to get started.
              </p>
              <Link href="/get-started">
                <Button size="lg" className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] text-lg md:text-xl py-3 px-6">
                  Find A Surgeon
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        {/*
        <section className="py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/images/anup.jpg" 
                alt="Dr. Anup Pradhan" 
                width={400} 
                height={400} 
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-[#4A6FA5]">About Our Founder</h2>
              <p className="text-lg text-[#333333]">
                Surgery.AI was founded by Dr. Anup Pradhan, Chair of Orthopedic Surgery at Medical City Dallas. 
                He has personally trained the platform to reflect the judgment of expert surgeons, allowing him 
                to help more patients in need.
              </p>
            </div>
          </div>
        </section> */}

        {/* How Surgery.AI Works Section */}
        <section className="py-5 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">How Surgery.AI Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Upload className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Upload Your Medical Records</h3>
                <p className="text-[#333333]">Share as much or as little as you're comfortable with -- we're fully HIPAA compliant, so your data is always secure</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Brain className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">AI-Powered Analysis</h3>
                <p className="text-[#333333]">Our AI agent processes your medical records, imaging, and lab results, then searches
                  the latest medical literature for outcomes that align with your case.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FileCheck className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Expert Review</h3>
                <p className="text-[#333333]">Our team of elite surgeons will review the analysis and send you a clear, easy-to-understand report
                  in less than 24 hours explaining your surgical options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#333333]">Our Partners</h2>
            <div className="flex justify-center items-center space-x-8">
              <Image src="/images/logo-1.png" alt="Partner 1" width={150} height={50} />
              <Image src="/images/logo-2.png" alt="Partner 2" width={150} height={50} />
              {/* <Image src="/images/logo-3.png" alt="Partner 3" width={100} height={50} /> */}
            </div>
          </div>
        </section>

        {/* Why Choose Surgery.AI Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Why Choose Surgery.AI?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Expert Review</h3>
                  <p className="text-[#333333]">Personalized guidance from leading surgical experts, ensuring you receive the best possible advice for your unique situation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Comprehensive Analysis</h3>
                  <p className="text-[#333333]">Data-driven insights from thousands of similar cases, providing a thorough understanding of your options and potential outcomes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Clear Direction</h3>
                  <p className="text-[#333333]">Receive decisive recommendations within 24 hours, allowing you to make informed decisions about your surgical care quickly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Cost-Effective</h3>
                  <p className="text-[#333333]">Save time and money compared to traditional second opinions, without compromising on the quality of guidance you receive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Hear From Our Patients</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-[#3A5A8C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make an Informed Decision?</h2>
            <p className="text-xl mb-8">Get expert surgical guidance tailored to your needs.</p>
            <Link href="/get-started">
              <Button size="lg" className="bg-white text-[#4A6FA5] hover:bg-[#F0F4F8] text-lg md:text-xl py-3 px-6">
                Find An Appointment Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}