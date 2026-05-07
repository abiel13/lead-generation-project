export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">

      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">

        <Input label="API Key" />
        <Input label="Email Address" />
        <Input label="Webhook URL" />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm text-slate-500">{label}</label>
      <input className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
  );
}