'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface AddVaccinationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: VaccinationRecord) => Promise<void>
}

export interface VaccinationRecord {
  vaccine: string
  batchId: string
  dueDate: string
  method: string
  dosage: string
  notes: string
}

export function AddVaccinationDialog({ open, onOpenChange, onSubmit }: AddVaccinationDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<VaccinationRecord>({
    vaccine: '',
    batchId: '',
    dueDate: '',
    method: '',
    dosage: '',
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      toast.success('Vaccination schedule added successfully')
      onOpenChange(false)
      setFormData({
        vaccine: '',
        batchId: '',
        dueDate: '',
        method: '',
        dosage: '',
        notes: ''
      })
    } catch (error) {
      toast.error('Failed to add vaccination schedule')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Vaccination</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="vaccine" className="text-right text-sm">Vaccine</label>
              <Select
                value={formData.vaccine}
                onValueChange={(value) => setFormData({ ...formData, vaccine: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select vaccine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newcastle">Newcastle</SelectItem>
                  <SelectItem value="gumboro">Gumboro</SelectItem>
                  <SelectItem value="bronchitis">Bronchitis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="batch" className="text-right text-sm">Batch</label>
              <Select
                value={formData.batchId}
                onValueChange={(value) => setFormData({ ...formData, batchId: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="B-2024-001">B-2024-001</SelectItem>
                  <SelectItem value="B-2024-002">B-2024-002</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="dueDate" className="text-right text-sm">Due Date</label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="method" className="text-right text-sm">Method</label>
              <Select
                value={formData.method}
                onValueChange={(value) => setFormData({ ...formData, method: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drinking">Drinking Water</SelectItem>
                  <SelectItem value="spray">Spray</SelectItem>
                  <SelectItem value="injection">Injection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="dosage" className="text-right text-sm">Dosage</label>
              <Input
                id="dosage"
                value={formData.dosage}
                onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="notes" className="text-right text-sm">Notes</label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scheduling...
                </>
              ) : (
                'Schedule'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}