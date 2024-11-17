'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface RecordMortalityDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: MortalityRecord) => Promise<void>
}

export interface MortalityRecord {
  date: string
  batchId: string
  count: number
  cause: string
  notes: string
}

export function RecordMortalityDialog({ open, onOpenChange, onSubmit }: RecordMortalityDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<MortalityRecord>({
    date: new Date().toISOString().split('T')[0],
    batchId: '',
    count: 0,
    cause: '',
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      toast.success('Mortality record added successfully')
      onOpenChange(false)
      setFormData({
        date: new Date().toISOString().split('T')[0],
        batchId: '',
        count: 0,
        cause: '',
        notes: ''
      })
    } catch (error) {
      toast.error('Failed to add mortality record')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Record Mortality</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="date" className="text-right text-sm">Date</label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="col-span-3"
                required
              />
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
              <label htmlFor="count" className="text-right text-sm">Count</label>
              <Input
                id="count"
                type="number"
                value={formData.count}
                onChange={(e) => setFormData({ ...formData, count: Number(e.target.value) })}
                className="col-span-3"
                min="1"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="cause" className="text-right text-sm">Cause</label>
              <Select
                value={formData.cause}
                onValueChange={(value) => setFormData({ ...formData, cause: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select cause" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="disease">Disease</SelectItem>
                  <SelectItem value="accident">Accident</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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
                  Saving...
                </>
              ) : (
                'Save Record'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}