"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 mt-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-black/80 backdrop-blur-md border border-neutral-800 rounded-full px-6 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/logomvp.png"
                alt="MVP Studio Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-normal text-lg text-white">MVP Studio</span>
          </Link>
          
          {/* Navigation - Desktop and Mobile */}
          <div className="flex items-center space-x-3">
            {pathname === '/work' && (
              <Link
                href="/#pricing"
                className="px-4 py-2.5 md:px-5 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
              >
                <span className="text-center font-normal text-sm md:text-base tracking-[-0.02em] text-white">
                  Plans
                </span>
              </Link>
            )}
            
            {pathname !== '/work' && (
              <Link
                href="/work"
                className="px-4 py-2.5 md:px-5 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
              >
                <span className="text-center font-normal text-sm md:text-base tracking-[-0.02em] text-white">
                  View Work
                </span>
              </Link>
            )}
            
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 md:px-5 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
            >
              <span className="text-center font-normal text-sm md:text-base tracking-[-0.02em] text-white">
                Let's Talk
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}