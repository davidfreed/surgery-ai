import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <section className="py-16 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-[#4A6FA5] text-center">About Surgery.AI</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div>
                <Image
                  src="/images/anup.jpg"
                  alt="Dr. Anup Pradhan"
                  width={500}
                  height={500}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className = "flex flex-col flex-grow gap-2">
                <h2 className="text-2xl font-semibold mb-6 text-[#4A6FA5]">Our Founder's Vision</h2>
                <p className="text-lg mb-6">
                  Surgery.AI was founded by Dr. Anup Pradhan, Chair of Orthopedic Surgery at Medical City Dallas, with a vision to revolutionize how patients receive surgical opinions.
                </p>
                <p className="text-lg mb-6">
                  Throughout his career, Dr. Pradhan witnessed patients receiving drastically different opinions from various doctors. In one striking case, a patient was given recommendations ranging from a simple meniscus trimming to a total knee replacement - a stark contrast in treatment approaches.
                </p>
                <p className="text-lg">
                  This inconsistency in medical advice inspired Dr. Pradhan to create a solution that would provide patients with the most informed, consistent, and reliable surgical guidance possible, all while addressing the significant challenges patients face when seeking second opinions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-[#4A6FA5] mb-6">The Real Cost of a Second Opinion</h2>
          
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Dr. Pradhan recognized that traditional second opinions come with hidden costs that go far beyond just the consultation fee. These challenges can be overwhelming for patients seeking the best care:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Approach - styled in muted colors */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Traditional Second Opinion Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>Consultation fees reaching into the five figures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>Need for expensive travel across state lines to see specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>Have to wait weeks, or months, to get an appointment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>Opinions rarely based on latest clinical data or medical evidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>Limited explanation for why the doctor is prescribing a given treatment</span>
                </li>{/* Add other traditional challenges with red X */}
              </ul>
            </div>

              {/* Surgery.AI Solution - styled in brand colors */}
              <div className="bg-[#4A6FA5] text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">The Surgery.AI Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Comprehensive analysis and expert opinion for under $1,500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>No travel required - everything is done remotely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Full medical record analysis with state-of-the-art AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Results delivered in 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Access to top surgical experts no matter where you live</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#4A6FA5] text-center">Our Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Accessibility</h3>
                <p>We're breaking down geographical barriers, ensuring that everyone has access to top-tier surgical expertise, regardless of their location.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Affordability</h3>
                <p>By leveraging technology, we're able to provide expert surgical guidance at a fraction of the cost of traditional second opinions.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#4A6FA5]">Accuracy</h3>
                <p>Our combination of AI-powered analysis and expert review ensures you receive the most up-to-date and accurate guidance for your unique situation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#4A6FA5]">Experience the Surgery.AI Difference</h2>
            <p className="text-xl mb-8">Get comprehensive, data-driven surgical guidance without the wait, travel, or excessive costs</p>
            <Button size="lg" className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C] text-lg md:text-xl py-3 px-6">
              Get Your Expert Opinion Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}