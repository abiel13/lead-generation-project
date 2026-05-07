import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import  "../globals.css"


export const metadata  ={
    title: "Dashboard - AI Cold Email",
    description: "AI powered cold email outreach platform for SaaS founders and engineers.",

}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
    <body>
    <div className="h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
    </body>
    </html>
  );
}