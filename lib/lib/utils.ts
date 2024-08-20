import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const luiTwMerge = extendTailwindMerge({
  prefix: "lui-",
})

export function cn(...inputs: ClassValue[]) {
  return luiTwMerge(clsx(inputs))
}