import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Surgery.AI',
  description: 'Expert Surgical Guidance in 24 Hours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-[#4A6FA5]">Surgery.AI</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-[#4A6FA5] hover:text-[#9BA9B9]">Home</Link>
              <Link href="/about" className="text-[#4A6FA5] hover:text-[#9BA9B9]">About</Link>
              <Link href="/how-it-works" className="text-[#4A6FA5] hover:text-[#9BA9B9]">How It Works</Link>
            </nav>
              <Link href="/get-started">
                <Button className="bg-[#4A6FA5] text-white hover:bg-[#3A5A8C]">Get Started</Button>
              </Link>
            </div>
          </header>
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
