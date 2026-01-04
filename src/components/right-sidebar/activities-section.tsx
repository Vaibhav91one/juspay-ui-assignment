import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { ActivityItemComponent } from "./activity-item"
import { activitiesData } from "./data"

export function ActivitiesSection() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="sidebar-section-label">Activities</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="space-y-4 p-2">
          {activitiesData.map((activity, index) => (
            <ActivityItemComponent 
              key={activity.id} 
              activity={activity}
              isLast={index === activitiesData.length - 1}
            />
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

