import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { PlaceCard } from "@/components/place-card"
import { CommunityPost } from "@/components/community-post"
import {
  Compass,
  Utensils,
  Waves,
  Camera,
  Music,
  ChevronRight,
} from "lucide-react"

const categories = [
  {
    icon: Compass,
    label: "Descobertas",
    color: "bg-orange-100 text-primary",
  },
  {
    icon: Utensils,
    label: "Gastro",
    color: "bg-orange-100 text-primary",
  },
  {
    icon: Waves,
    label: "Praias",
    color: "bg-blue-100 text-secondary",
  },
  {
    icon: Camera,
    label: "Mirantes",
    color: "bg-orange-100 text-primary",
  },
  {
    icon: Music,
    label: "Cultura",
    color: "bg-orange-100 text-primary",
  },
]

const featuredPlaces = [
  {
    id: "ponte-hercilio-luz",
    name: "Ponte Hercílio Luz: A Travessia a pé",
    description:
      "Cruze a velha senhora no pôr do sol é obrigatório, mas poucos sabem que as plantas do...",
    image: "/hercilioluz.jpg",
    category: "PASSEIO",
  },
  {
    id: "praia-do-gravata",
    name: "Praia do Gravatá",
    description:
      "Um paraíso escondido que vale a trilha. Perfeito pra quem quer sossego.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "PASSEIO",
  },
  {
    id: "ostras-no-ribeirao",
    name: "Ostras no Ribeirão",
    description:
      "Experimente as melhores ostras frescas direto do produtor, um segredo dos locais.",
    image:
      "/ostras.jpg",
    category: "GASTRONOMIA",
  },
]

const communityPosts = [
  {
    id: "1",
    author: {
      name: "João Pescador",
      avatar:
        "/bonicos/pitch-(8).png",
      role: "Morador Local",
    },
    content:
      "Ô turista, hoje tá muito bom pra passear de canoa no rio da pratelinha! Maré cheia até às 15h, depois o rio vira um espelho.",
    likes: 24,
    comments: 8,
  },
  {
    id: "2",
    author: {
      name: "Dona Maristela",
      avatar:
        "/bonicos/pitch-(9).png",
      role: "Morador Local",
    },
    content:
      "Morei por 40 anos na região. Recomendo a trilha da Lagoinha, uma paisagem absurda que não está no GPS de turista comum.",
    likes: 48,
    comments: 12,
  },
  {
    id: "3",
    author: {
      name: "Jorge Ciclista",
      avatar:
        "/bonicos/pitch-(10).png",
      role: "Morador Local",
    },
    content:
      "Dica: Bar é o melhor ponto no centro de Floripa, bebida gelada e comida boa. Perfeito pra ver o pôr do sol.",
    likes: 35,
    comments: 6,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        {/* Hero Section */}
        <section className="mb-8 overflow-hidden rounded-3xl">
          <div className="relative h-72 w-full">
            <Image
              src="/capa.jpg"
              alt="Florianópolis vista aérea"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h1 className="mb-2 text-3xl font-bold leading-tight text-white text-balance">
                Explore Floripa como um verdadeiro Manézinho!
              </h1>

              <p className="mb-5 text-sm text-white/85">
                Dicas secretas e as melhores ostras do Ribeirão, te leva pela
                alma da Ilha da Magia.
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lado B de Floripa */}
        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Lado B de Floripa
              </h2>

              <p className="text-sm text-muted-foreground">
                Fuja do óbvio e descubra os segredos da ilha.
              </p>
            </div>

            <Link
              href="/lado-b"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Ver tudo
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} {...place} />
            ))}
          </div>
        </section>

        {/* Feed da Comunidade */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Feed da Comunidade
              </h2>

              <p className="text-sm text-muted-foreground">
                Veja o que tá rolando por aqui!
              </p>
            </div>

            <Link
              href="/comunidade"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Ver tudo
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {communityPosts.map((post) => (
              <CommunityPost key={post.id} {...post} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-6 py-4">
        <div className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p className="font-semibold text-foreground">
            ManéGuide
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Privacidade
            </Link>

            <Link href="#" className="hover:text-foreground">
              Termos
            </Link>

            <Link href="#" className="hover:text-foreground">
              Sobre Nós
            </Link>

            <Link href="#" className="hover:text-foreground">
              Suporte
            </Link>
          </div>

          <p>© 2026 ManéGuide · Feito com carinho em Floripa</p>
        </div>
      </footer>
    </div>
  )
}