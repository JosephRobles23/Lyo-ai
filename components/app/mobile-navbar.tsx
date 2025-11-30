"use client"

import { Menu, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AppSidebar } from "./sidebar"
import { useState } from "react"

interface MobileNavbarProps {
  onCommandOpen?: () => void
}

export function MobileNavbar({ onCommandOpen }: MobileNavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 md:hidden">
      {/* Left: Menu Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 h-9 w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <AppSidebar 
            onCommandOpen={() => {
              if (onCommandOpen) onCommandOpen()
              setOpen(false)
            }} 
            onNavigate={() => setOpen(false)} 
          />
        </SheetContent>
      </Sheet>

      {/* Center: Logo/Title */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-orange-400 to-teal-400 flex items-center justify-center">
          <span className="text-xs font-bold text-white">L</span>
        </div>
        <span className="text-sm font-semibold tracking-tight">LYO</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={onCommandOpen}
          className="shrink-0 h-9 w-9"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
        <div className="scale-90">
          <ThemeToggle />
        </div>
        <Button variant="ghost" size="icon" className="shrink-0 h-9 w-9">
          <Plus className="h-4 w-4" />
          <span className="sr-only">New</span>
        </Button>
      </div>
    </div>
  )
}
