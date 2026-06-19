"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Store, Calendar, LogOut, Plus } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DocumentTitle } from "@/components/document-title"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"

const sidebarLinks = [
  { href: "/estabelecimento", label: "Dashboard", icon: LayoutDashboard },
  { href: "/estabelecimento/meus-locais", label: "Meus Estabelecimentos", icon: Store },
  { href: "/estabelecimento/eventos", label: "Eventos", icon: Calendar },
]

const mockEvents = [
  {
    id: 1,
    name: "Noite de Jazz & Ostras",
    date: "Hoje, 19:00",
    local: "Jazz & Ostras",
    image: "/jazz.jpg",
  },
  {
    id: 2,
    name: "Happy Hour do Mané",
    date: "Quinta, 18:30",
    local: "Bar do Mané",
    image: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=80&q=80",
  },
  {
    id: 3,
    name: "Festival do Bilhete",
    date: "Sábado, 20:00",
    local: "Bar do Arante",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=80&q=80",
  },
]

export default function EventosEstabelecimentoPage() {
  const { user, logout, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/entrar?modo=estabelecimento")
    }
  }, [isLoading, isAuthenticated, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#F8F4EF" }}>
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!isAuthenticated || !user) return null

  const displayName = user.businessName || user.name

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F8F4EF" }}>
      <DocumentTitle title="Eventos do Parceiro" />
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ManéGuide" width={20} height={20} className="rounded-full" />
            <span className="text-lg font-bold text-foreground">ManéGuide</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 border-b border-border px-6 py-4">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src={user.avatar} alt={displayName} />
            <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{displayName}</p>
            <p className="text-xs text-muted-foreground">Estabelecimento</p>
          </div>
        </div>

        <nav aria-label="Navegação do parceiro" className="flex-1 space-y-1 p-4">
          {sidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <Image src="/logo.png" alt="ManéGuide" width={20} height={20} className="rounded-full" />
            <span className="font-bold text-foreground">ManéGuide</span>
          </Link>

          <nav aria-label="Seções do parceiro" className="hidden items-center gap-1 md:flex">
            <Link
              href="/estabelecimento"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/estabelecimento/meus-locais"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Meus Estabelecimentos
            </Link>
          </nav>

          <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20">
            <AvatarImage src={user.avatar} alt={displayName} />
            <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
          </Avatar>
        </header>

        <main id="conteudo-principal" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-foreground">Meus Eventos</h2>
                </div>
                <button type="button" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  <Plus className="h-3.5 w-3.5" />
                  Novo evento
                </button>
              </div>
              <div className="divide-y divide-border">
                {mockEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-4 px-6 py-4">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{event.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.date} &middot; {event.local}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}
