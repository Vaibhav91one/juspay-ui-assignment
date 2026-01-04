import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { NotificationItemComponent } from "./notification-item"
import { notificationsData } from "./data"

export function NotificationsSection() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="sidebar-section-label">Notifications</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="space-y-4 p-2">
          {notificationsData.map((notification) => (
            <NotificationItemComponent key={notification.id} notification={notification} />
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

