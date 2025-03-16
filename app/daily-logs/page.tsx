"use client"

import React from 'react'
import LogsInput from '@/components/logs/LogsInput'

export default function DailyLogsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Daily Farm Logs</h1>
      <LogsInput />
    </div>
  )
}