"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Store, Calendar, LogOut, Star } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { href: "/estabelecimento", label: "Dashboard", icon: LayoutDashboard },
  { href: "/estabelecimento/meus-locais", label: "Meus Estabelecimentos", icon: Store },
  { href: "/estabelecimento/eventos", label: "Eventos", icon: Calendar },
]

const mockEstablishments = [
  {
    id: 1,
    name: "Bar do Mané",
    category: "Gastronomia",
    location: "Centrinho da Lagoa",
    rating: 4.6,
    status: "Aberto",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80",
  },
  {
    id: 2,
    name: "Bar do Arante",
    category: "Gastronomia",
    location: "Ribeirão da Ilha",
    rating: 4.8,
    status: "Aberto",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: 3,
    name: "Jazz & Ostras",
    category: "Noite",
    location: "Centro",
    rating: 4.7,
    status: "A partir das 18h",
    image: "/jazz.jpg",
  },
]

export default function MeusLocaisPage() {
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

        <nav className="flex-1 space-y-1 p-4">
          {sidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
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

          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/estabelecimento"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/estabelecimento/eventos"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Eventos
            </Link>
          </nav>

          <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20">
            <AvatarImage src={user.avatar} alt={displayName} />
            <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
          </Avatar>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-foreground">Meus Estabelecimentos</h2>
                </div>
                <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Adicionar
                </button>
              </div>
              <div className="divide-y divide-border">
                {mockEstablishments.map((place) => (
                  <div key={place.id} className="flex items-center gap-4 px-6 py-4">
                    <Image
                      src={place.image}
                      alt={place.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground">{place.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {place.category} &middot; {place.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5 text-amber-500" />
                        {place.rating}
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        {place.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
