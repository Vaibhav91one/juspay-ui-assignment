import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SidebarIcon from "@/components/svgs/AppHeader/Sidebar"

interface RightSidebarTriggerProps {
  onClick: () => void
  className?: string
}

export function RightSidebarTrigger({ onClick, className }: RightSidebarTriggerProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-8 w-8 sm:h-9 sm:w-9", className)}
      onClick={onClick}
    >
      <SidebarIcon className="size-7! scale-x-[-1] dark:invert" />
      <span className="sr-only">Toggle Right Sidebar</span>
    </Button>
  )
}

