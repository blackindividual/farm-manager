import React from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  icon?: string
  trend?: {
    value: number
    isUpward: boolean
  }
}

const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
        </div>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      {trend && (
        <div className="mt-4">
          <span className={`text-sm ${trend.isUpward ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isUpward ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last month</span>
        </div>
      )}
    </div>
  )
}

export default StatsCard 