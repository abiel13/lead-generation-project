


export default function Topbar() {

  return (
    <div className="h-16 bg-white/70 backdrop-blur border-b border-slate-100 flex items-center justify-between px-8">
      
      <div>
        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>
        <p className="font-medium text-slate-800">
          LeadFlow Dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600" />
      </div>
    </div>
  );
}