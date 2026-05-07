"use client";

import { useEffect, useState } from "react";
import LeadCard from "@/components/LeadCard";
import axios from "axios";

export default function LeadsPage() {
  const [query, setQuery] = useState("");
  const [leads, setLeads] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);

  const search = async () => {
    const res = await fetch(`/api/leads`);
    const data = await res.json();
    setLeads(data.leads);
  };

  const toggle = (id: string) => {
    console.log(id)
    setSelected((prev) =>
      prev.some((obj) => obj.id === id) ? prev.filter((obj) => obj.id !== id) : [...prev, leads[parseInt(id)-1]]
    );
    console.log(selected)
  };


 async function launchCampaign() {
   try {
     const res = await axios.post('/api/campaigns', { leads: selected });
     console.log("Campaign launched successfully:", res.data);
   } catch (error:any) {
     console.error("Error launching campaign:", error.message);
   }
 }


  useEffect(() => {
    // initial load
    search();
  }, []);

  return (
    <div className="space-y-8">

      {/* header */}
      <div>
        <h1 className="text-2xl font-semibold">Find Leads</h1>
        <p className="text-slate-500 text-sm">
          Search and build targeted outreach lists
        </p>
      </div>

      {/* search */}
      <div className="flex gap-3">
        <input
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search: SaaS founders, engineers..."
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={search}
          className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* action bar */}
      {selected.length > 0 && (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-sm text-blue-700">
            {selected.length} leads selected
          </p>

          <button onClick={launchCampaign} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            Launch Campaign
          </button>
        </div>
      )}

      {/* grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            selected={selected.some((obj) => obj.id === lead.id)}
            onSelect={() => toggle(lead.id)}
          />
        ))}
      </div>
    </div>
  );
}