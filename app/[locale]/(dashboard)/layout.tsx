"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/app/sidebar"
import { MobileNavbar } from "@/components/app/mobile-navbar"
import { CommandPalette } from "@/components/app/command-palette"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col bg-background md:flex-row">
      {/* Mobile Navbar - Solo visible en mobile */}
      <MobileNavbar onCommandOpen={() => setCommandOpen(true)} />
      
      {/* Desktop Sidebar - Oculto en mobile */}
      <div className="hidden md:block">
        <AppSidebar onCommandOpen={() => setCommandOpen(true)} />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
      
      {/* Command Palette */}
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  )
}
