"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  Search,
  Menu,
  User,
  Store,
  LogOut,
  LayoutDashboard,
  Filter,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { places as allPlaces } from "@/lib/places"

const navItems = [
  { href: "/", label: "Explorar" },
  { href: "/lado-b", label: "Lado B" },
  { href: "/comunidade", label: "Comunidade" },
]

// Categorias e interesses para o modal de filtros
const categories = Array.from(new Set(allPlaces.map((p) => p.category)))
const allInterests = Array.from(new Set(allPlaces.flatMap((p) => p.interests)))
const socialOptions = ["sozinho", "date", "galera"] as const

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuth()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  
  // Estados dos filtros
  const [tempCategory, setTempCategory] = useState<string | null>(null)
  const [tempPrice, setTempPrice] = useState<number | null>(null)
  const [tempSocialTags, setTempSocialTags] = useState<string[]>([])
  const [tempInterests, setTempInterests] = useState<string[]>([])
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Busca filtros ativos na URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get("category")
    const price = params.get("price")
    const social = params.getAll("social")
    const interests = params.getAll("interest")
    const query = params.get("query")

    let count = 0
    if (category) count++
    if (price) count++
    if (social.length > 0) count += social.length
    if (interests.length > 0) count += interests.length
    if (query) count++
    
    setActiveFiltersCount(count)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const term = searchQuery.trim()

    if (term) {
      router.push(`/explorar?query=${encodeURIComponent(term)}`)
      return
    }

    router.push("/explorar")
  }

  // Aplicar filtros
  const applyFilters = useCallback(() => {
    const params = new URLSearchParams()
    
    if (tempCategory) params.set("category", tempCategory)
    if (tempPrice) params.set("price", String(tempPrice))
    tempSocialTags.forEach((s) => params.append("social", s))
    tempInterests.forEach((i) => params.append("interest", i))
    
    let count = 0
    if (tempCategory) count++
    if (tempPrice) count++
    count += tempSocialTags.length
    count += tempInterests.length
    setActiveFiltersCount(count)
    
    const queryString = params.toString()
    router.push(`/explorar${queryString ? `?${queryString}` : ''}`)
    setIsFilterModalOpen(false)
  }, [tempCategory, tempPrice, tempSocialTags, tempInterests, router])

  // Limpar todos os filtros
  const clearFilters = useCallback(() => {
    setTempCategory(null)
    setTempPrice(null)
    setTempSocialTags([])
    setTempInterests([])
    setActiveFiltersCount(0)
    router.push("/explorar")
    setIsFilterModalOpen(false)
  }, [router])

  // Abrir modal com filtros atuais da URL
  const openFilterModal = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get("category")
    const price = params.get("price")
    const social = params.getAll("social")
    const interests = params.getAll("interest")
    
    setTempCategory(category || null)
    setTempPrice(price ? Number(price) : null)
    setTempSocialTags(social)
    setTempInterests(interests)
    setIsFilterModalOpen(true)
  }, [])

  // Função auxiliar para toggle de arrays
  const toggleArray = <T extends string>(arr: T[], value: T): T[] => {
    return arr.includes(value)
      ? arr.filter((item) => item !== value)
      : [...arr, value]
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative flex h-16 items-center px-4 sm:px-6 w-full">
          
          {/* Left side - Menu button e Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="ManéGuide"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="hidden text-lg font-bold text-foreground sm:block">
                ManéGuide
              </span>
            </Link>
          </div>

          {/* Nav desktop - CENTRO */}
          <nav 
            aria-label="Navegação principal" 
            className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/")

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side - Search, Filter e Auth */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search - Desktop */}
            <form
              role="search"
              aria-label="Buscar lugares na ilha"
              onSubmit={handleSearch}
              className="relative hidden w-full max-w-xs sm:block"
            >
              <label htmlFor="header-search" className="sr-only">
                Buscar lugares na ilha
              </label>
              <input
                id="header-search"
                type="search"
                placeholder="Buscar na ilha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-full rounded-full border border-border bg-background pl-5 pr-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Botão de Filtros */}
            <button
              onClick={openFilterModal}
              className="relative flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
              aria-label="Abrir filtros"
            >
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Auth */}
            <div className="flex items-center gap-2">
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="outline-none" aria-label={`Abrir menu da conta de ${user.businessName || user.name}`}>
                      <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20 transition-opacity hover:opacity-90">
                        <AvatarImage
                          src={user.avatar}
                          alt={user.name}
                        />
                        <AvatarFallback>
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="w-52"
                  >
                    <div className="px-3 py-2">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {user.businessName || user.name}
                      </p>
                      <p className="text-xs capitalize text-muted-foreground">
                        {user.type}
                      </p>
                    </div>

                    <DropdownMenuSeparator />

                    {user.type === "usuario" && (
                      <DropdownMenuItem asChild>
                        <Link
                          href="/perfil"
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <User className="h-4 w-4" />
                          Meu Perfil
                        </Link>
                      </DropdownMenuItem>
                    )}

                    {user.type === "estabelecimento" && (
                      <DropdownMenuItem asChild>
                        <Link
                          href="/estabelecimento"
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          Meu Painel
                        </Link>
                      </DropdownMenuItem>
                    )}

                    <DropdownMenuItem
                      onClick={() => {
                        logout()
                        router.push("/")
                      }}
                      className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link
                    href="/entrar?modo=usuario"
                    className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <User className="h-4 w-4" />
                    Entrar
                  </Link>

                  <Link
                    href="/entrar?modo=estabelecimento"
                    className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Store className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      Parceiro
                    </span>
                    <span className="sm:hidden">
                      Parceiro
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MODAL DE FILTROS */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsFilterModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Header do Modal */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Filtros</h2>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="rounded-lg p-2 hover:bg-muted transition-colors"
                aria-label="Fechar filtros"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo dos Filtros */}
            <div className="space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Categoria */}
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Categoria
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setTempCategory(null)}
                    className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                      tempCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    Todos
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setTempCategory(c === tempCategory ? null : c)}
                      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                        tempCategory === c
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preço */}
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Preço
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setTempPrice(tempPrice === p ? null : p)}
                      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
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

              {/* Social */}
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Conforto / Social
                </label>
                <div className="flex flex-wrap gap-2">
                  {socialOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setTempSocialTags((cur) => toggleArray(cur, s))}
                      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                        tempSocialTags.includes(s)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {s === "sozinho" ? "Sozinho" : s === "date" ? "Date" : "Galera"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interesses */}
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Interesses
                </label>
                <div className="flex flex-wrap gap-2">
                  {allInterests.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTempInterests((cur) => toggleArray(cur, i))}
                      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                        tempInterests.includes(i)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 rounded-lg bg-muted px-4 py-2.5 text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                Limpar tudo
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Aplicar Filtros
              </button>
            </div>

            {/* Indicador de filtros ativos */}
            {activeFiltersCount > 0 && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} ativo{activeFiltersCount > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  )
}