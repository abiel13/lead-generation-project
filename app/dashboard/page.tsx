export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-semibold">
        Overview
      </h1>

      {/* stats */}
      <div className="grid grid-cols-3 gap-6">
        <Stat title="Emails Sent" value="12,430" />
        <Stat title="Active Campaigns" value="18" />
        <Stat title="Reply Rate" value="24.3%" />
      </div>

      {/* activity */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6">
        <h2 className="font-medium mb-4">Recent Activity</h2>
        <div className="space-y-3 text-sm text-slate-600">
          <p>📨 Campaign sent to SaaS founders list</p>
          <p>🤖 AI generated 120 personalized emails</p>
          <p>📈 Reply rate increased by 4.2%</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-900 mt-1">
        {value}
      </p>
    </div>
  );
}