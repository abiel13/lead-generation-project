'use client'

import { LogOut, Bell, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import React from 'react'

export default function Topbar() {
  const router = useRouter()
  const supabase = createClient()

  const [loading, setLoading] = React.useState(false)

  const handleSignOut = async () => {
    try {
      setLoading(true)

      const { error } = await supabase.auth.signOut()

      if (error) {
        toast.error(error.message)
        return
      }

      toast.success('Signed out successfully')

      router.push('/')
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-20 py-3 bg-white/80 backdrop-blur-xl border-b border-blue-100 flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Sparkles className="text-white w-6 h-6" />
        </div>

        <div>
          <p className="text-sm text-slate-500 font-medium">
            Welcome back 👋
          </p>

          <h1 className="font-bold text-xl text-slate-900 tracking-tight">
            LeadFlow Dashboard
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button className="relative w-11 h-11 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all flex items-center justify-center">
          <Bell className="w-5 h-5 text-slate-600" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500" />
        </button>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="h-11 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <LogOut className="w-4 h-4" />

          {loading ? 'Signing out...' : 'Sign Out'}
        </button>
      </div>
    </div>
  )
}