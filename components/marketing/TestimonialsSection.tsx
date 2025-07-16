@@ .. @@
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
-    <section className="w-full pt-20 md:pt-24 pb-20 md:pb-24 relative">
+    <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 relative">
-      <div className="max-w-4xl mx-auto px-4 md:px-8">
+      <div className="max-w-4xl mx-auto px-4 md:px-8">
         <div className="flex flex-col items-center">
-          <div className="flex flex-col items-center space-y-6">
+          <div className="flex flex-col items-center space-y-4 md:space-y-6">
             <p className="text-base uppercase tracking-wider font-helvetica font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TESTIMONIALS</p>
-            <h2 className="text-4xl md:text-6xl lg:text-7xl font-helvetica font-normal tracking-tight text-center text-white">
+            <h2 className="text-xl md:text-4xl lg:text-6xl xl:text-7xl font-helvetica font-normal tracking-tight text-center text-white px-2">
             Client Voices, Unfiltered
             </h2>
           </div>
           
-          <div className="relative mt-20 w-full">
+          <div className="relative mt-8 md:mt-20 w-full">
             <div 
               ref={containerRef} 
               className="overflow-hidden rounded-xl"
             >
               <div className="relative">
                 {/* Large quote icon background */}
-                <div className="absolute top-6 left-8 opacity-10">
+                <div className="absolute top-4 md:top-6 left-4 md:left-8 opacity-10">
-                  <Quote className="w-16 h-16 text-white" />
+                  <Quote className="w-8 h-8 md:w-16 md:h-16 text-white" />
                 </div>
                 
-                <div className="p-8 md:p-12 rounded-xl border border-white/20 transition-all duration-300">
+                <div className="p-6 md:p-12 rounded-xl border border-white/20 transition-all duration-300">
                   <div className="relative">
-                    <p className="text-xl md:text-2xl lg:text-3xl text-white font-helvetica italic mb-8 text-left leading-relaxed">
+                    <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white font-helvetica italic mb-6 md:mb-8 text-left leading-relaxed">
                       {testimonials[activeIndex].quote}
                     </p>
                     
                     <div className="flex flex-col items-start">
-                      <p className="font-helvetica font-normal text-lg text-left text-white">{testimonials[activeIndex].role}</p>
+                      <p className="font-helvetica font-normal text-sm md:text-lg text-left text-white">{testimonials[activeIndex].role}</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
-            <div className="flex justify-start mt-8 gap-4">
+            <div className="flex justify-start mt-6 md:mt-8 gap-3 md:gap-4">
               <Button 
                 variant="default" 
                 size="icon" 
-                className="rounded-full h-12 w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
+                className="rounded-full h-10 w-10 md:h-12 md:w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
                 onClick={handlePrev}
               >
-                <ChevronLeft className="h-6 w-6" />
+                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                 <span className="sr-only">Previous</span>
               </Button>
               <Button 
                 variant="default" 
                 size="icon" 
-                className="rounded-full h-12 w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
+                className="rounded-full h-10 w-10 md:h-12 md:w-12 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
                 onClick={handleNext}
               >
-                <ChevronRight className="h-6 w-6" />
+                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                 <span className="sr-only">Next</span>
               </Button>
             </div>
           </div>
         </div>
       </div>
     </section>
   )
 }