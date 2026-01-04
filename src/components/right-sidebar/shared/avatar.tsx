import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AvatarProps {
  bgColor?: string
  initials?: string
  image?: string
  icon?: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
}

const iconSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4',
}

export function Avatar({ 
  bgColor = 'bg-muted', 
  initials, 
  image, 
  icon: Icon,
  size = 'sm',
  className 
}: AvatarProps) {
  const sizeClass = sizeClasses[size]
  const iconSizeClass = iconSizeClasses[size]

  return (
    <div 
      className={cn(
        "rounded-full flex items-center justify-center",
        sizeClass,
        bgColor,
        className
      )}
    >
      {image ? (
        <img src={image} alt="" className="w-full h-full rounded-full object-cover" />
      ) : initials ? (
        <span className={cn("text-white font-medium text-xs", size === 'sm' ? 'text-[10px]' : '')}>
          {initials}
        </span>
      ) : Icon ? (
        <Icon className={cn("text-white", iconSizeClass)} />
      ) : null}
    </div>
  )
}

