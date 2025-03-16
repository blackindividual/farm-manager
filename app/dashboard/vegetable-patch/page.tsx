'use client'

import {
  FileText,
  Home,
  LayoutGrid,
  Leaf,
  Egg,
  Users,
  SproutIcon as Seedling,
  Droplets,
  Sun,
  Flame
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function VegetablePatchDashboard() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-6 font-semibold">Farm Manager</div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Button variant="ghost" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/(dashboard)/broiler-dashboard">
                  <Flame className="h-4 w-4" />
                  Broiler Farm
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/(dashboard)/layer-dashboard">
                  <Egg className="h-4 w-4" />
                  Layer Dashboard
                </Link>
              </Button>
              <Button variant="secondary" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/(dashboard)/vegetable-patch">
                  <Leaf className="h-4 w-4" />
                  Vegetable Patch
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/daily-logs">
                  <FileText className="h-4 w-4" />
                  Daily Logs
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <LayoutGrid className="h-5 w-5" />
          <h1 className="font-semibold">Vegetable Patch Dashboard</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex justify-between items-center"></div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Vegetable Patch Management</h1>
        <Button className="flex items-center gap-2">
          Add New Crop
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
            <Seedling className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Different varieties</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Irrigation</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h 30m</div>
            <p className="text-xs text-muted-foreground">Until next watering</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weather</CardTitle>
            <Sun className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28°C</div>
            <p className="text-xs text-muted-foreground">Sunny, ideal for growth</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Crops</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop Name</TableHead>
                <TableHead>Planting Date</TableHead>
                <TableHead>Days to Harvest</TableHead>
                <TableHead>Plot Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tomatoes</TableCell>
                <TableCell>2024-02-15</TableCell>
                <TableCell>45</TableCell>
                <TableCell>Plot A1</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    Growing Well
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lettuce</TableCell>
                <TableCell>2024-03-01</TableCell>
                <TableCell>30</TableCell>
                <TableCell>Plot B2</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                    Needs Attention
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Irrigation Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Irrigation schedule chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Harvest Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Harvest forecast chart will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
        </main>
      </div>
    </div>
  )
}