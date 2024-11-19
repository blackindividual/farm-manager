'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { PlusCircle } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecordMortalityDialog } from '@/components/health/RecordMortalityDialog'
import { AddMedicineDialog } from '@/components/health/AddMedicineDialog'
import { AddVaccinationDialog } from '@/components/health/AddVaccinationDialog'
import type { MortalityRecord } from '@/components/health/RecordMortalityDialog'
import type { MedicineRecord } from '@/components/health/AddMedicineDialog'
import type { VaccinationRecord } from '@/components/health/AddVaccinationDialog'

export default function HealthRecords() {
  const [mortalityDialogOpen, setMortalityDialogOpen] = useState(false)
  const [medicineDialogOpen, setMedicineDialogOpen] = useState(false)
  const [vaccinationDialogOpen, setVaccinationDialogOpen] = useState(false)

  const handleRecordMortality = async (data: MortalityRecord) => {
    // TODO: Implement API call
    console.log('New mortality record:', data)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
  }

  const handleAddMedicine = async (data: MedicineRecord) => {
    // TODO: Implement API call
    console.log('New medicine:', data)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
  }

  const handleAddVaccination = async (data: VaccinationRecord) => {
    // TODO: Implement API call
    console.log('New vaccination schedule:', data)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Health Records</h1>
        <div className="flex gap-2">
          <Button 
            className="flex items-center gap-2"
            onClick={() => setMortalityDialogOpen(true)}
          >
            <PlusCircle className="h-5 w-5" />
            Record Mortality
          </Button>
          <Button 
            className="flex items-center gap-2"
            onClick={() => setMedicineDialogOpen(true)}
          >
            <PlusCircle className="h-5 w-5" />
            Add Medicine
          </Button>
          <Button 
            className="flex items-center gap-2"
            onClick={() => setVaccinationDialogOpen(true)}
          >
            <PlusCircle className="h-5 w-5" />
            Schedule Vaccination
          </Button>
        </div>
      </div>

      <Tabs defaultValue="mortality" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mortality">Mortality Records</TabsTrigger>
          <TabsTrigger value="vaccination">Vaccination Schedule</TabsTrigger>
          <TabsTrigger value="medicine">Medicine Inventory</TabsTrigger>
        </TabsList>

        {/* Mortality Records Tab */}
        <TabsContent value="mortality">
          <Card>
            <CardHeader>
              <CardTitle>Daily Mortality Records</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Cause</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>B-2024-001</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Natural</TableCell>
                    <TableCell>Regular monitoring required</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vaccination Schedule Tab */}
        <TabsContent value="vaccination">
          <Card>
            <CardHeader>
              <CardTitle>Vaccination Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaccine</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Newcastle</TableCell>
                    <TableCell>B-2024-001</TableCell>
                    <TableCell>2024-03-20</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </TableCell>
                    <TableCell>First dose</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Mark Complete</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Medicine Inventory Tab */}
        <TabsContent value="medicine">
          <Card>
            <CardHeader>
              <CardTitle>Medicine Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medicine</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Antibiotics</TableCell>
                    <TableCell>Preventive</TableCell>
                    <TableCell>500ml</TableCell>
                    <TableCell>2024-12-31</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Update</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <RecordMortalityDialog 
        open={mortalityDialogOpen}
        onOpenChange={setMortalityDialogOpen}
        onSubmit={handleRecordMortality}
      />
      
      <AddMedicineDialog 
        open={medicineDialogOpen}
        onOpenChange={setMedicineDialogOpen}
        onSubmit={handleAddMedicine}
      />

      <AddVaccinationDialog 
        open={vaccinationDialogOpen}
        onOpenChange={setVaccinationDialogOpen}
        onSubmit={handleAddVaccination}
      />
    </div>
  )
} 