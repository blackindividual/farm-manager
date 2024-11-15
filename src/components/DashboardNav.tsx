import React from 'react'
import Link from 'next/link'

const DashboardNav = () => {
  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: '📊' },
    { label: 'Batches', href: '/dashboard/batches', icon: '🐥' },
    { label: 'Feed Management', href: '/dashboard/feed', icon: '🌾' },
    { label: 'Health Records', href: '/dashboard/health', icon: '💉' },
    { label: 'Reports', href: '/dashboard/reports', icon: '📈' },
    { label: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  ]

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md transition-colors"
        >
          <span className="mr-3">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default DashboardNav 