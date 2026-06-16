import Image from "next/image"
import { Header } from "@/components/header"
import { Calendar, MapPin, Clock, ChevronRight, Bookmark } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eventos",
}

const filters = [
  { label: "Todos", active: true },
  { label: "Esta Semana", active: false },
  { label: "Este Mês", active: false },
  { label: "Gratuitos", active: false },
]

const events = [
  {
    id: "1",
    name: "Jazz & Ostras",
    date: "Hoje, 19:00",
    location: "Lagoa da Conceição",
    image: "/jazz.jpg",
    category: "Música",
    featured: true,
  },
  {
    id: "2",
    name: "Feirinha da Lagoa",
    date: "Domingo, 09:00 - 17:00",
    location: "Santo Antônio de Lisboa",
    image: "/santo_antonio.jpg",
    category: "Feira",
    featured: false,
  },
  {
    id: "3",
    name: "Happy Hour Manézinho",
    date: "Quinta, 17:00",
    location: "Barra da Lagoa",
    image: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=800&q=80",
    category: "Social",
    featured: false,
  },
  {
    id: "4",
    name: "Pôr do Sol no Deck",
    date: "Sexta, 18:00",
    location: "Praia Brava",
    image: "/por_sol.jpg",
    category: "Natureza",
    featured: false,
  },
  {
    id: "5",
    name: "Trilha Noturna",
    date: "Sábado, 20:00",
    location: "Ratones",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Aventura",
    featured: false,
  },
  {
    id: "6",
    name: "Festival de Ostras",
    date: "Próxima Semana",
    location: "Ribeirão da Ilha",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    category: "Gastronomia",
    featured: false,
  },
]

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="conteudo-principal" tabIndex={-1} className="mx-auto max-w-6xl p-6">
        {/* Page Header com mascote coelho */}
        <div className="mb-6 flex items-end gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Eventos na Ilha</h1>
            <p className="text-muted-foreground">
              Descubra o que está rolando em Floripa
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/bonicos/pitch-(10).png"
              alt="Mascote com programa na mão"
              width={170}
              height={170}
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              aria-pressed={filter.active}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Event — sem gradiente */}
        {events.filter(e => e.featured).map((event) => (
          <div key={event.id} className="mb-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-52 w-full md:h-auto md:w-96 shrink-0">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Em Destaque
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <h2 className="mb-3 text-2xl font-bold text-foreground">{event.name}</h2>
                <div className="mb-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>
                <button type="button" className="flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  Ver Detalhes
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Events Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.filter(e => !e.featured).map((event) => (
            <div
              key={event.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {event.category}
                </span>
                <button type="button" aria-label={`Salvar evento ${event.name}`} className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm hover:bg-white">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-foreground">{event.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
