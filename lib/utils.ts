import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Form } from "@/app/components/ui/form"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add any other utility functions you had in app/lib/utils.ts here
