// Import Icons type from the correct path
import type { Icons } from "@/components/icons"

/**
 * Represents a navigation item in the application.
 */
export type NavItem = {
  /** The title of the navigation item */
  title: string;
  /** The URL or path that the navigation item links to */
  href: string;
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
  }
}

export type NavConfig = {
  mainNav: MainNavItem[]
}