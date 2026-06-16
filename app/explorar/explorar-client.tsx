"use client"

import Image from "next/image"
import { PlaceCard } from "@/components/place-card"
import { Grid, List } from "lucide-react"
import { places as allPlaces, Place } from "@/lib/places"
import { useSearchParams, useRouter } from "next/navigation"
import { useMemo, useState, useEffect } from "react"
import Link from "next/link"

export function ExplorarClient() {
  const params = useSearchParams()
  const router = useRouter()
  const query = params?.get("query") || ""

  const [layout, setLayout] = useState("grid")
  const [category, setCategory] = useState<string | null>(params?.get("category") || null)
  const [price, setPrice] = useState<number | null>(params?.get("price") ? Number(params.get("price")) : null)
  const [socialTags, setSocialTags] = useState<string[]>(params?.getAll("social") || [])
  const [interests, setInterests] = useState<string[]>(params?.getAll("interest") || [])

  const categories = useMemo(() => Array.from(new Set(allPlaces.map((p) => p.category))), [])
  const allInterests = useMemo(() => Array.from(new Set(allPlaces.flatMap((p) => p.interests))), [])

  useEffect(() => {
    const search = new URLSearchParams()
    if (query) search.set("query", query)
    if (category) search.set("category", category)
    if (price) search.set("price", String(price))
    socialTags.forEach((s) => search.append("social", s))
    interests.forEach((i) => search.append("interest", i))
    router.replace(`/explorar?${search.toString()}`)
  }, [category, price, socialTags, interests, query, router])

  const filtered = useMemo(() => {
    let list: Place[] = allPlaces.slice()

    if (query) {
      const q = query.toLowerCase()
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.interests.join(" ").toLowerCase().includes(q)
      )
    }

    if (category) {
      list = list.filter((p) => p.category === category)
    }

    if (price) {
      list = list.filter((p) => p.priceLevel === price)
    }

    if (socialTags.length > 0) {
      list = list.filter((p) => socialTags.every((t) => p.socialTags.includes(t as any)))
    }

    if (interests.length > 0) {
      list = list.filter((p) => interests.every((t) => p.interests.includes(t as any)))
    }

    return list
  }, [query, category, price, socialTags, interests])

  function toggleArray<T extends string>(arr: T[], v: T) {
    return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]
  }

  return (
  <div className="min-h-screen flex flex-col">
    <main
      id="conteudo-principal"
      tabIndex={-1}
      className="mx-auto max-w-6xl flex-1 p-6"
    >
      <main id="conteudo-principal" tabIndex={-1} className="mx-auto max-w-6xl p-6"> 
        <div className="mb-6 flex items-end gap-6"> 
          <div className="flex-1"> 
            <h1 className="text-2xl font-bold text-foreground">Buscar na Ilha</h1>
             <p className="text-muted-foreground">Encontre lugares por nome, interesse ou vibe.</p>
              </div> 
              <div className="hidden lg:block"> 
                <Image src="/bonicos/pitch-(4).png" alt="Mascote explorando com mapa" width={110} height={110} className="object-contain" style={{ mixBlendMode: "multiply" }} /> 
                </div>
                 </div> 
                 <div className="mb-6 flex gap-4">
                   <aside className="hidden w-72 shrink-0 rounded-2xl border border-border bg-card p-4 lg:block"> 
                    <h3 className="mb-3 text-lg font-semibold">Filtros</h3>
                     <div className="mb-4"> 
                      <label className="mb-2 block text-sm font-medium text-muted-foreground">Categoria</label>
                       <div className="flex flex-col gap-2"> 
                        <button type="button" aria-pressed={category === null} className={`text-left rounded-md px-3 py-2 ${category === null ? "bg-muted font-semibold" : ""}`} onClick={() => setCategory(null)} > Todos </button>
                         {categories.map((c) => 
                          ( <button key={c} type="button" aria-pressed={category === c} 
                            className={`text-left rounded-md px-3 py-2 ${category === c ? "bg-primary text-primary-foreground" : ""}`} 
                          onClick={() => setCategory((s) => (s === c ? null : c))} > {c} </button> ))} 
                          </div> 
                          </div> 
                          <div className="mb-4">
                             <label className="mb-2 block text-sm font-medium text-muted-foreground">Preço</label>
                              <div className="flex gap-2"> {[1, 2, 3].map((p) => ( <button key={p} type="button" aria-pressed={price === p}
                               onClick={() => setPrice((cur) => (cur === p ? null : p))} className={`rounded-md px-3 py-1 ${price === p ? "bg-primary text-primary-foreground" : "bg-muted"}`} > {"$".repeat(p)} </button> ))} </div> </div> <div className="mb-4"> <p className="mb-2 text-sm font-medium text-muted-foreground">Conforto / Social</p> <div className="flex gap-2"> {(["sozinho", "date", "galera"] as const).map((s) => ( <button key={s} type="button" aria-pressed={socialTags.includes(s)} onClick={() => setSocialTags((cur) => toggleArray(cur, s))} className={`rounded-md px-3 py-2 ${socialTags.includes(s) ? "bg-primary text-primary-foreground" : "bg-muted"}`} > {s === "sozinho" ? "Sozinho" : s === "date" ? "Date" : "Galera"} </button> ))} </div> </div> <div> <p className="mb-2 text-sm font-medium text-muted-foreground">Interesses</p> <div className="flex flex-wrap gap-2"> {allInterests.map((t) => ( <button key={t} type="button" aria-pressed={interests.includes(t)} onClick={() => setInterests((cur) => toggleArray(cur, t))} className={`rounded-full px-3 py-1 text-sm ${interests.includes(t) ? "bg-primary text-primary-foreground" : "bg-muted"}`} > {t} </button> ))} </div> </div> </aside> <div className="flex-1"> <div className="mb-4 flex items-center justify-between"> <p className="text-sm text-muted-foreground">Lugares encontrados ({filtered.length})</p> <div className="flex items-center gap-2"> <button type="button" onClick={() => setLayout("grid")} aria-label="Exibir resultados em grade" aria-pressed={layout === "grid"} className={`rounded-lg p-2 ${layout === "grid" ? "bg-muted" : ""}`} > <Grid className="h-4 w-4" /> </button> <button type="button" onClick={() => setLayout("list")} aria-label="Exibir resultados em lista" aria-pressed={layout === "list"} className={`rounded-lg p-2 ${layout === "list" ? "bg-muted" : ""}`} > <List className="h-4 w-4" /> </button> </div> </div> <div className={ layout === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "flex flex-col gap-4" } > {filtered.map((place) => ( <PlaceCard key={place.id} {...place} /> ))} </div> </div> </div> </main>
    </main>

    <footer className="w-full border-t border-border bg-card px-6 py-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-900">
            ⚠️ Versão em desenvolvimento
          </p>

          <p className="mt-2 text-sm text-blue-800">
            Algumas funcionalidades, conteúdos e integrações ainda estão sendo
            desenvolvidas. Dados podem ser simulados para fins de demonstração
            do projeto.
          </p>
        </div>

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
      </div>
    </footer>
  </div>
)
}
