import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  showViewWork?: boolean;
}

export function Footer({ showViewWork = true }: FooterProps) {
  return (
    <footer className="w-full py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter text-white">
            Your Idea, Our Expertise<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lets Make It Happen.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="https://cal.com/mvpstudio.in/30min" passHref>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-neutral-200 rounded-full text-lg font-normal px-8 py-4 h-auto"
              >
                Book an Intro Call
              </Button>
            </Link>
            {showViewWork && (
              <Link href="/work" passHref>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="rounded-full text-lg font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] px-8 py-4 h-auto"
                >
                  View Work <Play className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-24 text-base text-neutral-400">
          <p>&copy; {new Date().getFullYear()} MVP Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}