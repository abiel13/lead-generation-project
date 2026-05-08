'use client'

import axios from 'axios'
import React from 'react'
import {
  Search,
  Mail,
  Building2,
  Users,
  BriefcaseBusiness,
  Sparkles,
} from 'lucide-react'

interface Campaign {
  id: number
  created_at: string
  name: string
  email: string
  company: string
  role: string
  user_email: string
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([])
  const [loading, setLoading] = React.useState(true)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axios.get('/api/campaigns')

        setCampaigns(response.data.campaigns || [])
      } catch (error) {
        console.error('Error fetching campaigns:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

  const filteredCampaigns = campaigns.filter((campaign) =>
    `${campaign.name} ${campaign.company} ${campaign.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f5f9ff] p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Outreach Dashboard
            </p>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            Campaign Leads
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and monitor all your outreach leads in one place.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[350px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

          <input
            type="text"
            placeholder="Search campaigns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 rounded-2xl border border-blue-100 bg-white pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Total Leads</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">
                {campaigns.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Users className="text-blue-600 w-7 h-7" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Companies</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">
                {[...new Set(campaigns.map((c) => c.company))].length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Building2 className="text-blue-600 w-7 h-7" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Roles</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">
                {[...new Set(campaigns.map((c) => c.role))].length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <BriefcaseBusiness className="text-blue-600 w-7 h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[32px] border border-blue-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Active Leads
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredCampaigns.length} leads
            </p>
          </div>

         
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-blue-50/70 border-b border-slate-100">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Lead
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Company
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Role
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Email
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Created
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-16 text-slate-500"
                  >
                    Loading campaigns...
                  </td>
                </tr>
              ) : filteredCampaigns.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-16 text-slate-500"
                  >
                    No campaigns found.
                  </td>
                </tr>
              ) : (
                filteredCampaigns.map((campaign) => (
                  <tr
                    key={campaign.id}
                    className="border-b border-slate-100 hover:bg-blue-50/40 transition-all"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-semibold">
                          {campaign.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            {campaign.name}
                          </p>

                          <p className="text-sm text-slate-500">
                            Lead #{campaign.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        {campaign.company}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {campaign.role}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Mail className="w-4 h-4 text-slate-400" />
                        {campaign.email}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-500">
                      {new Date(campaign.created_at).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}