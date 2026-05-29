import Image from "next/image"
import { Header } from "@/components/header"
import { PlaceCard } from "@/components/place-card"
import { Search, SlidersHorizontal } from "lucide-react"

const filters = [
  { label: "Todos", active: true },
  { label: "Praias", active: false },
  { label: "Trilhas", active: false },
  { label: "Gastro", active: false },
  { label: "Mirantes", active: false },
  { label: "Cultural", active: false },
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
    id: "caminho-dos-acores",
    name: "Caminho dos Açores",
    description: "Uma ruela escondida em Santo Antônio de Lisboa que guarda a arquitetura original e o café...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "CULTURAL",
    tags: ["A+"],
  },
  {
    id: "pedra-do-urubu",
    name: "Pedra do Urubu",
    description: "Subida curta pela Guarda do Embaú. A vista do Rio da Madre encontrando o mar é algo que...",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "PASSEIO",
    difficulty: "easy" as const,
  },
  {
    id: "ilha-do-campeche",
    name: "Ilha do Campeche",
    description: "Águas cristalinas e sítio arqueológico. Reserve o barco cedo pra garantir a vaga.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    category: "PASSEIO",
    rating: 4.8,
  },
  {
    id: "bar-do-mane",
    name: "Bar do Mané",
    description: "Onde o botequim é mais famoso que a cerveja gelada. Petiscos tradicionais da ilha.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "GASTRONOMIA",
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
    id: "por-do-sol-deck",
    name: "Pôr do Sol no Deck",
    description: "O melhor lugar pra ver o sol se despedir. Chegue cedo e leve um vinho.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    category: "LADO B CLÁSSICO",
    rating: 4.7,
  },
]

export default function ExplorarPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {/* Page Header com mascote urso mochila */}
        <div className="mb-6 flex items-end gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Lado B de Floripa</h1>
            <p className="text-muted-foreground">
              Esqueça as filas de Jurerê ou o trânsito da Lagoa. Aqui a gente te leva pros picos que não estão no GPS de turista comum. Senta que lá vem história!
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/bonicos/pitch-(4).png"
              alt="Mascote explorando com mapa"
              width={110}
              height={110}
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar lugares..."
              className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
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
            <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {places.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </main>
    </div>
  )
}
