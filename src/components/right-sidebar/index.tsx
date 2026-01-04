import {
  SidebarContent,
} from "@/components/ui/sidebar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { NotificationsSection } from "./notifications-section"
import { ActivitiesSection } from "./activities-section"
import { ContactsSection } from "./contacts-section"

interface RightSidebarProps {
  isOpen: boolean
  onOpenChange?: (open: boolean) => void
}

const SIDEBAR_WIDTH_MOBILE = "18rem"

const RightSidebarContent = () => (
  <SidebarContent className="w-full">
    <NotificationsSection />
    <ActivitiesSection />
    <ContactsSection />
  </SidebarContent>
)

export function RightSidebar({ isOpen, onOpenChange }: RightSidebarProps) {
  const isMobile = useIsMobile()

  // Mobile: Render as Sheet (overlay/drawer) - NOT in layout flow
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="bg-background text-foreground w-[var(--sidebar-width)] p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Right Sidebar</SheetTitle>
            <SheetDescription>Notifications, Activities, and Contacts</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">
            <RightSidebarContent />
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop: Render in layout flow
  return (
    <div
      className={cn(
        "text-foreground border-l h-full hidden md:flex flex-shrink-0 bg-background transition-all duration-300 flex-col overflow-hidden",
        isOpen ? "w-70" : "w-0"
      )}
    >
      {isOpen && (
        <div className="h-full w-full flex flex-col flex-1 min-h-0 overflow-hidden pl-4 pt-3">
          <RightSidebarContent />
        </div>
      )}
    </div>
  )
}

