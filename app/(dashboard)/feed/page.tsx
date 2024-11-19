'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AddFeedStockDialog } from '@/components/feed/AddFeedStockDialog'
import type { FeedStockData } from '@/components/feed/AddFeedStockDialog'

export default function FeedManagement() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleAddFeedStock = async (data: FeedStockData) => {
    // TODO: Implement API call to save feed stock
    console.log('New feed stock:', data)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Feed Management</h1>
        <Button 
          className="flex items-center gap-2"
          onClick={() => setDialogOpen(true)}
        >
          <PlusCircle className="h-5 w-5" />
          Add Feed Stock
        </Button>
      </div>

      {/* Feed Stock Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Feed Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,500 kg</div>
            <p className="text-xs text-muted-foreground">Last updated: 2 hours ago</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Daily Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150 kg</div>
            <p className="text-xs text-muted-foreground">Average over last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Feed Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦75/kg</div>
            <p className="text-xs text-muted-foreground">Current market price</p>
          </CardContent>
        </Card>
      </div>

      {/* Feed Stock Table */}
      <Card>
        <CardHeader>
          <CardTitle>Feed Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feed Type</TableHead>
                <TableHead>Quantity (kg)</TableHead>
                <TableHead>Purchase Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Starter Feed</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell>2024-03-01</TableCell>
                <TableCell>2024-06-01</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Finisher Feed</TableCell>
                <TableCell>1,500</TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>2024-06-15</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                    Running Low
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Feed Consumption Chart - We'll add this later */}
      <Card>
        <CardHeader>
          <CardTitle>Feed Consumption Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart will be implemented here
          </div>
        </CardContent>
      </Card>

      <AddFeedStockDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleAddFeedStock}
      />
    </div>
  )
} 