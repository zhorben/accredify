export interface NavItem {
  path: string
  icon: string
  label: string
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/', icon: 'dashboard', label: 'Dashboard' },
  { path: '/documents', icon: 'documents', label: 'Documents' },
  { path: '/insights', icon: 'insights', label: 'Insights' },
  { path: '/help', icon: 'help', label: 'Help' },
  { path: '/settings', icon: 'settings', label: 'Settings' },
]
