"use client";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  { id: "9", title: "CRM Project", source: "/crm.png", about: "A project showcasing CRM functionalities.", tags: ["CRM", "WebApp"] },
  { id: "10", title: "Don Project", source: "/don.png", about: "A project named Don.", tags: ["WebApp", "Design"] },
  { id: "11", title: "Email AI Project", source: "/emailai.png", about: "An AI-powered email assistant.", tags: ["AI", "Email"] },
  { id: "12", title: "Horoscope Project", source: "/horoscope.PNG", about: "A daily horoscope application.", tags: ["WebApp", "API"] },
  { id: "13", title: "Finc Project", source: "/finc.png", about: "A financial technology project.", tags: ["FinTech", "WebApp"] },
  { id: "14", title: "Nurodeep Project", source: "/nurodeep.png", about: "A project related to neurotechnology.", tags: ["Science", "WebApp"] },
  { id: "15", title: "Outreach Project", source: "/outreach.png", about: "A tool for managing outreach campaigns.", tags: ["Marketing", "SaaS"] },
  { id: "16", title: "Phantom Project", source: "/Phantom.png", about: "A project with a stealthy name.", tags: ["WebApp"] },
  { id: "17", title: "Project Sync Project", source: "/projectsync.JPG", about: "A tool for synchronizing project data.", tags: ["Productivity", "WebApp"] },
  { id: "18", title: "VorkelAI Snap Project", source: "/VorkelAI Snap.png", about: "A snapshot of the VorkelAI project.", tags: ["AI", "WebApp"] },
  { id: "19", title: "Demage Project", source: "/demage.jpeg", about: "A damage assessment and management platform.", tags: ["Insurance", "WebApp"] },
  { id: "20", title: "Nexar Project", source: "/nexar.png", about: "An innovative product design solution.", tags: ["Product Design", "Innovation"] },
  { id: "21", title: "Blique Project", source: "/blique.jpeg", about: "A unique and stylish web application.", tags: ["WebApp", "Design"] },
];

export default function Hero() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start relative overflow-hidden px-4 pt-20 md:pt-32 pb-8 md:pb-12">
      {/* Subtle dark overlay for text readability - but not too dark */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/30 z-10"></div>
      {/* Main Content - Above overlay */}
      <div className="max-w-6xl mx-auto z-20 w-full mt-8 md:mt-16 relative">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-12 text-center motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
          <span className="inline-block mb-2 md:mb-4 px-1.5 md:px-4 py-0.5 md:py-1 rounded-full bg-black/20 backdrop-blur-sm text-[10px] md:text-xs font-normal font-helvetica text-white tracking-wide border border-white/20 uppercase">
            15+ Projects Delivered
          </span>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight font-sans leading-tight drop-shadow-lg px-2">
            We Build MVPs that launch<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Fast</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale</span> Faster
          </h1>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://cal.com/mvpstudio.in/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/10 bg-white text-black backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/90 active:scale-[0.98] inline-flex items-center justify-center"
            >
              <span className="text-center font-helvetica font-normal text-sm tracking-[-0.02em]">
                Book a Call
              </span>
            </a>
            <a
              href="/work"
              className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-black/60 active:scale-[0.98] inline-flex items-center justify-center"
            >
              <span className="text-center font-helvetica font-normal text-sm tracking-[-0.02em] text-white">
                View Work
              </span>
              <ArrowRight className="w-4 h-4 ml-2 text-white" />
            </a>
          </div>
        </div>
        {/* Projects Section */}
        <div className="mt-8 md:mt-16">
          {/* Desktop view (md and above) */}
          <div className="hidden md:block">
            {currentProject && <ProjectCard project={currentProject} />}
          </div>
          {/* Mobile view (below md) */}
          <div className="md:hidden">
            {currentProject && <ProjectCardMobile project={currentProject} />}
          </div>
        </div>
      </div>
    </div>
  );
}

const isVideoSource = (source: string): boolean => {
  return source.toLowerCase().endsWith('.mp4');
};

interface Project {
  id: string;
  title: string;
  source: string;
  about: string;
  tags: string[];
  url?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
        {isVideoSource(project.source) ? (
          <video
            src={project.source}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <Image
            src={project.source}
            alt={project.title}
            fill
            className="object-contain"
            priority
          />
        )}
      </div>
      {/* Hover Overlay with Link */}
      {project.url && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  );
}

function ProjectCardMobile({ project }: { project: Project }) {
  return (
    <div className="group relative">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
        {isVideoSource(project.source) ? (
          <video
            src={project.source}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.source}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      {/* Hover Overlay with Link */}
      {project.url && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  );
}

export const Twitter=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}