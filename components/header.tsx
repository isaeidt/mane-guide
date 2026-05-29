"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  Search,
  Menu,
  User,
  Store,
  LogOut,
  LayoutDashboard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { href: "/", label: "Explorar" },
  { href: "/lado-b", label: "Lado B" },
  { href: "/comunidade", label: "Comunidade" },
]

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuth()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(
        `/lugar/${encodeURIComponent(
          searchQuery.trim().toLowerCase().replace(/\s+/g, "-")
        )}`
      )
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex  items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo mantido */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="ManéGuide"
                width={34}
                height={34}
                className="rounded-full"
              />
              <span className="hidden text-lg font-bold text-foreground sm:block">
                ManéGuide
              </span>
            </Link>
          </div>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/")

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden sm:block w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar na ilha..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                onKeyDown={handleSearch}
                className="h-9 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Auth */}
            <div className="flex items-center gap-2">
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="outline-none">
                      <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20 transition-opacity hover:opacity-90">
                        <AvatarImage
                          src={user.avatar}
                          alt={user.name}
                        />
                        <AvatarFallback>
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="w-52"
                  >
                    <div className="px-3 py-2">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {user.businessName || user.name}
                      </p>
                      <p className="text-xs capitalize text-muted-foreground">
                        {user.type}
                      </p>
                    </div>

                    <DropdownMenuSeparator />

                    {user.type === "usuario" && (
                      <DropdownMenuItem asChild>
                        <Link
                          href="/perfil"
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <User className="h-4 w-4" />
                          Meu Perfil
                        </Link>
                      </DropdownMenuItem>
                    )}

                    {user.type === "estabelecimento" && (
                      <DropdownMenuItem asChild>
                        <Link
                          href="/estabelecimento"
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          Meu Painel
                        </Link>
                      </DropdownMenuItem>
                    )}

                    <DropdownMenuItem
                      onClick={() => {
                        logout()
                        router.push("/")
                      }}
                      className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
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
                    <span className="hidden sm:inline">
                      Parceiro
                    </span>
                    <span className="sm:hidden">
                      Parceiro
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar mobile */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  )
}