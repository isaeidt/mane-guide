"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface PlaceCardProps {
  id: string
  name: string
  description: string
  image: string
  category?: string
  rating?: number
  tags?: string[]
  difficulty?: "easy" | "medium" | "hard"
  className?: string
}

const categoryColors: Record<string, string> = {
  PASSEIO: "bg-primary text-primary-foreground",
  CULTURAL: "bg-secondary text-secondary-foreground",
  "LADO B CLÁSSICO": "bg-orange-600 text-white",
  GASTRONOMIA: "bg-emerald-500 text-white",
  NATUREZA: "bg-green-600 text-white",
  Praia: "bg-sky-600 text-white",
  Trilha: "bg-green-700 text-white",
  Gastronomia: "bg-emerald-600 text-white",
  Mirante: "bg-amber-600 text-white",
  Cultural: "bg-indigo-600 text-white",
  Natureza: "bg-lime-600 text-white",
  Noite: "bg-rose-600 text-white",
  Família: "bg-teal-600 text-white",
}

export function PlaceCard({
  id,
  name,
  description,
  image,
  category,
  rating,
  tags,
  difficulty,
  className,
}: PlaceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  // load initial favorite state from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("mg:favorites")
      if (!raw) return
      const favs: string[] = JSON.parse(raw)
      setIsFavorited(favs.includes(id))
    } catch (e) {
      // ignore
    }
  }, [id])

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const next = !isFavorited
    setIsFavorited(next)

    try {
      const raw = localStorage.getItem("mg:favorites")
      const favs: string[] = raw ? JSON.parse(raw) : []

      let updated: string[]
      if (next) {
        updated = Array.from(new Set([...favs, id]))
      } else {
        updated = favs.filter((x) => x !== id)
      }

      localStorage.setItem("mg:favorites", JSON.stringify(updated))
      window.dispatchEvent(new Event("mg:favorites-changed"))
    } catch (e) {
      // ignore
    }
  }

  return (
    <Link
      href={`/lugar/${encodeURIComponent(id)}`}
      className={cn(
        "group block overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {category && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium",
              categoryColors[category] || "bg-primary text-primary-foreground"
            )}
          >
            {category}
          </span>
        )}
        <button
          className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white"
          onClick={handleFavorite}
          aria-label={isFavorited ? "Remover dos itens salvos" : "Adicionar aos itens salvos"}
        >
          <Bookmark
            className={cn(
              "h-4 w-4",
              isFavorited ? "fill-primary text-primary" : "text-foreground"
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground line-clamp-1">{name}</h3>
          <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
          {difficulty && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-xs font-medium",
                difficulty === "easy" && "bg-green-100 text-green-700",
                difficulty === "medium" && "bg-yellow-100 text-yellow-700",
                difficulty === "hard" && "bg-red-100 text-red-700"
              )}
            >
              {difficulty === "easy" && "Fácil"}
              {difficulty === "medium" && "Médio"}
              {difficulty === "hard" && "Difícil"}
            </span>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
