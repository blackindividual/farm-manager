"use client"

import { Flame, Egg, SproutIcon as Seedling } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <main className="flex-1 container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Farm Manager</h1>
          <p className="text-gray-600">Manage your farm operations efficiently</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Ensure paths match your folder structure */}
          <Link href="/dashboard/broiler-dashboard">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Flame className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle>Broiler Management</CardTitle>
                <CardDescription>Track broiler growth, feed consumption, and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monitor flock health</li>
                  <li>• Track feed efficiency</li>
                  <li>• Analyze growth rates</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Ensure paths match your folder structure */}
          <Link href="/dashboard/layer-dashboard">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Egg className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle>Layer Management</CardTitle>
                <CardDescription>Monitor egg production and layer performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Track egg production</li>
                  <li>• Monitor feed intake</li>
                  <li>• Manage layer health</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Ensure paths match your folder structure */}
          <Link href="/dashboard/vegetable-patch">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Seedling className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle>Vegetable Patch</CardTitle>
                <CardDescription>Manage your vegetable cultivation and harvests</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Plan crop rotations</li>
                  <li>• Track harvests</li>
                  <li>• Monitor growth</li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}