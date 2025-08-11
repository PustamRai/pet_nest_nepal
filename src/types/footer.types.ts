import type React from "react"
export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export type SocialLink = {
  name: string
  href: string
  icon: React.ElementType // To allow passing Lucide React icons
  colorClass: string // Tailwind class for icon color
}

export type FooterProps = {
  companyName?: string
  companyLogoText?: string
  contactPhone?: string
  contactEmail?: string
  onlineShoppingSections?: FooterSection[]
  exploreSections?: FooterSection[]
  quickLinksSections?: FooterSection[]
  socialLinks?: SocialLink[]
}
