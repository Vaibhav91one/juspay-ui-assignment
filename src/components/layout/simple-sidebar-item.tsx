import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { SimpleSidebarItem } from './sidebar-data'

interface SimpleSidebarItemProps {
    item: SimpleSidebarItem
}

export function SimpleSidebarItem({ item }: SimpleSidebarItemProps) {
    const location = useLocation()
    const Icon = item.icon
    // Only check route matching, not static isActive property
    const isActive = item.href && location.pathname === item.href

    return (
        <div
            className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-1 text-sm",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground dark:hover:bg-white/20 dark:hover:bg-white/20",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                "transition-colors relative",
                isActive && "bg-gray-100 dark:bg-white/10"
            )}
        >
            {/* Black left bar for active item */}
            {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-4 bg-gray-900 dark:bg-purple-dark rounded-lg" />
            )}
            <div className="flex items-center justify-start gap-2 ml-6">
                {Icon && (
                  <div className="size-6 shrink-0 flex items-center justify-center dark:invert">
                    <Icon />
                  </div>
                )}
                {item.href ? (
                    <Link to={item.href} className="flex-1 ">
                        <span className="font-light">{item.label}</span>
                    </Link>
                ) : (
                    <span className="flex-1">{item.label}</span>
                )}
            </div>
        </div>
    )
}

