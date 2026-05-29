"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlaceCard } from "@/components/place-card"
import {
  MapPin,
  Calendar,
  Heart,
  MessageSquare,
  Star,
  Settings,
  Camera,
  Award,
  TrendingUp,
  Bookmark,
} from "lucide-react"

const userStats = {
  posts: 23,
  likes: 156,
  favoritos: 12,
  badges: 4,
}

const recentActivity = [
  {
    id: 1,
    type: "post",
    text: "Compartilhou uma dica sobre Lagoa da Conceicao",
    time: "2h atras",
  },
  {
    id: 2,
    type: "like",
    text: "Curtiu um post de @mariafloripa",
    time: "5h atras",
  },
  {
    id: 3,
    type: "favorite",
    text: "Salvou Bar do Arante nos favoritos",
    time: "1d atras",
  },
]

const badges = [
  { id: 1, name: "Explorador", icon: "🗺️", desc: "Visitou 10 lugares" },
  { id: 2, name: "Manezinho", icon: "🏝️", desc: "Morador local verificado" },
  { id: 3, name: "Dica de Ouro", icon: "⭐", desc: "Post com 50+ curtidas" },
  { id: 4, name: "Primeiro Post", icon: "✨", desc: "Criou o primeiro post" },
]

const favoritos = [
  {
    id: "lagoa-conceicao",
    name: "Lagoa da Conceicao",
    description: "O coracao da ilha com restaurantes, bares e esportes nauticos.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    rating: 4.8,
  },
  {
    id: "bar-do-arante",
    name: "Bar do Arante",
    description: "Tradicional bar na praia do Pantano do Sul com frutos do mar.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    rating: 4.6,
  },
  {
    id: "praia-mole",
    name: "Praia Mole",
    description: "Praia com ondas perfeitas para surf e clima jovem.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    rating: 4.7,
  },
]

export default function PerfilPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/entrar?modo=usuario")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Profile Header */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card">
          {/* Cover */}
          <div className="relative h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-orange-200/20 sm:h-40">
            <button className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition-colors hover:bg-background">
              <Camera className="h-3.5 w-3.5" />
              Editar capa
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6">
              {/* Avatar */}
              <div className="-mt-12 sm:-mt-16">
                <Avatar className="h-24 w-24 border-4 border-background sm:h-32 sm:w-32">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <div className="mt-4 flex-1 sm:mt-0 sm:pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      Florianopolis, SC
                    </p>
                  </div>
                  <Link
                    href="/perfil/editar"
                    className="flex w-fit items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <Settings className="h-4 w-4" />
                    Editar perfil
                  </Link>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Amante da ilha da magia. Sempre em busca dos melhores lugares escondidos de Floripa.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-4 gap-4 rounded-xl bg-muted/50 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{userStats.posts}</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{userStats.likes}</p>
                <p className="text-xs text-muted-foreground">Curtidas</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{userStats.favoritos}</p>
                <p className="text-xs text-muted-foreground">Favoritos</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{userStats.badges}</p>
                <p className="text-xs text-muted-foreground">Badges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Badges */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Minhas Conquistas</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4 text-center"
                  >
                    <span className="text-3xl">{badge.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{badge.name}</p>
                      <p className="text-xs text-muted-foreground">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favoritos */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Lugares Favoritos</h2>
                </div>
                <Link
                  href="/favoritos"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Ver todos
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {favoritos.map((place) => (
                  <PlaceCard
                    key={place.id}
                    id={place.id}
                    name={place.name}
                    description={place.description}
                    image={place.image}
                    rating={place.rating}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Atividade Recente</h2>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      {activity.type === "post" && <MessageSquare className="h-4 w-4 text-muted-foreground" />}
                      {activity.type === "like" && <Heart className="h-4 w-4 text-red-500" />}
                      {activity.type === "favorite" && <Star className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Member Since */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Membro desde</p>
                  <p className="text-xs text-muted-foreground">Janeiro de 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
