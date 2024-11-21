import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <section className="py-16 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-[#4A6FA5] text-center">About CarePath</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/images/anup.jpg"
                  alt="Dr. Anup Pradhan"
                  width={500}
                  height={500}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="flex flex-col flex-grow gap-2">
                <h2 className="text-2xl font-semibold mb-6 text-[#4A6FA5]">Our Founder's Vision</h2>
                <p className="text-lg mb-6">
                  As Chair of Orthopedic Surgery at Medical City Dallas, Dr. Anup Pradhan saw firsthand how the traditional post-op care model was failing both surgeons and patients. His practice was spending countless hours on paperwork and rushed follow-ups, while patients struggled to drive across town for brief check-ins.
                </p>
                <p className="text-lg">
                  Seeing new patients waiting months for surgeries while his team was overwhelmed with routine post-op care, Dr. Pradhan knew something had to change. He implemented this solution in his own practice first, transforming how his team delivered post-op care. The results were immediate: better patient outcomes, more efficient practice management, and significantly reduced wait times for new surgeries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-[#4A6FA5] mb-6">The CarePath Value for Patients</h2>
            
            <p className="text-center mb-8 max-w-3xl mx-auto">
              Post-op care shouldn't be a burden on patients or providers. Here's how CarePath transforms recovery:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Traditional Post-Op Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Multiple office visits requiring difficult travel with reduced mobility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Rushed appointments that leave questions unanswered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>No access to care team between appointments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Delayed responses to complications or concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Complex medication and PT schedules to manage alone</span>
                  </li>
                </ul>
              </div>

              {/* CarePath Solution */}
              <div className="bg-[#4A6FA5] text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">The CarePath Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>24/7 access to experienced PAs for questions and concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Virtual PT and recovery monitoring from home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Proactive complication prevention with AI monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Automated medication reminders and wound care guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Comprehensive recovery support and education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#4A6FA5]">Transform Your Practice with CarePath</h2>
            <p className="text-xl mb-8">Give your patients premium post-op care while reducing your administrative workload</p>
            <Link href="/get-started">
              <Button size="lg" className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] text-lg md:text-xl py-3 px-6">
                Get A Demo Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}