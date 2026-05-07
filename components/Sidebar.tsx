import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-72 bg-white border-r border-slate-100 p-6 flex flex-col">
      
      {/* Logo */}
      <div className="mb-10">
        <div className="text-xl font-bold text-blue-600">
          ColdAI
        </div>
        <p className="text-xs text-slate-400">
          AI Outreach Platform
        </p>
      </div>

      {/* Nav */}
      <nav className="space-y-2 text-sm">
        <NavItem href="/" label="Overview" />
        <NavItem href="/leads" label="Leads" />
        <NavItem href="/campaigns" label="Campaigns" />
        <NavItem href="/settings" label="Settings" />
      </nav>

      {/* bottom card */}
      <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <p className="text-sm font-medium">Upgrade to Pro</p>
        <p className="text-xs opacity-80">
          Unlock advanced AI targeting
        </p>
      </div>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      {label}
    </Link>
  );
} 