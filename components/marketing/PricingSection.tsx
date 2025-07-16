@@ .. @@
export function PricingSection() {
  return (
-    <section id="pricing" className="pt-20 sm:pt-24 pb-16 sm:pb-20">
+    <section id="pricing" className="pt-12 sm:pt-24 pb-12 sm:pb-20">
-      <div className="max-w-4xl mx-auto z-10 px-4 md:px-8">
+      <div className="max-w-4xl mx-auto z-10 px-4 md:px-8">
         <div className="text-center">
           <h2 className="text-lg font-helvetica font-normal leading-7 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
             Pricing
           </h2>
           
         </div>
-        <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-helvetica font-normal tracking-tight text-center text-white">
+        <h2 className="mt-4 md:mt-6 text-xl md:text-5xl lg:text-6xl font-helvetica font-normal tracking-tight text-center text-white px-2">
           Simple Pricing. Maximum Value.
         </h2>
-        <div className="isolate mt-16 grid max-w-md grid-cols-1 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
+        <div className="isolate mt-8 md:mt-16 grid max-w-md grid-cols-1 gap-y-8 md:gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16 mx-auto">
           {plans.map((plan) => (
             <div
               key={plan.name}
               className={cn(
-                "relative flex flex-col justify-between rounded-3xl p-10 ring-1 ring-white/20 xl:p-12"
+                "relative flex flex-col justify-between rounded-3xl p-6 md:p-10 ring-1 ring-white/20 xl:p-12"
               )}
             >
               {plan.highlighted && (
-                <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-2 text-base font-semibold leading-6 text-white">
+                <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 px-4 md:px-6 py-1 md:py-2 text-sm md:text-base font-semibold leading-6 text-white">
                   Most popular
                 </div>
               )}
               <div>
-                <h3 className="text-xl font-semibold leading-8 text-white">
+                <h3 className="text-lg md:text-xl font-semibold leading-8 text-white">
                   {plan.name}
                 </h3>
-                <p className="mt-6 text-base leading-6 text-white/80">
+                <p className="mt-4 md:mt-6 text-sm md:text-base leading-6 text-white/80">
                   {plan.description}
                 </p>
-                <p className="mt-8 flex items-baseline gap-x-1">
+                <p className="mt-6 md:mt-8 flex items-baseline gap-x-1">
-                  <span className="text-5xl font-bold tracking-tight text-white">
+                  <span className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                     {plan.price}
                   </span>
-                  <span className="text-base font-semibold leading-6 text-white/80">
+                  <span className="text-sm md:text-base font-semibold leading-6 text-white/80">
                     /project
                   </span>
                 </p>
                 <ul
                   role="list"
-                  className="mt-10 space-y-4 text-base leading-6 text-white/80"
+                  className="mt-6 md:mt-10 space-y-3 md:space-y-4 text-sm md:text-base leading-6 text-white/80"
                 >
                   {plan.features.map((feature) => (
                     <li key={feature} className="flex gap-x-3">
                       <Check
-                        className="h-6 w-6 flex-none text-blue-400"
+                        className="h-5 w-5 md:h-6 md:w-6 flex-none text-blue-400 mt-0.5"
                         aria-hidden="true"
                       />
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>
               <a
                 href={plan.href}
                 target="_blank"
                 rel="noopener noreferrer"
-                className="mt-10 block rounded-full px-6 py-3 text-center text-base font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]"
+                className="mt-6 md:mt-10 block rounded-full px-6 py-3 text-center text-sm md:text-base font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]"
               >
                 {plan.cta}
               </a>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }