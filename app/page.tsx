import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExpensesTable } from './components/expenses-table'
import { FlockDetails } from './components/flock-details'
import { PerformanceMetrics } from './components/performance-metrics'

const StatsCard = ({ title, icon }: { title: string, icon: string }) => (
  <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <CardContent className="pt-6">
      <div className="flex justify-between items-center mb-4">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-2xl font-bold mb-2">-</div>
      <div className="flex items-center text-sm text-muted-foreground">
        <ArrowUpIcon className="w-4 h-4 mr-1" />
        <span>-%</span>
      </div>
    </CardContent>
  </Card>
)

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/50">
        <h1 className="text-4xl font-bold mb-6">Farm Manager</h1>
        <div className="max-w-2xl mb-8">
          <p className="text-xl text-muted-foreground">
            Efficiently manage your farm operations with our comprehensive management system
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/inventory">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="lg">View Documentation</Button>
          </Link>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="p-6 space-y-6 bg-background">
        <h2 className="text-2xl font-bold tracking-tight">Broiler Farm Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Active Batches" icon="🐥" />
          <StatsCard title="Total Birds" icon="🐔" />
          <StatsCard title="Average FCR" icon="📊" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <FlockDetails />
          </div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <ExpensesTable />
          </div>
        </div>

        <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <PerformanceMetrics />
        </div>

        {/* Recent Activity */}
        <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-2xl">•</span>
                <div>
                  <p className="text-sm font-medium">-</p>
                  <p className="text-xs text-muted-foreground">-</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-500 text-2xl">•</span>
                <div>
                  <p className="text-sm font-medium">-</p>
                  <p className="text-xs text-muted-foreground">-</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}