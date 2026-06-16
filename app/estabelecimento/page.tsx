"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Store,
  Calendar,
  Camera,
  Edit3,
  Tag,
  QrCode,
  Star,
  Eye,
  MessageSquare,
  Trophy,
  Pencil,
  Trash2,
  LogOut,
  Plus,
  ChevronRight,
  X,
  Clock,
  MapPin,
  ImagePlus,
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DocumentTitle } from "@/components/document-title"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

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

const stats = [
  { label: "Avaliação", value: "4.9", icon: Star, color: "text-amber-500" },
  { label: "Visitas", value: "1.2k", icon: Eye, color: "text-primary" },
  { label: "Dicas", value: "48", icon: MessageSquare, color: "text-secondary" },
  { label: "Ranking Ilha", value: "#3", icon: Trophy, color: "text-amber-600" },
]

const quickActions = [
  { label: "Atualizar Fotos", icon: Camera },
  { label: "Editar Infos", icon: Edit3 },
  { label: "Criar Promo", icon: Tag },
  { label: "Meu QR Code", icon: QrCode },
]

const sidebarLinks = [
  { href: "/estabelecimento", label: "Dashboard", icon: LayoutDashboard },
  { href: "/estabelecimento/meus-locais", label: "Meus Estabelecimentos", icon: Store },
  { href: "/estabelecimento/eventos", label: "Eventos", icon: Calendar },
]

export default function EstabelecimentoPage() {
  const { user, logout, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [eventForm, setEventForm] = useState({
    name: "",
    date: "",
    time: "",
    local: "",
    description: "",
  })

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/entrar?modo=estabelecimento")
    }
  }, [isLoading, isAuthenticated, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock: apenas fecha o modal
    setIsEventModalOpen(false)
    setEventForm({ name: "", date: "", time: "", local: "", description: "" })
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
      <DocumentTitle title="Painel do Parceiro" />

      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card md:flex">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ManéGuide" width={20} height={20} className="rounded-full" />
            <span className="text-lg font-bold text-foreground">ManéGuide</span>
          </Link>
        </div>

        {/* User info */}
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

        {/* Nav */}
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

        {/* Logout */}
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

        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <Image src="/logo.png" alt="ManéGuide" width={20} height={20} className="rounded-full" />
            <span className="font-bold text-foreground">ManéGuide</span>
          </Link>

          {/* Nav tabs (desktop) */}
          <nav aria-label="Navegação do parceiro" className="hidden items-center gap-1 md:flex">
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
            <Link
              href="/estabelecimento/eventos"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Eventos
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {/* Search */}
            <form role="search" aria-label="Buscar lugares na ilha" className="relative hidden sm:block">
              <label htmlFor="partner-search" className="sr-only">
                Buscar lugares na ilha
              </label>
              <input
                id="partner-search"
                type="search"
                placeholder="Buscar na ilha..."
                className="h-9 w-52 rounded-full border border-border bg-muted pl-4 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg aria-hidden="true" className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>

            <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20">
              <AvatarImage src={user.avatar} alt={displayName} />
              <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main id="conteudo-principal" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-4xl space-y-6">

            {/* Welcome banner */}
            <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/bonicos/pitch-(10).png"
                  alt="Mascote parceiro"
                  width={80}
                  height={80}
                  className="shrink-0 object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Bom dia, Parceiro!
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Pronto para agitar a ilha hoje? Seu estabelecimento está no radar dos manezinhos.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsEventModalOpen(true)}
                className="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Calendar className="h-4 w-4" />
                Cadastrar Evento
              </button>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickActions.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/30"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  {label}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-6 py-4">
                <LayoutDashboard className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-foreground">Desempenho Geral</h2>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
                {stats.map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 bg-card p-6">
                    <Icon className={cn("h-5 w-5", color)} />
                    <span className="text-2xl font-bold text-foreground">{value}</span>
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meus estabelecimentos */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-foreground">Meus Estabelecimentos</h2>
                </div>
                <button type="button" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  <Plus className="h-3.5 w-3.5" />
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

            {/* Eventos */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-foreground">Meus Eventos</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(true)}
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
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
                    <div className="flex items-center gap-2">
                      <button type="button" aria-label={`Editar evento ${event.name}`} className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button type="button" aria-label={`Excluir evento ${event.name}`} className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {mockEvents.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <Calendar className="h-10 w-10 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">Nenhum evento cadastrado ainda.</p>
                  <button
                    type="button"
                    onClick={() => setIsEventModalOpen(true)}
                    className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Criar primeiro evento
                  </button>
                </div>
              )}
            </div>

            {/* Ver perfil público */}
            <Link
              href="/"
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4 transition-colors hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Ver perfil público</p>
                  <p className="text-sm text-muted-foreground">Veja como seu estabelecimento aparece para os manezinhos</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-3">
          <div className="flex flex-col items-center justify-between gap-1 text-xs text-muted-foreground sm:flex-row">
            <span className="font-semibold text-foreground">ManéGuide</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground">Privacidade</Link>
              <Link href="#" className="hover:text-foreground">Termos</Link>
              <Link href="#" className="hover:text-foreground">Sobre Nós</Link>
              <Link href="#" className="hover:text-foreground">Contato</Link>
            </div>
            <span>© 2026 ManéGuide - Feito com sotaque em Floripa.</span>
          </div>
        </footer>
      </div>

      {/* Modal Cadastrar Evento */}
      <Dialog open={isEventModalOpen} onOpenChange={setIsEventModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl font-bold">
              <Calendar className="h-5 w-5 text-primary" />
              Cadastrar Novo Evento
            </DialogTitle>
            <DialogDescription className="sr-only">
              Preencha os dados do evento para publicar no painel do parceiro.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateEvent} className="space-y-4">
            {/* Nome do evento */}
            <div className="space-y-1.5">
              <label htmlFor="partner-event-name" className="text-sm font-medium text-foreground">
                Nome do evento
              </label>
              <input
                id="partner-event-name"
                type="text"
                value={eventForm.name}
                onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
                placeholder="Ex: Jazz & Ostras"
                className="h-10 w-full rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="partner-event-date" className="text-sm font-medium text-foreground">
                  Data
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="partner-event-date"
                    type="date"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="partner-event-time" className="text-sm font-medium text-foreground">
                  Horário
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="partner-event-time"
                    type="time"
                    value={eventForm.time}
                    onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                    className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Local */}
            <div className="space-y-1.5">
              <label htmlFor="partner-event-local" className="text-sm font-medium text-foreground">
                Local
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="partner-event-local"
                  type="text"
                  value={eventForm.local}
                  onChange={(e) => setEventForm({ ...eventForm, local: e.target.value })}
                  placeholder="Ex: Lagoa da Conceicao"
                  className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Descricao */}
            <div className="space-y-1.5">
              <label htmlFor="partner-event-description" className="text-sm font-medium text-foreground">
                Descricao
              </label>
              <textarea
                id="partner-event-description"
                value={eventForm.description}
                onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                placeholder="Conte um pouco sobre o evento..."
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Adicionar imagem */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <ImagePlus className="h-5 w-5" />
              Adicionar imagem de capa
            </button>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setIsEventModalOpen(false)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Criar Evento
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
