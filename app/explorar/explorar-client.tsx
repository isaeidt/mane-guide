"use client"

import Image from "next/image"
import { PlaceCard } from "@/components/place-card"
import { Grid, List, Filter, X, ChevronLeft, ChevronRight } from "lucide-react"
import { places as allPlaces, Place } from "@/lib/places"
import { useSearchParams, useRouter } from "next/navigation"
import { useMemo, useState, useCallback } from "react"
import Link from "next/link"
import Footer from "@/components/footer"


export function ExplorarClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Estados de filtro (temporários)
  const [tempCategory, setTempCategory] = useState<string | null>(
    searchParams?.get("category") || null
  )
  const [tempPrice, setTempPrice] = useState<number | null>(
    searchParams?.get("price") ? Number(searchParams.get("price")) : null
  )
  const [tempSocialTags, setTempSocialTags] = useState<string[]>(
    searchParams?.getAll("social") || []
  )
  const [tempInterests, setTempInterests] = useState<string[]>(
    searchParams?.getAll("interest") || []
  )
  const [tempQuery, setTempQuery] = useState(
    searchParams?.get("query") || ""
  )

  // Estados de filtro (aplicados)
  const [category, setCategory] = useState<string | null>(
    searchParams?.get("category") || null
  )
  const [price, setPrice] = useState<number | null>(
    searchParams?.get("price") ? Number(searchParams.get("price")) : null
  )
  const [socialTags, setSocialTags] = useState<string[]>(
    searchParams?.getAll("social") || []
  )
  const [interests, setInterests] = useState<string[]>(
    searchParams?.getAll("interest") || []
  )
  const [query, setQuery] = useState(
    searchParams?.get("query") || ""
  )

  const [layout, setLayout] = useState("grid")
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 12

  // Memoização das categorias e interesses disponíveis
  const categories = useMemo(
    () => Array.from(new Set(allPlaces.map((p) => p.category))),
    []
  )
  const allInterests = useMemo(
    () => Array.from(new Set(allPlaces.flatMap((p) => p.interests))),
    []
  )

  // Função para aplicar os filtros
  const applyFilters = useCallback(() => {
    setCategory(tempCategory)
    setPrice(tempPrice)
    setSocialTags(tempSocialTags)
    setInterests(tempInterests)
    setQuery(tempQuery)
    setCurrentPage(1) // Volta para a primeira página ao aplicar filtros
    
    const params = new URLSearchParams()
    if (tempQuery) params.set("query", tempQuery)
    if (tempCategory) params.set("category", tempCategory)
    if (tempPrice) params.set("price", String(tempPrice))
    tempSocialTags.forEach((s) => params.append("social", s))
    tempInterests.forEach((i) => params.append("interest", i))
    
    router.replace(`/explorar?${params.toString()}`)
    setIsFiltersVisible(false)
  }, [tempCategory, tempPrice, tempSocialTags, tempInterests, tempQuery, router])

  // Função para limpar todos os filtros
  const clearFilters = useCallback(() => {
    setTempCategory(null)
    setTempPrice(null)
    setTempSocialTags([])
    setTempInterests([])
    setTempQuery("")
    
    setCategory(null)
    setPrice(null)
    setSocialTags([])
    setInterests([])
    setQuery("")
    setCurrentPage(1)
    
    router.replace("/explorar")
    setIsFiltersVisible(false)
  }, [router])

  // FILTRAGEM - mostra todos se não tiver filtros
  const filtered = useMemo(() => {
    let list: Place[] = [...allPlaces]

    const hasFilters = query?.trim() || category || price !== null || (socialTags && socialTags.length > 0) || (interests && interests.length > 0)

    if (!hasFilters) {
      return list
    }

    if (query?.trim()) {
      const q = query.toLowerCase().trim()
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.interests.some(i => i.toLowerCase().includes(q))
      )
    }

    if (category) {
      list = list.filter((p) => p.category === category)
    }

    if (price !== null) {
      list = list.filter((p) => p.priceLevel === price)
    }

    if (socialTags && socialTags.length > 0) {
      list = list.filter((p) => 
        socialTags.some((tag) => p.socialTags?.includes(tag as any))
      )
    }

    if (interests && interests.length > 0) {
      list = list.filter((p) => 
        interests.some((interest) => p.interests.includes(interest as any))
      )
    }

    return list
  }, [query, category, price, socialTags, interests])

  // PAGINAÇÃO
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentItems = filtered.slice(startIndex, endIndex)

  // Funções de navegação
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll para o topo da lista
      const element = document.getElementById('resultados')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  // Função auxiliar para toggle de arrays
  const toggleArray = <T extends string>(arr: T[], value: T): T[] => {
    return arr.includes(value)
      ? arr.filter((item) => item !== value)
      : [...arr, value]
  }

  const hasTempFilters = tempCategory || tempPrice !== null || (tempSocialTags && tempSocialTags.length > 0) || (tempInterests && tempInterests.length > 0) || tempQuery
  const hasActiveFilters = category || price !== null || (socialTags && socialTags.length > 0) || (interests && interests.length > 0) || query

  const activeFiltersCount = [
    category ? 1 : 0,
    price !== null ? 1 : 0,
    ...(socialTags || []).map(() => 1),
    ...(interests || []).map(() => 1)
  ].reduce((a, b) => a + b, 0)

  // Gera os números das páginas para exibição
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      
      if (currentPage <= 2) {
        end = 4
      }
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }
      
      if (start > 2) {
        pages.push('...')
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (end < totalPages - 1) {
        pages.push('...')
      }
      
      pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main id="conteudo-principal" tabIndex={-1} className="mx-auto max-w-6xl flex-1 p-6">
        {/* Cabeçalho */}
        <div className="mb-6 flex items-end gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Buscar na Ilha</h1>
            <p className="text-muted-foreground">Encontre lugares por nome, interesse ou vibe.</p>
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

        {/* Barra de busca e filtros */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="flex-1 flex gap-3">
              <input
                type="text"
                placeholder="Buscar lugares..."
                value={tempQuery || ""}
                onChange={(e) => setTempQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') applyFilters()
                }}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Buscar lugares"
              />
              
              <button
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                className="lg:hidden relative rounded-lg bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium"
              >
                <Filter className="h-5 w-5" />
                Filtros
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              {hasActiveFilters ? (
                <span className="text-sm text-muted-foreground">
                  {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} ativo{activeFiltersCount > 1 ? 's' : ''}
                </span>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Mostrando todos os {allPlaces.length} lugares
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {hasTempFilters && (
                <button
                  onClick={clearFilters}
                  className="rounded-lg bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80 transition-colors flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Limpar
                </button>
              )}
              <button
                onClick={applyFilters}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* ESTRUTURA: Sidebar e resultados lado a lado */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar de filtros */}
          <aside className={`lg:block ${isFiltersVisible ? 'block' : 'hidden'} lg:w-72 shrink-0 rounded-2xl border border-border bg-card p-4 h-fit`}>
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                onClick={() => setIsFiltersVisible(false)}
                className="rounded-lg p-2 hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <h3 className="mb-3 text-lg font-semibold hidden lg:block">Filtros</h3>

            {/* Filtro de Categoria */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Categoria
              </label>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  aria-pressed={tempCategory === null}
                  className={`text-left rounded-md px-3 py-2 transition-colors ${
                    tempCategory === null
                      ? "bg-muted font-semibold"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => setTempCategory(null)}
                >
                  Todos
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={tempCategory === c}
                    className={`text-left rounded-md px-3 py-2 transition-colors ${
                      tempCategory === c
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setTempCategory((s) => (s === c ? null : c))}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro de Preço */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Preço
              </label>
              <div className="flex gap-2">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={tempPrice === p}
                    onClick={() => setTempPrice((cur) => (cur === p ? null : p))}
                    className={`rounded-md px-4 py-2 transition-colors ${
                      tempPrice === p
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {"$".repeat(p)}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro de Conforto/Social */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Conforto / Social
              </p>
              <div className="flex gap-2 flex-wrap">
                {["sozinho", "date", "galera"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={tempSocialTags?.includes(s) || false}
                    onClick={() => setTempSocialTags((cur) => toggleArray(cur || [], s))}
                    className={`rounded-md px-3 py-2 transition-colors ${
                      tempSocialTags?.includes(s)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {s === "sozinho" ? "Sozinho" : s === "date" ? "Date" : "Galera"}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro de Interesses */}
            <div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Interesses
              </p>
              <div className="flex flex-wrap gap-2">
                {allInterests.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={tempInterests?.includes(t) || false}
                    onClick={() => setTempInterests((cur) => toggleArray(cur || [], t))}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      tempInterests?.includes(t)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Botões de ação dentro do filtro (mobile) */}
            <div className="mt-6 flex gap-3 lg:hidden">
              <button
                onClick={clearFilters}
                className="flex-1 rounded-lg bg-muted px-4 py-3 text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                Limpar tudo
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Aplicar
              </button>
            </div>
          </aside>

          {/* Área de resultados */}
          <div className="flex-1 min-w-0" id="resultados">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {!hasActiveFilters ? (
                  `Mostrando ${startIndex + 1}-${Math.min(endIndex, filtered.length)} de ${allPlaces.length} lugares`
                ) : (
                  `${filtered.length} lugar${filtered.length !== 1 ? 'es' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`
                )}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLayout("grid")}
                  aria-label="Exibir resultados em grade"
                  aria-pressed={layout === "grid"}
                  className={`rounded-lg p-2 transition-colors ${
                    layout === "grid" ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("list")}
                  aria-label="Exibir resultados em lista"
                  aria-pressed={layout === "list"}
                  className={`rounded-lg p-2 transition-colors ${
                    layout === "list" ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Grid/Lista de resultados */}
            {currentItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-12 text-center">
                <p className="text-lg font-semibold text-muted-foreground">
                  Nenhum lugar encontrado
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Tente ajustar seus filtros ou buscar por outro termo
                </p>
              </div>
            ) : (
              <>
                <div
                  className={
                    layout === "grid"
                      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                      : "flex flex-col gap-4"
                  }
                >
                  {currentItems.map((place) => (
                    <PlaceCard key={place.id} {...place} />
                  ))}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <button
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className={`rounded-lg px-3 py-2 transition-colors flex items-center gap-1 ${
                        currentPage === 1
                          ? "bg-muted/50 text-muted-foreground cursor-not-allowed"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                      aria-label="Página anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </button>

                    <div className="flex gap-1">
                      {getPageNumbers().map((page, index) => (
                        <button
                          key={index}
                          onClick={() => typeof page === 'number' && goToPage(page)}
                          disabled={typeof page !== 'number'}
                          className={`min-w-[36px] rounded-lg px-3 py-2 text-sm transition-colors ${
                            page === currentPage
                              ? "bg-primary text-primary-foreground font-semibold"
                              : typeof page === 'number'
                              ? "bg-muted hover:bg-muted/80 text-foreground"
                              : "text-muted-foreground cursor-default"
                          }`}
                          aria-current={page === currentPage ? "page" : undefined}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`rounded-lg px-3 py-2 transition-colors flex items-center gap-1 ${
                        currentPage === totalPages
                          ? "bg-muted/50 text-muted-foreground cursor-not-allowed"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                      aria-label="Próxima página"
                    >
                      Próxima
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
     <Footer></Footer>
    </div>
  )
}