'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface AddFeedStockDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: FeedStockData) => Promise<void>
}

export interface FeedStockData {
  feedType: string
  quantity: number
  costPerKg: number
  manufacturer: string
  batchNumber: string
  manufacturingDate: string
  expiryDate: string
}

export function AddFeedStockDialog({ open, onOpenChange, onSubmit }: AddFeedStockDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FeedStockData>({
    feedType: '',
    quantity: 0,
    costPerKg: 0,
    manufacturer: '',
    batchNumber: '',
    manufacturingDate: '',
    expiryDate: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await onSubmit(formData)
      toast.success('Feed stock added successfully')
      onOpenChange(false)
      // Reset form
      setFormData({
        feedType: '',
        quantity: 0,
        costPerKg: 0,
        manufacturer: '',
        batchNumber: '',
        manufacturingDate: '',
        expiryDate: ''
      })
    } catch (error) {
      toast.error('Failed to add feed stock')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Feed Stock</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="feedType" className="text-right text-sm">
                Feed Type
              </label>
              <Select
                value={formData.feedType}
                onValueChange={(value) => setFormData({ ...formData, feedType: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select feed type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Starter Feed</SelectItem>
                  <SelectItem value="grower">Grower Feed</SelectItem>
                  <SelectItem value="finisher">Finisher Feed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="quantity" className="text-right text-sm">
                Quantity (kg)
              </label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                className="col-span-3"
                min="0"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="costPerKg" className="text-right text-sm">
                Cost/kg (₦)
              </label>
              <Input
                id="costPerKg"
                type="number"
                value={formData.costPerKg}
                onChange={(e) => setFormData({ ...formData, costPerKg: Number(e.target.value) })}
                className="col-span-3"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="manufacturer" className="text-right text-sm">
                Manufacturer
              </label>
              <Input
                id="manufacturer"
                value={formData.manufacturer}
                onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                className="col-span-3"
                required
              />
            </div>

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
              <label htmlFor="manufacturingDate" className="text-right text-sm">
                Mfg. Date
              </label>
              <Input
                id="manufacturingDate"
                type="date"
                value={formData.manufacturingDate}
                onChange={(e) => setFormData({ ...formData, manufacturingDate: e.target.value })}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="expiryDate" className="text-right text-sm">
                Exp. Date
              </label>
              <Input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                className="col-span-3"
                required
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
                  Adding...
                </>
              ) : (
                'Add Stock'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}