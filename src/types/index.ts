import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
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