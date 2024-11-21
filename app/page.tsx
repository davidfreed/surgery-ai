import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  UserPlus,
  Link as LinkIcon,
  Stethoscope,
  Shield, 
  Clock, 
  Search,
  Database,
  ChartBar,
  FileCheck,
  Upload
} from 'lucide-react'

export const metadata = {
  title: 'CarePath',
  description: 'Premium Post-Op Care Platform for Orthopedic Surgeons',
}

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#F0F4F8] py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A6FA5]">
                Double Your Surgeries. 
                Deliver 5-Star Patient Care
              </h1>
              <p className="text-xl mb-8 text-[#333333]">
                Our elite team will handles all your post-op care, giving your patients 24/7 concierge support. 
              </p>
              <p className="text-xl mb-8 text-[#333333]">
                We do the paperwork. You focus on the OR.
              </p>
              <Link href="/get-started">
                <Button size="lg" className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] text-lg md:text-xl py-3 px-6">
                  Get A Demo Today
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/images/surgery.jpg" 
                alt="Premium Patient Care" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* How OrthoAlly Works Section */}
        <section className="py-5 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <UserPlus className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Partner With Us</h3>
                <p className="text-[#333333]">Integrate our platform into your practice. We'll provide your patients with 
                a seamless post-op experience.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <LinkIcon className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Share Access</h3>
                <p className="text-[#333333]">Your patients receive a link to our portal after surgery, giving them 
                instant access to elite post-op care.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Stethoscope className="w-20 h-20 text-[#4A6FA5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">24/7 Care</h3>
                <p className="text-[#333333]">Our experienced PAs handle round-the-clock post-op care and follow-ups. 
                You'll never need to take another routine call again.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose OrthoAlly Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Why Choose CarePath?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Increased Practice Efficiency</h3>
                  <p className="text-[#333333]">Slash administrative workload by 70% while delivering premium care. 
                  Our PAs handle everything from routine follow-ups to complication prevention.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Enhanced Patient Satisfaction</h3>
                  <p className="text-[#333333]">Provide concierge-level care that sets your practice apart. Patients get immediate access to care when they need it most.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Proactive Complication Prevention</h3>
                  <p className="text-[#333333]">Our system flags potential issues before they become serious, reducing emergency calls and improving outcomes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4A6FA5] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Seamless Integration</h3>
                  <p className="text-[#333333]">Easy implementation with your existing workflow. We handle the technical setup and staff training.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-4xl font-bold text-[#4A6FA5] mb-2">70%</h3>
                <p className="text-lg text-[#333333]">Reduction in administrative workload</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-4xl font-bold text-[#4A6FA5] mb-2">24/7</h3>
                <p className="text-lg text-[#333333]">Patient support coverage</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-4xl font-bold text-[#4A6FA5] mb-2">95%</h3>
                <p className="text-lg text-[#333333]">Patient satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-[#3A5A8C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl mb-8">See how CarePath can enhance your patient care while saving you time.</p>
            <Link href="/get-demo">
              <Button size="lg" className="bg-white text-[#4A6FA5] hover:bg-[#F0F4F8] text-lg md:text-xl py-3 px-6">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}