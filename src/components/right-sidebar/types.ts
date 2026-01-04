import type { ComponentType } from "react"

export interface NotificationItem {
  id: string
  title: string
  time: string
  icon?: ComponentType
  color?: string
}

export interface ActivityItem {
  id: string
  title: string
  time: string
  avatar: {
    bgColor: string
    initials?: string
    image?: string
  }
}

export interface ContactItem {
  id: string
  name: string
  avatar: {
    bgColor: string
    initials?: string
    image?: string
  }
}

