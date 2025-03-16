"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"
import toast from 'react-hot-toast'

export default function LogsInput() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [farmSection, setFarmSection] = useState("")
  const [logType, setLogType] = useState("")
  const [logValue, setLogValue] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    
    if (!date || !farmSection || !logType || !logValue) {
      toast.error('Please fill in all required fields')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: date.toISOString(),
          farmSection,
          logType,
          logValue,
          notes
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to save log entry')
      }
      
      toast.success('Log entry saved successfully')
      
      // Reset form
      setFarmSection('')
      setLogType('')
      setLogValue('')
      setNotes('')
    } catch (error) {
      console.error('Error saving log entry:', error)
      toast.error('Failed to save log entry')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get the appropriate unit based on log type
  const getValueUnit = () => {
    switch (logType) {
      case "mortality":
        return "birds"
      case "feed":
        return "kg"
      case "weight":
        return "kg"
      case "eggs":
        return "count"
      default:
        return ""
    }
  }

  // Get placeholder text based on log type
  const getValuePlaceholder = () => {
    switch (logType) {
      case "mortality":
        return "Enter number of mortalities"
      case "feed":
        return "Enter amount of feed consumed"
      case "weight":
        return "Enter average weight"
      case "eggs":
        return "Enter number of eggs collected"
      case "medication":
        return "Enter medication dosage"
      case "health":
        return "Enter health status value"
      default:
        return "Enter value"
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Daily Log Entry</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Record Daily Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farm-section">Farm Section</Label>
                <Select value={farmSection} onValueChange={setFarmSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select farm section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="broiler">Broiler Farm</SelectItem>
                    <SelectItem value="layer">Layer Farm</SelectItem>
                    <SelectItem value="vegetable">Vegetable Patch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="log-type">Log Type</Label>
                <Select value={logType} onValueChange={setLogType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select log type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mortality">Mortality</SelectItem>
                    <SelectItem value="feed">Feed Consumed</SelectItem>
                    <SelectItem value="weight">Weight Measurement</SelectItem>
                    <SelectItem value="eggs">Egg Collection</SelectItem>
                    <SelectItem value="medication">Medication</SelectItem>
                    <SelectItem value="health">Health Check</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {logType && (
                <div className="space-y-2">
                  <Label htmlFor="log-value">
                    {logType === "other" ? "Value" : logType.charAt(0).toUpperCase() + logType.slice(1)}
                    {getValueUnit() ? ` (${getValueUnit()})` : ""}
                  </Label>
                  <Input 
                    id="log-value" 
                    value={logValue}
                    onChange={(e) => setLogValue(e.target.value)}
                    type={["mortality", "feed", "weight", "eggs"].includes(logType) ? "number" : "text"} 
                    placeholder={getValuePlaceholder()} 
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Enter any additional notes or observations" 
                className="min-h-[120px]"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">Cancel</Button>
          <Button 
            type="submit" 
            onClick={handleSubmit} 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Log Entry'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}