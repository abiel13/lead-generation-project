import  "./globals.css"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata  ={
    title: "LeadFlow AI",
    description: "AI powered cold email outreach platform for SaaS founders and engineers.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn("font-sans", inter.variable)}>
    <body>
    <div className=" w-screen overflow-x-hidden flex ">
        <main className="flex-1">{children}</main>
        <Toaster />
    </div>
    </body>
    </html>
  );
}