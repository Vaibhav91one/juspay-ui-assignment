import { NotificationIcon } from "./shared/notification-icon"
import type { NotificationItem } from "./types"

interface NotificationItemProps {
  notification: NotificationItem
}

export function NotificationItemComponent({ notification }: NotificationItemProps) {
  return (
    <div className="sidebar-item-container-start">
      {notification.icon && (
        <NotificationIcon icon={notification.icon} color={notification.color} />
      )}
      <div className="sidebar-item-text-container">
        <p className="sidebar-item-title-secondary">{notification.title}</p>
        <p className="sidebar-item-time">{notification.time}</p>
      </div>
    </div>
  )
}

