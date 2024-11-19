'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { NewBatchDialog } from '@/components/batches/NewBatchDialog'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import toast from 'react-hot-toast'

export default function BatchManagement() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleNewBatch = async (data: any) => {
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      toast.success('New batch created successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#FFFFFF',
        },
      })
      
      // Close the dialog
      setDialogOpen(false)
      
    } catch (error) {
      toast.error('Failed to create batch. Please try again.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#FFFFFF',
        },
      })
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Batch Management</h1>
        <Button 
          className="flex items-center gap-2"
          onClick={() => setDialogOpen(true)}
        >
          <PlusCircle className="h-5 w-5" />
          New Batch
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Active Batches */}
        <BatchCard
          batchNumber="B-2024-001"
          startDate="2024-03-01"
          birdCount={1000}
          age={21}
          status="active"
        />
        <BatchCard
          batchNumber="B-2024-002"
          startDate="2024-03-15"
          birdCount={1500}
          age={7}
          status="active"
        />
        
        {/* Completed Batch Example */}
        <BatchCard
          batchNumber="B-2024-000"
          startDate="2024-01-15"
          endDate="2024-02-28"
          birdCount={1200}
          status="completed"
          performance={{
            mortality: 3.5,
            fcr: 1.75,
            averageWeight: 2.3
          }}
        />
      </div>

      <NewBatchDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleNewBatch}
      />
    </div>
  )
}

interface BatchCardProps {
  batchNumber: string
  startDate: string
  endDate?: string
  birdCount: number
  age?: number
  status: 'active' | 'completed'
  performance?: {
    mortality: number
    fcr: number
    averageWeight: number
  }
}

function BatchCard({
  batchNumber,
  startDate,
  endDate,
  birdCount,
  age,
  status,
  performance
}: BatchCardProps) {
  return (
    <Card className={`hover:shadow-md transition-shadow cursor-pointer ${
      status === 'completed' ? 'bg-gray-50' : ''
    }`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {batchNumber}
          <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
            status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {status}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Start Date</p>
            <p className="text-sm font-medium">{new Date(startDate).toLocaleDateString()}</p>
          </div>
          
          {status === 'active' ? (
            <>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Current Age</p>
                <p className="text-sm font-medium">{age} days</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Birds</p>
                <p className="text-sm font-medium">{birdCount.toLocaleString()}</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="text-sm font-medium">{endDate && new Date(endDate).toLocaleDateString()}</p>
              </div>
              {performance && (
                <div className="pt-2 space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">Mortality</p>
                      <p className="font-medium">{performance.mortality}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">FCR</p>
                      <p className="font-medium">{performance.fcr}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Weight</p>
                      <p className="font-medium">{performance.averageWeight} kg</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 