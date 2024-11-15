import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
            Overview
          </a>
          <a href="/dashboard/batches" className="block py-2 px-4 rounded hover:bg-gray-700">
            Batches
          </a>
          <a href="/dashboard/reports" className="block py-2 px-4 rounded hover:bg-gray-700">
            Reports
          </a>
          {/* Add more navigation items */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
