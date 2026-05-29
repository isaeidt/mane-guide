"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, MapPin, Heart, Share2, Clock, Star } from "lucide-react"
import type { Place } from "@/lib/places"

export default function PlaceDetail({ place }: { place: Place }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const gallery = place.images?.length ? place.images : [place.image, place.image, place.image]

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mg:favorites")
      const favs: string[] = raw ? JSON.parse(raw) : []
      setIsFavorited(favs.includes(place.id))
    } catch {
      // ignore
    }
  }, [place.id])

  const toggleFavorite = () => {
    try {
      const raw = localStorage.getItem("mg:favorites")
      const favs: string[] = raw ? JSON.parse(raw) : []
      const next = favs.includes(place.id)
        ? favs.filter((x) => x !== place.id)
        : [...favs, place.id]
      localStorage.setItem("mg:favorites", JSON.stringify(next))
      setIsFavorited(next.includes(place.id))
    } catch {
      // ignore
    }
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <Link
        href="/explorar"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar
      </Link>

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{place.name}</h1>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {place.location || place.category}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFavorite}
            className="rounded-full border border-border p-2 hover:bg-muted"
            aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart className={`h-5 w-5 ${isFavorited ? "fill-primary text-primary" : ""}`} />
          </button>

          <button className="rounded-full border border-border p-2 hover:bg-muted">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-8 grid gap-3 lg:h-[420px] lg:grid-cols-3">
        <div className="relative h-72 overflow-hidden rounded-3xl lg:col-span-2 lg:h-full">
          <Image
            src={gallery[0]}
            alt={place.name}
            fill
            className="object-cover transition duration-300 hover:scale-105"
            priority
            loading="eager"
          />
        </div>

        <div className="grid gap-3 lg:grid-rows-2">
          <div className="relative h-36 overflow-hidden rounded-3xl lg:h-full">
            <Image
              src={gallery[1] || gallery[0]}
              alt={`${place.name} - foto 2`}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative h-36 overflow-hidden rounded-3xl lg:h-full">
            <Image
              src={gallery[2] || gallery[0]}
              alt={`${place.name} - foto 3`}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
            {gallery.length > 3 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 text-sm font-semibold text-white">
                +{gallery.length - 3} fotos
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">Termômetro de Vibe</h2>
            <div className="mb-3">
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-primary"
                  style={{ width: `${place.vibeLevel ?? 75}%` }}
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-full bg-primary/10 p-2">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                {place.vibeComment || place.description}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">Sobre</h2>
            <p className="text-sm text-muted-foreground">{place.description}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="font-semibold text-foreground">Dicas de Moradores</h2>
              <Link href="#" className="text-sm text-primary hover:underline">
                Ver Todas
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {(place.tips || []).map((tip) => (
                <div key={tip.id} className="rounded-xl bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Avatar className="h-8 w-8 border-2 border-primary/20">
                      <AvatarImage src={tip.avatar} alt={tip.author} />
                      <AvatarFallback>{tip.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{tip.author}</span>
                  </div>
                  <p className="line-clamp-3 text-xs text-muted-foreground">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">Programação da Semana</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {(place.events || []).map((event) => (
                <div key={event.id} className={`flex items-center gap-3 rounded-xl ${event.color} p-4 text-white`}>
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-medium">{event.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Horários</h2>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-muted-foreground">Seg - Sex</span>
                <span className="font-medium">{place.hours?.weekdays || "Livre acesso"}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted-foreground">Sábado</span>
                <span className="font-medium">{place.hours?.weekend || "Livre acesso"}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted-foreground">Domingo</span>
                <span className="font-medium text-red-500">{place.hours?.sunday || "Livre acesso"}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">Confortômetro</h2>
            <div className="grid grid-cols-2 gap-2">
              {(place.comfort || ["Wi-Fi", "Estacionamento", "Pet Friendly", "Acessível"]).map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
