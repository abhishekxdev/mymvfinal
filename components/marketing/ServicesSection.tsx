"use client"

import {
  ChevronRight,
  Globe,
  Smartphone,
  DraftingCompass,
  Palette,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function ServicesSection() {
  const router = useRouter()

  const services = [
    {
      title: "Websites",
      category: "Website",
      icon: <Globe className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Mobile Apps",
      category: "Mobile App",
      icon: <Smartphone className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Product Design",
      category: "Product Design",
      icon: <DraftingCompass className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Logo/Branding",
      category: "Branding",
      icon: <Palette className="w-7 h-7 text-neutral-400" />,
    },
  ]

  const handleServiceClick = (category: string) => {
    router.push(`/work?category=${encodeURIComponent(category)}`)
  }

  return (
    <section className="w-full py-16 md:py-20 relative" id="services">
      <div className="max-w-4xl mx-auto z-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 mb-16">
          <p className="text-base uppercase tracking-wider font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            SERVICES
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-normal tracking-tight text-center text-white">
          We Don't Just Build - We Convert
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              onClick={() => handleServiceClick(service.category)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-black hover:bg-neutral-900 transition-colors duration-300 rounded-lg p-8 flex flex-col items-center justify-between h-52 border border-neutral-800 text-center cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="scale-125 mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-white font-medium text-xl mt-6 text-center">{title}</h3>
      </div>
      <div className="flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-300 text-base">
        <span>View Work</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </div>
    </button>
  )
}