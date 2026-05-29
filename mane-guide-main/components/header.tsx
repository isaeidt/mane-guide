"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, Menu, User, Store } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"

const navItems = [
  { href: "/explorar", label: "Explorar" },
  { href: "/lado-b", label: "Lado B" },
  { href: "/comunidade", label: "Comunidade" },
]

export function Header() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="flex h-16 items-center gap-3 px-4 md:px-6">

          {/* Hamburguer */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mr-2">
            <Image
              src="/logo.png"
              alt="ManéGuide"
              width={34}
              height={34}
              className="rounded-full"
            />
            <span className="hidden text-lg font-bold text-foreground sm:block">ManéGuide</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Search */}
          <div className="relative hidden sm:block flex-1 max-w-xs ml-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar na ilha..."
              className="h-9 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-2 ml-2">
            <Link
              href="/entrar?modo=usuario"
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <User className="h-4 w-4" />
              Entrar
            </Link>
            <Link
              href="/entrar?modo=estabelecimento"
              className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Store className="h-4 w-4" />
              <span className="hidden sm:inline">Área do Parceiro</span>
              <span className="sm:hidden">Parceiro</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
