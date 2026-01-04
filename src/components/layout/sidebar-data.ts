import type { ComponentType } from 'react'

// Dashboard SVG imports
import Dashboard1 from '@/components/svgs/LeftSidebar/Dashboard/Dashboard-1'
import Dashboard2 from '@/components/svgs/LeftSidebar/Dashboard/Dashboard-2'
import Dashboard3 from '@/components/svgs/LeftSidebar/Dashboard/Dashboard-3'
import Dashboard4 from '@/components/svgs/LeftSidebar/Dashboard/Dashboard-4'

// Pages SVG imports
import Page1 from '@/components/svgs/LeftSidebar/Pages/Page-1'
import Page2 from '@/components/svgs/LeftSidebar/Pages/Page-2'
import Page3 from '@/components/svgs/LeftSidebar/Pages/Page-3'
import Page4 from '@/components/svgs/LeftSidebar/Pages/Page-4'
import Page5 from '@/components/svgs/LeftSidebar/Pages/Page-5'

export type SidebarSubItem = {
  id: string
  label: string
  href?: string
}

export type CollapsibleSidebarItem = {
  id: string
  label: string
  icon: ComponentType
  href?: string
  subItems?: SidebarSubItem[]
  defaultOpen?: boolean
}

export type SimpleSidebarItem = {
  id: string
  label: string
  icon?: ComponentType
  href?: string
  isActive?: boolean
}

// Dashboards section data - mix of regular and collapsible items
export const dashboardsItems: (SimpleSidebarItem | CollapsibleSidebarItem)[] = [
  {
    id: 'default',
    label: 'Default',
    icon: Dashboard1,
    href: '/',
    isActive: true,
  },
  {
    id: 'ecommerce',
    label: 'eCommerce',
    icon: Dashboard2,
    subItems: [
      { id: 'overview', label: 'Overview', href: '/' },
      { id: 'products', label: 'Products', href: '/' },
      { id: 'orders', label: 'Orders', href: '/orders' },
      { id: 'customers', label: 'Customers', href: '/' },
      { id: 'analytics', label: 'Analytics', href: '/' },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: Dashboard3,
    subItems: [
      { id: 'overview', label: 'Overview', href: '/' },
      { id: 'active', label: 'Active', href: '/' },
      { id: 'completed', label: 'Completed', href: '/' },
      { id: 'archived', label: 'Archived', href: '/' },
    ],
  },
  {
    id: 'online-courses',
    label: 'Online Courses',
    icon: Dashboard4,
    subItems: [
      { id: 'overview', label: 'Overview', href: '/' },
      { id: 'my-courses', label: 'My Courses', href: '/' },
      { id: 'enrolled', label: 'Enrolled', href: '/' },
      { id: 'certificates', label: 'Certificates', href: '/' },
    ],
  },
]

// Pages section data
export const pagesItems: CollapsibleSidebarItem[] = [
  {
    id: 'user-profile',
    label: 'User Profile',
    icon: Page1,
    defaultOpen: true,
    subItems: [
      { id: 'overview', label: 'Overview', href: '/' },
      { id: 'projects', label: 'Projects', href: '/' },
      { id: 'campaigns', label: 'Campaigns', href: '/' },
      { id: 'documents', label: 'Documents', href: '/' },
      { id: 'followers', label: 'Followers', href: '/' },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    icon: Page2,
    subItems: [
      { id: 'settings', label: 'Settings', href: '/' },
      { id: 'security', label: 'Security', href: '/' },
      { id: 'billing', label: 'Billing', href: '/' },
      { id: 'notifications', label: 'Notifications', href: '/' },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    icon: Page3,
    subItems: [
      { id: 'overview', label: 'Overview', href: '/' },
      { id: 'team', label: 'Team', href: '/' },
      { id: 'departments', label: 'Departments', href: '/' },
      { id: 'policies', label: 'Policies', href: '/' },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: Page4,
    subItems: [
      { id: 'all-posts', label: 'All Posts', href: '/' },
      { id: 'drafts', label: 'Drafts', href: '/' },
      { id: 'published', label: 'Published', href: '/' },
      { id: 'categories', label: 'Categories', href: '/' },
    ],
  },
  {
    id: 'social',
    label: 'Social',
    icon: Page5,
    subItems: [
      { id: 'feed', label: 'Feed', href: '/' },
      { id: 'messages', label: 'Messages', href: '/' },
      { id: 'connections', label: 'Connections', href: '/' },
      { id: 'groups', label: 'Groups', href: '/' },
    ],
  },
]

// Favorites items - Overview and Projects point to orders page
export const favoritesItems: SimpleSidebarItem[] = [
  { id: 'overview', label: 'Overview', href: '/orders' },
  { id: 'projects', label: 'Projects', href: '/orders' },
]

// Recently items - point to home
export const recentlyItems: SimpleSidebarItem[] = [
  { id: 'recent-1', label: 'Recent Item 1', href: '/' },
  { id: 'recent-2', label: 'Recent Item 2', href: '/' },
]

// Type guard to check if item is collapsible
export function isCollapsibleItem(
  item: SimpleSidebarItem | CollapsibleSidebarItem
): item is CollapsibleSidebarItem {
  return 'subItems' in item || (!('isActive' in item) && !item.href)
}

