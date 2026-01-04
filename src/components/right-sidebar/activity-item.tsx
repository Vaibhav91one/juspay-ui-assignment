import { Avatar } from "./shared/avatar"
import type { ActivityItem } from "./types"

interface ActivityItemProps {
  activity: ActivityItem
  isLast?: boolean
}

export function ActivityItemComponent({ activity, isLast = false }: ActivityItemProps) {
  return (
    <div className="relative sidebar-item-container-center">
      {/* Vertical line - positioned at the center of the avatar, extending down through the gap */}
      {!isLast && (
        <div 
          className="absolute left-3 w-px bg-gray-200 dark:bg-white/10" 
          style={{ top: '1.9rem', bottom: '-0.5rem' }}
        />
      )}
      <Avatar 
        bgColor={activity.avatar.bgColor}
        initials={activity.avatar.initials}
        image={activity.avatar.image}
        className="relative z-10"
      />
      <div className="sidebar-item-text-container">
        <p className="sidebar-item-title-secondary">{activity.title}</p>
        <p className="sidebar-item-time">{activity.time}</p>
      </div>
    </div>
  )
}

