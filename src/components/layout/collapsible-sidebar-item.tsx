import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import type { CollapsibleSidebarItem } from './sidebar-data'

interface CollapsibleSidebarItemProps {
  item: CollapsibleSidebarItem
}

export function CollapsibleSidebarItem({ item }: CollapsibleSidebarItemProps) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen ?? false)
  const location = useLocation()
  const Icon = item.icon

  // Only render as collapsible if it has subItems
  if (item.subItems && item.subItems.length > 0) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/menu-item">
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm",
              "hover:bg-gray-50 hover:text-sidebar-accent-foreground dark:hover:bg-white/20 dark:hover:bg-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
              "transition-colors"
            )}
          >
            <ChevronRight 
              className={cn(
                "size-4 shrink-0 transition-transform text-gray-300",
                isOpen && "rotate-90"
              )} 
            />
            <div className="size-6 shrink-0 flex items-center justify-center dark:invert">
              <Icon />
            </div>
            <span className="font-light">{item.label}</span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="border-l-0 ml-14">
            {item.subItems.map((subItem) => (
              <SidebarMenuSubItem key={subItem.id}>
                <SidebarMenuSubButton className="hover:bg-gray-50 hover:text-sidebar-accent-foreground dark:hover:bg-white/20 dark:hover:bg-white/20"
                  asChild={subItem.label === 'Orders' && !!subItem.href}
                  isActive={location.pathname === subItem.href && location.pathname !== '/'}
                >
                  {subItem.label === 'Orders' && subItem.href ? (
                    <Link to={subItem.href} className="font-light">{subItem.label}</Link>
                  ) : (
                    <span className="font-light">{subItem.label}</span>
                  )}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    )
  }

  // Regular item with arrow (non-collapsible, just navigable)
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm",
        "hover:bg-gray-50 hover:text-sidebar-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        "transition-colors"
      )}
    >
      <ChevronRight className="size-4 shrink-0 text-gray-300" />
      <div className="size-6 shrink-0 flex items-center justify-center">
        <Icon />
      </div>
      {item.href ? (
        <Link to={item.href} className="flex-1">
          <span className="font-light">{item.label}</span>
        </Link>
      ) : (
        <span className="flex-1 font-light">{item.label}</span>
      )}
    </div>
  )
}

