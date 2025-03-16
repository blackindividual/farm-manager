"use client"

import { useState } from "react"
import { Flame, Egg, SproutIcon as Seedling } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("broiler")

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold tracking-tight text-[#3c3c28]">FARM DASHBOARD</CardTitle>
            <CardDescription>Manage your farm operations from one place</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-6">
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2">
                <Link
                  href="/(dashboard)/broiler-dashboard"
                  className="flex items-center gap-2 text-left justify-start p-3 bg-white hover:bg-gray-50 rounded-md border transition-colors"
                >
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">BROILER DASHBOARD</span>
                </Link>
                <Link
                  href="/(dashboard)/layer-dashboard"
                  className="flex items-center gap-2 text-left justify-start p-3 bg-white hover:bg-gray-50 rounded-md border transition-colors"
                >
                  <Egg className="h-4 w-4 text-amber-200" />
                  <span className="font-medium">LAYER DASHBOARD</span>
                </Link>
                <Link
                  href="/(dashboard)/vegetable-patch"
                  className="flex items-center gap-2 text-left justify-start p-3 bg-white hover:bg-gray-50 rounded-md border transition-colors"
                >
                  <Seedling className="h-4 w-4 text-green-500" />
                  <span className="font-medium">VEGETABLE PATCH</span>
                </Link>
              </div>

              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                        <div>
                          <p className="font-medium">Broiler House 2 Feed Updated</p>
                          <p className="text-sm text-muted-foreground">Today, 9:45 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                        <div>
                          <p className="font-medium">Egg Collection Completed</p>
                          <p className="text-sm text-muted-foreground">Today, 8:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
                        <div>
                          <p className="font-medium">Vegetable Patch Irrigation Scheduled</p>
                          <p className="text-sm text-muted-foreground">Yesterday, 4:15 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 relative">
          <Input
            placeholder="Write, press 'space' for AI, '/' for commands..."
            className="w-full p-3 border rounded-md bg-white"
          />
        </div>
      </main>
    </div>
  )
}