import React from 'react'
import DashboardNav from '../../src/components/DashboardNav'

// Replace the existing DashboardLayout function with the new one
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {children}
      </div>
    </div>
  )
}
