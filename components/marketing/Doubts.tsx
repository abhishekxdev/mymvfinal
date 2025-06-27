"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqs from "@/data/faq"

export default function Doubts() {
  return (
    <section className="w-full pt-20 md:pt-24 pb-24 md:pb-32 relative" id="faq">
       <div className="absolute z-[-10] top-1/2 right-0 w-[50vw] h-[50vh] -translate-y-1/2 bg-cyan-500/30 blur-[200px] rounded-full"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-base uppercase tracking-wider font-normal text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">FAQs</span>
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-center text-white">
            You Ask, We Answer
            </h2>
          </div>
          
          <div className="w-full flex justify-center mt-20">
            <div className="w-full max-w-2xl">
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg px-8 py-4 bg-black/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm text-center"
                  >
                    <AccordionTrigger className="text-center font-normal hover:text-white hover:no-underline text-white text-lg md:text-xl w-full flex justify-center">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pt-4 pb-6 text-center text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}