import Image from "next/image"
import { Header } from "@/components/header"
import { PlaceCard } from "@/components/place-card"
import { Search, Grid, List } from "lucide-react"

const favoriteFilters = [
  { label: "Todos", count: 12, active: true },
  { label: "Praias", count: 4, active: false },
  { label: "Trilhas", count: 3, active: false },
  { label: "Artesanato", count: 5, active: false },
]

const favoritePlaces = [
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
    id: "santo-antonio",
    name: "Santo Antônio",
    description: "Caminhar por aqui é voltar ao tempo das colonizações açorianas. Perfeito pra...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "CULTURAL",
    rating: 4.4,
  },
]

export default function FavoritosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {/* Page Header */}
        <div className="mb-8 flex items-end gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Meus Picos Salvos</h1>
            <p className="text-muted-foreground">
              Aqui é onde tu guarda o tesouro da ilha, desde a trilha secreta até aquele caldo de cana nota dez.
            </p>
          </div>
          {/* Mascote urso preto relaxando */}
          <div className="hidden lg:block">
            <Image
              src="/bonicos/pitch-(8).png"
              alt="Mascote relaxando"
              width={120}
              height={120}
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar nos favoritos..."
              className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="hidden w-48 shrink-0 lg:block">
            <ul className="space-y-1">
              {favoriteFilters.map((filter) => (
                <li key={filter.label}>
                  <button
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      filter.active
                        ? "bg-sidebar-accent text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {filter.label}
                    <span className="text-xs">{filter.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Places Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {favoritePlaces.length} lugares salvos
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
              {favoritePlaces.map((place) => (
                <PlaceCard key={place.id} {...place} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
