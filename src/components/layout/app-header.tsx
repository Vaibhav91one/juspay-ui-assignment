import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FileText, Search } from 'lucide-react'
import StarIcon from '@/components/svgs/AppHeader/Star'
import ThemeSwitchIcon from '@/components/svgs/AppHeader/ThemeSwitch'
import HistoryIcon from '@/components/svgs/AppHeader/History'
import NotificationIcon from '@/components/svgs/AppHeader/Notification'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'
import { useAppDispatch } from '@/hooks/redux'
import { toggleTheme } from '@/store/themeSlice'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { RightSidebarTrigger } from '@/components/right-sidebar/right-sidebar-trigger'
import { cn } from '@/lib/utils'

interface AppHeaderProps {
  onRightSidebarToggle: () => void
}

export function AppHeader({ onRightSidebarToggle }: AppHeaderProps) {
  const location = useLocation()
  const isMobile = useIsMobile()
  const dispatch = useAppDispatch()
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false)

  // Keyboard shortcut to open command dialog (Cmd/Ctrl + K or /)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (event.key === '/' && event.target === document.body)
      ) {
        event.preventDefault()
        setIsCommandDialogOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Generate breadcrumb from current route
  const getBreadcrumbItems = () => {
    const path = location.pathname
    if (path === '/') {
      return [
        { label: 'Dashboards', href: '/dashboards' },
        { label: 'Default', current: true },
      ]
    }
    // Add more routes as needed
    return [
      { label: 'Dashboards', href: '/dashboards' },
      { label: 'Default', current: true },
    ]
  }

  const breadcrumbItems = getBreadcrumbItems()

  return (
    <>
      <header className="flex h-14 sm:h-16 shrink-0 items-center gap-2 sm:gap-4 border-b px-2 sm:px-4">
        {/* Left Side - Sidebar Trigger + Star Icon + Breadcrumb */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <SidebarTrigger className="-ml-1" />
          <Button variant="ghost" size="icon">
            <StarIcon className="size-6! mb-1 dark:invert" />
            <span className="sr-only">Star</span>
          </Button>
          <Breadcrumb>
            <BreadcrumbList>
              {isMobile && breadcrumbItems.length > 1 ? (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{breadcrumbItems[breadcrumbItems.length - 1].label}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              ) : (
                breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.current ? (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Right Side - Search + Action Icons */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search Input - Desktop */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 dark:text-gray-300/30" />
            <Input
              placeholder="Search"
              className={cn(
                'h-9 w-[200px] pl-9 pr-4 text-sm',
                'cursor-pointer bg-gray-100 dark:bg-white/10',
                'focus-visible:ring-0 focus-visible:ring-offset-0 border-none',
                'placeholder:text-gray-300 dark:placeholder:text-gray-300/30'
              )}
              readOnly
              onClick={() => setIsCommandDialogOpen(true)}
              onKeyDown={(e) => {
                if (e.key === '/') {
                  e.preventDefault()
                  setIsCommandDialogOpen(true)
                }
              }}
            />
            <Kbd className="pointer-events-none bg-gray-100 dark:bg-white/0 absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex">
              <span className="text-gray-300 dark:text-gray-300/30">⌘</span>
              <span className="text-gray-300 dark:text-gray-300/30">/</span>
            </Kbd>
          </div>

          {/* Search Icon Button - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 md:hidden"
            onClick={() => setIsCommandDialogOpen(true)}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Action Icons */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 sm:h-9 sm:w-9"
            onClick={() => dispatch(toggleTheme())}
          >           
              <ThemeSwitchIcon className="size-7! dark:invert" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex">
            <HistoryIcon className="size-7! dark:invert" />
            <span className="sr-only">History</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <NotificationIcon className="size-7! dark:invert" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* Right Sidebar Trigger */}
          <RightSidebarTrigger onClick={onRightSidebarToggle} />
        </div>
      </header>

      {/* Command Dialog */}
      <CommandDialog open={isCommandDialogOpen} onOpenChange={setIsCommandDialogOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

