"use client"

import { Lightbulb, Users, Zap, Rocket } from 'lucide-react'
import { cn } from "@/lib/utils"

export function WhyUsSection() {
  const features = [
    {
      title: "Built for Speed & Scale",
      description: "Your MVP is developed using modern, scalable tech—ready to grow with your users and business.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "One Project. One Focus.",
      description: "We don't juggle clients. Your MVP gets our full attention, every step of the way.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Clarity-First MVP Design",
      description: "We turn complex ideas into simple, engaging interfaces that users actually enjoy using.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Built for Real-World Results",
      description: "We don't just build MVPs — we build traction. Funding, users, and growth start with the right product foundation.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 relative mt-4 md:mt-8" id="why-us">
      <div className="max-w-4xl mx-auto z-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-2 text-center w-full">
            <p className="text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-helvetica font-normal">WHY MVP STUDIO</p>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-helvetica font-normal tracking-tight text-center text-white px-2">
            High-Impact MVPs for Founders Who Move Fast
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center md:border-r py-8 relative group/feature border-white/20",
        (index === 0 || index === 2) && "md:border-l border-white/20",
        index < 2 && "md:border-b border-white/20"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-6 relative z-10 px-8 text-white/80 flex justify-center">
        <div className="scale-125">
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-3 relative z-10 px-8 flex flex-col items-center text-center">
        <div className="absolute left-0 inset-y-0 h-5 group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-white/30 group-hover/feature:bg-blue-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/80 max-w-xs relative z-10 px-8 leading-relaxed text-center">
        {description}
      </p>
    </div>
  )
} 