import Image from "next/image"
import { Header } from "@/components/header"
import { PlaceCard } from "@/components/place-card"
import { Grid, List } from "lucide-react"

const filters = [
  { label: "Recentes", active: true },
  { label: "Bem Avaliados", active: false },
  { label: "Bom p/ Vibe", active: false },
  { label: "Prog. Semana", active: false },
]

const categoryFilters = [
  { label: "Todos", count: 12, active: true },
  { label: "Praias", count: 4, active: false },
  { label: "Trilhas", count: 3, active: false },
  { label: "Gastronomia", count: 5, active: false },
]

const places = [
  {
    id: "praia-do-gravata",
    name: "Praia do Gravatá",
    description: "A trilha é curta mas íngreme. Lá embaixo, você encontra uma vila de pescadores que parou...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "PASSEIO",
    rating: 4.9,
  },
  {
    id: "canto-do-moreira",
    name: "Canto do Moreira",
    description: "Onde os surfistas locais se escondem quando a Praia Mole está cheia. Ondas fortes e...",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    category: "LADO B CLÁSSICO",
    tags: ["Surf Pro"],
  },
  {
    id: "trilha-da-lagoinha",
    name: "Trilha da Lagoinha",
    description: "Um paraíso escondido que vale cada gota de suor. Leve água e protetor.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "PASSEIO",
    difficulty: "medium" as const,
  },
  {
    id: "jazz-e-ostras",
    name: "Jazz & Ostras",
    description: "Evento especial com música ao vivo e ostras frescas do Ribeirão.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "GASTRONOMIA",
    rating: 4.8,
  },
  {
    id: "feirinha-da-lagoa",
    name: "Feirinha da Lagoa",
    description: "Artesanato local, comidas típicas e muita música boa. Todo domingo!",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "CULTURAL",
    rating: 4.6,
  },
  {
    id: "por-do-sol-deck",
    name: "Pôr do Sol no Deck",
    description: "O melhor lugar pra ver o sol se despedir. Chegue cedo e leve um vinho.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    category: "LADO B CLÁSSICO",
    rating: 4.7,
  },
]

export default function LadoBPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {/* Page Header com mascote urso com mapa */}
        <div className="mb-6 flex items-end gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">O que tá rolando na Ilha?</h1>
            <p className="text-muted-foreground">
              Esqueça as filas de Jurerê ou o trânsito da Lagoa. Aqui a gente te leva pros picos que não estão no GPS do turista comum. Senta que lá vem história!
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/bonicos/pitch-(4).png"
              alt="Mascote com mapa"
              width={110}
              height={110}
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

        {/* Content */}
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="hidden w-48 shrink-0 lg:block">
            <h3 className="mb-3 font-semibold text-foreground">Categorias</h3>
            <ul className="space-y-1">
              {categoryFilters.map((cat) => (
                <li key={cat.label}>
                  <button
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      cat.active
                        ? "bg-sidebar-accent text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {cat.label}
                    <span className="text-xs">{cat.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Places Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Mostrando {places.length} lugares
              </p>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-muted p-2">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="rounded-lg p-2 text-muted-foreground hover:bg-muted">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {places.map((place) => (
                <PlaceCard key={place.id} {...place} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
