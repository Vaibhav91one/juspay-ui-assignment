import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

interface NotificationIconProps {
  icon: ComponentType
  color?: string
  className?: string
}

export function NotificationIcon({ icon: Icon, color, className }: NotificationIconProps) {
  return (
    <div className={cn("w-[24px] h-[24px] rounded-lg flex items-center justify-center", color || "bg-gray-100", className)}>
      <Icon />
    </div>
  )
}

