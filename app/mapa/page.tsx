import { Header } from "@/components/header"
import { MapPin, Layers, Navigation } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mapa",
}

const mapCategories = [
  { label: "Todos", color: "bg-primary", active: true },
  { label: "Praias", color: "bg-blue-500", active: false },
  { label: "Trilhas", color: "bg-green-500", active: false },
  { label: "Gastro", color: "bg-orange-500", active: false },
  { label: "Cultural", color: "bg-purple-500", active: false },
]

const nearbyPlaces = [
  { id: "1", name: "Lagoa da Conceição", distance: "2.3 km", type: "Cultural" },
  { id: "2", name: "Praia do Gravatá", distance: "5.1 km", type: "Praia" },
  { id: "3", name: "Bar do Mané", distance: "1.2 km", type: "Gastro" },
]

export default function MapaPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="conteudo-principal" tabIndex={-1} className="relative h-[calc(100vh-64px)]">
        {/* Map Background */}
        <div className="absolute inset-0 bg-[#e8e0d5]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-16 w-16 text-primary/30" />
              <p className="mt-4 text-lg text-muted-foreground">
                Mapa interativo em breve
              </p>
              <p className="text-sm text-muted-foreground">
                Explore todos os pontos da ilha de Florianópolis
              </p>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute left-4 top-4 z-10">
          <div className="rounded-2xl bg-card p-4 shadow-lg">
            <h2 className="mb-3 font-semibold text-foreground">Filtrar por categoria</h2>
            <div className="flex flex-wrap gap-2">
              {mapCategories.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  aria-pressed={cat.active}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${
                    cat.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${cat.color}`} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div className="absolute bottom-4 left-4 right-4 z-10 md:left-auto md:right-4 md:w-80">
          <div className="rounded-2xl bg-card p-4 shadow-lg">
            <div className="mb-3 flex items-center gap-2">
              <Navigation className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Perto de você</h2>
            </div>
            <div className="space-y-3">
              {nearbyPlaces.map((place) => (
                <div
                  key={place.id}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{place.name}</p>
                    <p className="text-xs text-muted-foreground">{place.type}</p>
                  </div>
                  <span className="text-sm font-medium text-primary">{place.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Layer Controls */}
        <div className="absolute right-4 top-4 z-10">
          <button type="button" aria-label="Abrir camadas do mapa" className="rounded-xl bg-card p-2.5 shadow-lg hover:bg-muted">
            <Layers className="h-5 w-5" />
          </button>
        </div>
      </main>
    </div>
  )
}
