import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../../src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../src/components/ui/table"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-background">
      <h1 className="text-2xl font-bold tracking-tight">Broiler Farm Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Birds" 
          value="1,500"
          trend={{ value: 8, isUpward: true }}
        />
        <StatCard 
          title="Average Weight" 
          value="2.3 kg"
          trend={{ value: 5, isUpward: true }}
        />
        <StatCard 
          title="Feed Consumed" 
          value="3,450 kg"
          trend={{ value: 12, isUpward: true }}
        />
        <StatCard 
          title="Profit/Loss" 
          value="₦125,000"
          trend={{ value: 3, isUpward: false }}
        />
      </div>

      {/* Flock Details and Expenses */}
      <div className="grid gap-6 md:grid-cols-2">
        <FlockDetails />
        <ExpensesTable />
      </div>

      <PerformanceMetrics />
    </div>
  )
}

interface StatCardProps {
  title: string
  value?: string
  trend?: {
    value: number
    isUpward: boolean
  }
}

function StatCard({ title, value = "-", trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend ? (
          <p className={`text-xs ${trend.isUpward ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isUpward ? '↑' : '↓'} {trend.value}% from last month
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">No data available</p>
        )}
      </CardContent>
    </Card>
  )
}

function FlockDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flock Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">Breed: Broiler</p>
          <p className="text-sm">Duration: 45 days</p>
          <p className="text-sm">Date Entered: 01/03/2024</p>
          <p className="text-sm">Date Exited: -</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ExpensesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>01/03/2024</TableCell>
              <TableCell>Feed</TableCell>
              <TableCell className="text-right">₦45,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>03/03/2024</TableCell>
              <TableCell>Medication</TableCell>
              <TableCell className="text-right">₦12,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">
          <MetricItem label="Present Cost Price/Bird" value="₦2,500" />
          <MetricItem label="Price/KG" value="₦1,200" />
          <MetricItem label="Est. Sell Price" value="₦3,200" />
          <MetricItem label="Actual Sale" value="Pending" />
        </div>
      </CardContent>
    </Card>
  )
}

function MetricItem({ label, value = "-" }: { label: string; value?: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}
