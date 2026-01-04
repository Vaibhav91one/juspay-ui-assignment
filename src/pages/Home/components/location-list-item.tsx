import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface LocationListItemProps {
  city: string
  revenue: number
  maxRevenue: number
}

export function LocationListItem({ city, revenue, maxRevenue }: LocationListItemProps) {
  const percentage = (revenue / maxRevenue) * 100

  return (
    <div className="space-y-1 px-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-light font-xs">{city}</span>
        <span className="text-gray-600 font-xs font-light dark:text-white">{revenue}K</span>
      </div>
      <Progress 
        value={percentage} 
        className={cn(
          "bg-gray-200 dark:bg-gray-600 h-[2px]",
          "**:data-[slot=progress-indicator]:bg-bar"
        )}
      />
    </div>
  )
}
