import type { NotificationItem, ActivityItem, ContactItem } from "./types"
import Notification1 from "@/components/svgs/RightSidebar/Notification-1"
import Notification2 from "@/components/svgs/RightSidebar/Notification-2"
import Notification3 from "@/components/svgs/RightSidebar/Notification-3"

export const notificationsData: NotificationItem[] = [
  {
    id: "1",
    title: "You have a bug that needs...",
    time: "Just now",
    icon: Notification1,
    color: "bg-blue-light",
  },
  {
    id: "2",
    title: "New user registered",
    time: "59 minutes ago",
    icon: Notification2,
    color: "bg-blue-gray",
  },
  {
    id: "3",
    title: "You have a bug that needs...",
    time: "12 hours ago",
    icon: Notification1,
    color: "bg-blue-light",
  },
  {
    id: "4",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    icon: Notification3,
    color: "bg-blue-gray",
  },
]

export const activitiesData: ActivityItem[] = [
  {
    id: "1",
    title: "You have a bug that needs...",
    time: "Just now",
    avatar: {
      bgColor: "bg-green-500",
      image: "https://i.pravatar.cc/150?u=activity1",
    },
  },
  {
    id: "2",
    title: "Released a new version",
    time: "59 minutes ago",
    avatar: {
      bgColor: "bg-amber-600",
      image: "https://i.pravatar.cc/150?u=activity2",
    },
  },
  {
    id: "3",
    title: "Submitted a bug",
    time: "12 hours ago",
    avatar: {
      bgColor: "bg-sky-400",
      image: "https://i.pravatar.cc/150?u=activity3",
    },
  },
  {
    id: "4",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    avatar: {
      bgColor: "bg-slate-700",
      image: "https://i.pravatar.cc/150?u=activity4",
    },
  },
  {
    id: "5",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: {
      bgColor: "bg-slate-800",
      image: "https://i.pravatar.cc/150?u=activity5",
    },
  },
]

export const contactsData: ContactItem[] = [
  {
    id: "1",
    name: "Natali Craig",
    avatar: {
      bgColor: "bg-gray-400",
      image: "https://i.pravatar.cc/150?u=natali-craig",
    },
  },
  {
    id: "2",
    name: "Drew Cano",
    avatar: {
      bgColor: "bg-red-500",
      image: "https://i.pravatar.cc/150?u=drew-cano",
    },
  },
  {
    id: "3",
    name: "Orlando Diggs",
    avatar: {
      bgColor: "bg-orange-500",
      image: "https://i.pravatar.cc/150?u=orlando-diggs",
    },
  },
  {
    id: "4",
    name: "Andi Lane",
    avatar: {
      bgColor: "bg-blue-500",
      image: "https://i.pravatar.cc/150?u=andi-lane",
    },
  },
  {
    id: "5",
    name: "Kate Morrison",
    avatar: {
      bgColor: "bg-purple-500",
      image: "https://i.pravatar.cc/150?u=kate-morrison",
    },
  },
  {
    id: "6",
    name: "Koray Okumus",
    avatar: {
      bgColor: "bg-green-500",
      image: "https://i.pravatar.cc/150?u=koray-okumus",
    },
  },
  {
    id: "7",
    name: "Alex Morgan",
    avatar: {
      bgColor: "bg-pink-500",
      image: "https://i.pravatar.cc/150?u=alex-morgan",
    },
  },
  {
    id: "8",
    name: "Jordan Smith",
    avatar: {
      bgColor: "bg-indigo-500",
      image: "https://i.pravatar.cc/150?u=jordan-smith",
    },
  },
  {
    id: "9",
    name: "Taylor Johnson",
    avatar: {
      bgColor: "bg-teal-500",
      image: "https://i.pravatar.cc/150?u=taylor-johnson",
    },
  },
  {
    id: "10",
    name: "Casey Williams",
    avatar: {
      bgColor: "bg-cyan-500",
      image: "https://i.pravatar.cc/150?u=casey-williams",
    },
  },
]

