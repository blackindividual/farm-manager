import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Form } from "../components/ui/form"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 