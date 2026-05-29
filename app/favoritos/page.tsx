"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { PlaceCard } from "@/components/place-card"
import { Search, Grid, List } from "lucide-react"
import { places } from "@/lib/places"

type FavoriteCard = {
  id: string
  name: string
  description: string
  image: string
  category?: string
  rating?: number
  tags?: string[]
  difficulty?: "easy" | "medium" | "hard"
}

const extraFavoritePlaces: FavoriteCard[] = [
  {
    id: "ostras-no-ribeirao",
    name: "Ostras no Ribeirão",
    description: "Experimente as melhores ostras frescas direto do produtor, um segredo dos locais.",
    image: "/ostras.jpg",
    category: "GASTRONOMIA",
  },
  {
    id: "jazz-e-ostras",
    name: "Jazz & Ostras",
    description: "Evento especial com música ao vivo e ostras frescas do Ribeirão.",
    image: "/jazz.jpg",
    category: "GASTRONOMIA",
    rating: 4.8,
  },
  {
    id: "por-do-sol-deck",
    name: "Pôr do Sol no Deck",
    description: "O melhor lugar pra ver o sol se despedir. Chegue cedo e leve um vinho.",
    image: "/por_sol.jpg",
    category: "LADO B CLÁSSICO",
    rating: 4.7,
  },
  {
    id: "trilha-lagoinha",
    name: "Trilha da Lagoinha",
    description: "Um paraíso escondido que vale cada gota de suor. Leve água e protetor solar.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    rating: 4.7,
  },
  {
    id: "lagoa-conceicao",
    name: "Lagoa da Conceicao",
    description: "O coracao da ilha com restaurantes, bares e esportes nauticos.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    rating: 4.8,
  },
  {
    id: "praia-mole",
    name: "Praia Mole",
    description: "Praia com ondas perfeitas para surf e clima jovem.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    rating: 4.7,
  },
]

const favoriteCatalog = Array.from(
  new Map(
    [...places, ...extraFavoritePlaces].map((place) => [place.id, place])
  ).values()
)

export default function FavoritosPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const raw = localStorage.getItem("mg:favorites")
        const parsed = raw ? JSON.parse(raw) : []
        setFavoriteIds(Array.isArray(parsed) ? parsed : [])
      } catch {
        setFavoriteIds([])
      }
    }

    loadFavorites()

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "mg:favorites") {
        loadFavorites()
      }
    }

    const handleFavoritesChanged = () => {
      loadFavorites()
    }

    window.addEventListener("storage", handleStorage)
    window.addEventListener("mg:favorites-changed", handleFavoritesChanged)

    return () => {
      window.removeEventListener("storage", handleStorage)
      window.removeEventListener("mg:favorites-changed", handleFavoritesChanged)
    }
  }, [])

  const favoritePlaces = useMemo(
    () => favoriteCatalog.filter((place) => favoriteIds.includes(place.id)),
    [favoriteIds]
  )

  const filteredPlaces = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) return favoritePlaces

    return favoritePlaces.filter((place) => {
      const haystack = [place.name, place.description, place.category, ...(place.tags ?? [])]
        .join(" ")
        .toLowerCase()

      return haystack.includes(query)
    })
  }, [favoritePlaces, searchQuery])

  const favoriteFilters = [
    { label: "Todos", count: favoritePlaces.length, active: true },
    {
      label: "Praias",
      count: favoritePlaces.filter((place) => place.category === "Praia").length,
      active: false,
    },
    {
      label: "Trilhas",
      count: favoritePlaces.filter((place) => place.category === "Trilha").length,
      active: false,
    },
    {
      label: "Mirantes",
      count: favoritePlaces.filter((place) => place.category === "Mirante").length,
      active: false,
    },
  ]

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
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
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
                {filteredPlaces.length} de {favoritePlaces.length} lugares salvos
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

            {filteredPlaces.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPlaces.map((place) => (
                  <PlaceCard key={place.id} {...place} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <h2 className="text-lg font-semibold text-foreground">
                  Nenhum favorito ainda
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Marca um lugar com o ícone de favorito em qualquer card e ele vai aparecer aqui.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
