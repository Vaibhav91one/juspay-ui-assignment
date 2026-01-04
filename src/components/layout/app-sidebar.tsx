import { Link } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar } from '@/components/right-sidebar/shared/avatar'
import { CollapsibleSidebarItem } from './collapsible-sidebar-item'
import { SimpleSidebarItem } from './simple-sidebar-item'
import { 
  dashboardsItems, 
  pagesItems, 
  favoritesItems, 
  recentlyItems,
  isCollapsibleItem
} from './sidebar-data'

export function AppSidebar() {
  return (
    <Sidebar className="bg-background px-2 pt-2">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <Avatar 
            image="https://i.pravatar.cc/150?u=byewind"
            className="flex-shrink-0"
          />
          <span className="font-light text-sm">ByeWind</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {/* Favorites / Recently Section */}
        <SidebarGroup>
          <Tabs defaultValue="favorites" className="w-full">
            <TabsList className="w-full h-auto bg-transparent">
              <TabsTrigger 
                value="favorites" 
                className="flex-1 font-light text-sm text-gray-300 dark:text-gray-300/30 data-[state=active]:text-gray-400 dark:data-[state=active]:text-gray-400/80"
              >
                Favorites
              </TabsTrigger>
              <TabsTrigger 
                value="recently"
                className="flex-1 font-light text-sm text-gray-300 dark:text-gray-300/30 data-[state=active]:text-gray-400 dark:data-[state=active]:text-gray-400"
              >
                Recently
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="favorites" className="mt-0 pl-2">
              <SidebarGroupContent>
                <SidebarMenu>
                  {favoritesItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild>
                        <Link to={item.href || '#'} className="gap-2">
                          <div className="size-1.5 rounded-full bg-gray-300 dark:bg-gray-300/30" />
                          <span className="font-light">{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </TabsContent>
            
            <TabsContent value="recently" className="mt-0 pl-2">
              <SidebarGroupContent>
                <SidebarMenu>
                  {recentlyItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild>
                        <Link to={item.href || '#'} className="gap-2">
                          <div className="size-1.5 rounded-full bg-gray-300 dark:bg-gray-300/30" />
                          <span className="font-light">{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </TabsContent>
          </Tabs>
        </SidebarGroup>

        {/* Dashboards Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 font-light text-sm">
            Dashboards
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col">
              {dashboardsItems.map((item) => {
                if (isCollapsibleItem(item)) {
                  return <CollapsibleSidebarItem key={item.id} item={item} />
                } else {
                  return <SimpleSidebarItem key={item.id} item={item} />
                }
              })}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pages Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 font-light text-sm">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col">
              {pagesItems.map((item) => (
                <CollapsibleSidebarItem key={item.id} item={item} />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
