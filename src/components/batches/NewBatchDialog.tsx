'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Loader2 } from 'lucide-react'

interface NewBatchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: BatchFormData) => Promise<void>
}

interface BatchFormData {
  batchNumber: string
  startDate: string
  birdCount: number
  breed: string
  sourceSupplier: string
  initialWeight: number
  costPerBird: number
}

export function NewBatchDialog({ open, onOpenChange, onSubmit }: NewBatchDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<BatchFormData>({
    batchNumber: '',
    startDate: new Date().toISOString().split('T')[0],
    birdCount: 0,
    breed: '',
    sourceSupplier: '',
    initialWeight: 0,
    costPerBird: 0
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit(formData)
      setFormData({ // Reset form
        batchNumber: '',
        startDate: new Date().toISOString().split('T')[0],
        birdCount: 0,
        breed: '',
        sourceSupplier: '',
        initialWeight: 0,
        costPerBird: 0
      })
    } catch (error) {
      // Error will be handled by parent component
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Batch</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="batchNumber" className="text-right text-sm">
                Batch No.
              </label>
              <Input
                id="batchNumber"
                value={formData.batchNumber}
                onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="startDate" className="text-right text-sm">
                Start Date
              </label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="birdCount" className="text-right text-sm">
                Bird Count
              </label>
              <Input
                id="birdCount"
                type="number"
                value={formData.birdCount}
                onChange={(e) => setFormData({ ...formData, birdCount: Number(e.target.value) })}
                className="col-span-3"
                required
                min="1"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="breed" className="text-right text-sm">
                Breed
              </label>
              <Input
                id="breed"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="supplier" className="text-right text-sm">
                Supplier
              </label>
              <Input
                id="supplier"
                value={formData.sourceSupplier}
                onChange={(e) => setFormData({ ...formData, sourceSupplier: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="initialWeight" className="text-right text-sm">
                Initial Weight
              </label>
              <Input
                id="initialWeight"
                type="number"
                value={formData.initialWeight}
                onChange={(e) => setFormData({ ...formData, initialWeight: Number(e.target.value) })}
                className="col-span-3"
                required
                step="0.01"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="costPerBird" className="text-right text-sm">
                Cost/Bird
              </label>
              <Input
                id="costPerBird"
                type="number"
                value={formData.costPerBird}
                onChange={(e) => setFormData({ ...formData, costPerBird: Number(e.target.value) })}
                className="col-span-3"
                required
                step="0.01"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Batch'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}