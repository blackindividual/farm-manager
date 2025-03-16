"use client"

import { useState } from "react"
import {
  BarChart,
  CalendarDays,
  ChevronDown,
  Egg,
  FileText,
  Home,
  LayoutGrid,
  Leaf,
  LineChart,
  PieChart,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  // Need to create a chart component or install recharts
  Line,
  LineChart as RechartsLineChart,
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip as ChartTooltip
} from "recharts"
// Import custom chart components from the correct location
import { ChartContainer, ChartTooltipContent } from "@/src/components/ui/chart"

export default function LayerDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

  // Sample data for charts
  const eggProductionData = [
    { day: "Mon", rate: 82 },
    { day: "Tue", rate: 83 },
    { day: "Wed", rate: 86 },
    { day: "Thu", rate: 85 },
    { day: "Fri", rate: 84 },
    { day: "Sat", rate: 87 },
    { day: "Sun", rate: 88 },
  ]

  const feedConversionData = [
    { day: "Mon", ratio: 1.8 },
    { day: "Tue", ratio: 1.7 },
    { day: "Wed", ratio: 1.75 },
    { day: "Thu", ratio: 1.72 },
    { day: "Fri", ratio: 1.69 },
    { day: "Sat", ratio: 1.71 },
    { day: "Sun", ratio: 1.68 },
  ]

  const mortalityData = [
    { day: "Mon", rate: 0.2 },
    { day: "Tue", rate: 0.1 },
    { day: "Wed", rate: 0.3 },
    { day: "Thu", rate: 0.2 },
    { day: "Fri", rate: 0.1 },
    { day: "Sat", rate: 0.2 },
    { day: "Sun", rate: 0.1 },
  ]

  const revenueData = [
    { day: "Mon", revenue: 580, cost: 320 },
    { day: "Tue", revenue: 590, cost: 310 },
    { day: "Wed", revenue: 610, cost: 330 },
    { day: "Thu", revenue: 600, cost: 320 },
    { day: "Fri", revenue: 620, cost: 325 },
    { day: "Sat", revenue: 630, cost: 315 },
    { day: "Sun", revenue: 640, cost: 330 },
  ]

  const eggQualityData = [
    { name: "Grade A", value: 65 },
    { name: "Grade B", value: 25 },
    { name: "Grade C", value: 10 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

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
                  <Users className="h-4 w-4" />
                  Broiler Farm
                </Link>
              </Button>
              <Button variant="secondary" className="flex items-center justify-start gap-3 px-3" asChild>
                <Link href="/(dashboard)/layer-dashboard">
                  <Egg className="h-4 w-4" />
                  Layer Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-3 px-3" asChild>
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
          <h1 className="font-semibold">Layer Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>Today</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-64 bg-background pl-8 h-8" />
              </div>
            </form>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Tabs defaultValue={selectedPeriod} className="w-full" onValueChange={setSelectedPeriod}>
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="7d">7 days</TabsTrigger>
                  <TabsTrigger value="30d">30 days</TabsTrigger>
                  <TabsTrigger value="90d">90 days</TabsTrigger>
                </TabsList>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select flock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Flocks</SelectItem>
                    <SelectItem value="flock1">Flock 1</SelectItem>
                    <SelectItem value="flock2">Flock 2</SelectItem>
                    <SelectItem value="flock3">Flock 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Tabs>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Daily Egg Production Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-0.5">
                  <CardTitle className="text-base">Daily Egg Production Rate</CardTitle>
                  <CardDescription>Percentage of birds laying eggs</CardDescription>
                </div>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">88%</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +2.5%
                  </div>
                </div>
                <div className="h-[120px] mt-4">
                  {/* Replace ChartContainer with direct recharts usage */}
                  <RechartsLineChart 
                    width={300} 
                    height={120} 
                    data={eggProductionData} 
                    margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <YAxis domain={[75, 90]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <ChartTooltip />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#8884d8" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                    />
                  </RechartsLineChart>
                </div>
                
                {/* Similar changes needed for other chart components */}
              </CardContent>
            </Card>

            {/* Feed Conversion Ratio */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-0.5">
                  <CardTitle className="text-base">Feed Conversion Ratio</CardTitle>
                  <CardDescription>Kg of feed per dozen eggs</CardDescription>
                </div>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">1.68</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -0.03
                  </div>
                </div>
                <div className="h-[120px] mt-4">
                  <RechartsLineChart 
                    width={300} 
                    height={120} 
                    data={feedConversionData} 
                    margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <YAxis domain={[1.6, 1.9]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <ChartTooltip />
                    <Line
                      type="monotone"
                      dataKey="ratio"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </RechartsLineChart>
                </div>
              </CardContent>
            </Card>

            {/* Mortality Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-0.5">
                  <CardTitle className="text-base">Mortality Rate</CardTitle>
                  <CardDescription>Percentage of flock losses</CardDescription>
                </div>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">0.1%</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -0.1%
                  </div>
                </div>
                <div className="h-[120px] mt-4">
                  <ChartContainer
                    config={{
                      rate: {
                        label: "Mortality Rate",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <RechartsBarChart data={mortalityData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                      <YAxis domain={[0, 0.5]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="rate" fill="var(--color-rate)" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Revenue vs. Feed Cost */}
            <Card className="md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-0.5">
                  <CardTitle className="text-base">Revenue vs. Feed Cost</CardTitle>
                  <CardDescription>Daily earnings against main expense</CardDescription>
                </div>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">$640</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-semibold">$330</div>
                    <div className="text-sm text-muted-foreground">Feed Cost</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-semibold text-green-500">$310</div>
                    <div className="text-sm text-muted-foreground">Margin</div>
                  </div>
                </div>
                <div className="h-[200px] mt-4">
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                      cost: {
                        label: "Feed Cost",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                  >
                    <RechartsBarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="revenue" fill="var(--color-revenue)" name="Revenue" />
                      <Bar dataKey="cost" fill="var(--color-cost)" name="Feed Cost" />
                    </RechartsBarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Egg Quality Distribution */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-0.5">
                  <CardTitle className="text-base">Egg Quality Distribution</CardTitle>
                  <CardDescription>Breakdown by grade/size</CardDescription>
                </div>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <RechartsPieChart width={200} height={200}>
                    <Pie
                      data={eggQualityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {eggQualityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </RechartsPieChart>
                </div>
                <div className="mt-2 flex justify-center gap-4">
                  {eggQualityData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-xs">
                        {entry.name}: {entry.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

