"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Compass, Heart, Map, Calendar, X, User, Store, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Explorar", icon: Compass },
  { href: "/favoritos", label: "Salvos", icon: Bookmark },
  { href: "/mapa", label: "Mapa da Ilha", icon: Map },
  { href: "/eventos", label: "Eventos", icon: Calendar },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-72 border-r border-border bg-card shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="ManéGuide"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-foreground">ManéGuide</span>
            </Link>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Explorar
            </p>
            <ul className="space-y-0.5">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-5 w-5 shrink-0",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Auth section */}
          <div className="border-t border-border px-3 py-4 space-y-2">
            <p className="px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Minha Conta
            </p>
            <Link
              href="/entrar?modo=usuario"
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <User className="h-5 w-5 shrink-0" />
              Entrar como Usuário
            </Link>
            <Link
              href="/entrar?modo=estabelecimento"
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Store className="h-5 w-5 shrink-0" />
              Área do Estabelecimento
            </Link>
          </div>

          {/* Footer */}
          <div className="px-5 pb-4 pt-1">
            <p className="text-xs text-muted-foreground">
              © 2026 ManéGuide · Feito com carinho em Floripa
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
