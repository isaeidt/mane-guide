"use client"

import { useState, useCallback } from "react"

const STORAGE_KEY = "mg:favorites"
const CSAT_SHOWN_KEY = "mg:csat-shown"

function loadFavorites(): string[] {
  if (typeof window === "undefined") return []

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveFavorites(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  window.dispatchEvent(new Event("mg:favorites-changed"))
}

function hasCsatBeenShown(): boolean {
  if (typeof window === "undefined") return false
  return sessionStorage.getItem(CSAT_SHOWN_KEY) === "true"
}

function markCsatShown() {
  sessionStorage.setItem(CSAT_SHOWN_KEY, "true")
}

type CsatTarget = {
  id: string
  name: string
}

export function useFavoriteWithCsat() {
  const [favorites, setFavorites] = useState<string[]>(loadFavorites)
  const [csatTarget, setCsatTarget] = useState<CsatTarget | null>(null)

  const toggleFavorite = useCallback((id: string, name: string) => {
    const current = loadFavorites()
    const isSaved = current.includes(id)

    const updated = isSaved
      ? current.filter((f) => f !== id)
      : [...current, id]

    saveFavorites(updated)
    setFavorites(updated)

    if (!isSaved && !hasCsatBeenShown()) {
      setCsatTarget({ id, name })
      markCsatShown()
    }
  }, [])

  const closeCsat = useCallback(() => {
    setCsatTarget(null)
  }, [])

  return {
    favorites,
    toggleFavorite,
    csatTarget,
    closeCsat,
  }
}