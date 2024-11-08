'use client'
import './globals.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
        </div>

        <footer className="bg-[#4A6FA5] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Surgery.AI</h3>
                <p>Expert surgical guidance powered by AI and leading medical professionals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-[#F0F4F8]">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#F0F4F8]">About</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-[#F0F4F8]">How It Works</Link></li>
                  <li><Link href="/get-started" className="hover:text-[#F0F4F8]">Get Expert Guidance</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Email: info@surgery.ai</p>
                <p>Phone: (512) 415-0300</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 Surgery.AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
