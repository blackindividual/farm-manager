import React from 'react'
import DashboardNav from '@/components/DashboardNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Keep our existing sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Farm Manager</h1>
        </div>
        <DashboardNav />
      </aside>

      {/* New main content area */}
      <main className="flex-1">
        <div className="h-full">
          {children}
        </div>
      </main>
    </div>
  )
}
