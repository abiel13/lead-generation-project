export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Campaigns</h1>

      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-slate-500 border-b">
            <tr>
              <th className="text-left p-4">Name</th>
              <th>Status</th>
              <th>Leads</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">SaaS Founders Outreach</td>
              <td className="text-blue-600">Running</td>
              <td>240</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}