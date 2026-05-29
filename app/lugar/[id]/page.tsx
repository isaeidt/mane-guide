"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Heart,
  Share2,
  Clock,
  Star,
  Calendar,
  Music,
  ShoppingBag,
} from "lucide-react"

const placeData = {
  id: "lagoa-da-conceicao",
  name: "Lagoa da Conceição",
  location: "Centrinho da Lagoa, Florianópolis - SC",
  description: "O coração boêmio da ilha. Aqui você encontra de tudo: bares, restaurantes, lojas de artesanato e uma vista incrível da lagoa.",
  images: [
    "/lagoa/lagoa.jpg",
    "/lagoa/lagoa2.JPG",
    "/lagoa/lagoa1.JPG",
    "/lagoa/pousadas.jpg",
    "/lagoa/restaurante.jpg",
    "/lagoa/bicicleta.jpg",
  ],
  vibeLevel: 75,
  vibeComment: "Tá rodando aquele verinho sol clássico. Move a garota de chegando limite para outras!",
  hours: {
    weekdays: "09:00 - 00:00",
    weekend: "09:00 - 02:00",
    sunday: "Fechado",
  },
  tips: [
    {
      id: "1",
      author: "Dona Buce",
      avatar: "/bonicos/pitch-(8).png",
      content: "Morei no centrinho a vida toda. Se precisar de risco, é só aperitivos, se os lugares fechou.",
    },
    {
      id: "2",
      author: "Cléo Surf",
      avatar: "/bonicos/pitch-(9).png",
      content: "Meus anos na região e nenhuma vontade a sair. Tirar água e fazer trilhas que não estão em mapa do Google.",
    },
    {
      id: "3",
      author: "Gerard Way",
      avatar: "/bonicos/pitch-(10).png",
      content: "Perfeito pra curtir a vibe local e conhecer gente nova.",
    },
  ],
  events: [
    {
      id: "1",
      name: "Jazz na Praça",
      icon: Music,
      color: "bg-primary",
    },
    {
      id: "2",
      name: "Feira de Artesanato",
      icon: ShoppingBag,
      color: "bg-emerald-500",
    },
    {
      id: "3",
      name: "Show do BTS",
      icon: Music,
      color: "bg-secondary",
    },
  ],
}

export default function LugarPage({
  params,
}: {
  params: { id: string }
}) 
{
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

const nextImage = () => {
  if (selectedImage === null) return
  setSelectedImage((selectedImage + 1) % placeData.images.length)
}

const prevImage = () => {
  if (selectedImage === null) return
  setSelectedImage(
    (selectedImage - 1 + placeData.images.length) %
      placeData.images.length
  )
}

useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null)
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  window.addEventListener("keydown", handleKey)

  return () => {
    window.removeEventListener("keydown", handleKey)
  }
}, [selectedImage])
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl p-6">
        {/* Back Button */}
        <Link
          href="/explorar"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar
        </Link>

        {/* Location Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {placeData.name}
            </h1>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {placeData.location}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-border p-2 hover:bg-muted">
              <Heart className="h-5 w-5" />
            </button>

            <button className="rounded-full border border-border p-2 hover:bg-muted">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid h-[420px] grid-cols-3 gap-3 overflow-hidden rounded-3xl">
            {/* Imagem principal */}
            <button
              onClick={() => setSelectedImage(0)}
              className="relative col-span-2 h-full overflow-hidden rounded-3xl"
            >
              <Image
                src={placeData.images[0]}
                alt={placeData.name}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </button>

            {/* Coluna direita */}
            <div className="grid grid-rows-2 gap-3">
              {placeData.images.slice(1, 3).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i + 1)}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <Image
                    src={img}
                    alt={`Foto ${i + 2}`}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />

                  {i === 1 && placeData.images.length > 3 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                      <span className="text-lg font-semibold text-white">
                        +{placeData.images.length - 3} fotos
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Termômetro */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-semibold text-foreground">
                Termômetro de Vibe
              </h2>

              <div className="mb-3">
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-primary"
                    style={{ width: `${placeData.vibeLevel}%` }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-full bg-primary/10 p-2">
                  <Star className="h-5 w-5 text-primary" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {placeData.vibeComment}
                </p>
              </div>
            </div>

            {/* Dicas */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-foreground">
                  Dicas de Moradores
                </h2>

                <Link
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Ver Todas
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {placeData.tips.map((tip) => (
                  <div
                    key={tip.id}
                    className="rounded-xl bg-muted/50 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-primary/20">
                        <AvatarImage src={tip.avatar} alt={tip.author} />
                        <AvatarFallback>{tip.author.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <span className="text-sm font-medium">
                        {tip.author}
                      </span>
                    </div>

                    <p className="line-clamp-3 text-xs text-muted-foreground">
                      {tip.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Programação */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-semibold text-foreground">
                Programação da Semana
              </h2>

              <div className="grid gap-3 sm:grid-cols-3">
                {placeData.events.map((event) => (
                  <div
                    key={event.id}
                    className={`flex items-center gap-3 rounded-xl ${event.color} p-4 text-white`}
                  >
                    <event.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {event.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Horários */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">
                  Horários
                </h2>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Seg - Sex
                  </span>

                  <span className="font-medium">
                    {placeData.hours.weekdays}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Sábado
                  </span>

                  <span className="font-medium">
                    {placeData.hours.weekend}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Domingo
                  </span>

                  <span className="font-medium text-red-500">
                    {placeData.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Confortômetro */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-semibold text-foreground">
                Confortômetro
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {[
                  "Wi-Fi",
                  "Estacionamento",
                  "Pet Friendly",
                  "Acessível",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal da galeria */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative h-[85vh] w-full max-w-6xl">
            <Image
              src={placeData.images[selectedImage]}
              alt="Galeria"
              fill
              className="object-contain"
            />
          </div>

          {/* Miniaturas */}
          <div className="absolute bottom-6 flex gap-2 overflow-x-auto rounded-2xl bg-black/40 p-2 backdrop-blur">
            {placeData.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 ${
                  selectedImage === index
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
