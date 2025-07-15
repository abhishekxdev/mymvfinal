"use client"

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    role: 'Vorkel AI',
    quote: 'Working with this team was a game-changer for our startup. The designs not only looked incredible but directly contributed to our conversion rates increasing by 43%. Worth every penny.'
  },
  {
    id: 2,
    role: 'XAuto',
    quote: 'We had nothing but an idea. In just a few weeks, we had a fully functional MVP that looked like a real product. Their work gave us the confidence to start pitching and testing immediately.'
  },
  {
    id: 3,
    role: 'Gamify',
    quote: 'They turned our rough notes and scattered ideas into a usable MVP we could actually demo. It was the first time we saw our product come to life — and it exceeded expectations.'
  },
  {
    id: 4,
    role: 'Phantom',
    quote: 'Working with them felt like adding a full-stack product team to our startup. Fast communication, thoughtful feedback, and real ownership of the product vision.'
  },
  {
    id: 5,
    role: 'HubSpot CRM',
    quote: 'Integrating HubSpot CRM into our workflow changed how we operate. The visibility into our sales pipeline and the automation tools helped us close deals 30% faster. It’s like having a growth engine on autopilot.'
  },
  {
    id: 6,
    role: 'InvoiceAI',
    quote: 'Before InvoiceAI, invoicing was a mess. Now it’s fully automated and error-free. We reclaimed hours every week and got paid faster — it’s the backend we didn’t know we needed.'
  },
  {
    id: 7,
    role: 'ColdReach AI',
    quote: 'ColdReach AI helped us scale our outreach like never before. Smart targeting and AI-written emails led to an 8x jump in replies. It’s like adding a growth hacker to your team overnight.'
  },
  {
    id: 8,
    role: 'ProjectSync',
    quote: 'ProjectSync brought clarity to our chaos. With real-time updates and seamless team collaboration, we cut down on meetings and actually started shipping on time. Total game-changer for remote teams.'
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }
  
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length)
  }
  
  return (
    <section className="w-full pt-20 md:pt-24 pb-20 md:pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-base uppercase tracking-wider font-helvetica font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-helvetica font-normal tracking-tight text-center text-white">
            Client Voices, Unfiltered
            </h2>
          </div>
          
          <div className="relative mt-20 w-full">
            <div 
              ref={containerRef} 
              className="overflow-hidden rounded-xl"
            >
              <div className="relative">
                {/* Large quote icon background */}
                <div className="absolute top-6 left-8 opacity-10">
                  <Quote className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-8 md:p-12 rounded-xl border border-white/20 transition-all duration-300">
                  <div className="relative">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white font-helvetica italic mb-8 text-left leading-relaxed">
                      {testimonials[activeIndex].quote}
                    </p>
                    
                    <div className="flex flex-col items-start">
                      <p className="font-helvetica font-normal text-lg text-left text-white">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start mt-8 gap-4">
              <Button 
                variant="default" 
                size="icon" 
                className="rounded-full h-12 w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                variant="default" 
                size="icon" 
                className="rounded-full h-12 w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
