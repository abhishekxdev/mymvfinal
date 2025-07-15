import { Navbar } from "@/components/marketing/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        {children}
    </div>
  );
}
