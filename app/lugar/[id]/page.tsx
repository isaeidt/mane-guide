import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import PlaceDetail from "@/components/place-detail"
import { places } from "@/lib/places"

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default async function LugarPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  const normalizedId = normalize(decodedId)

  const place =
    places.find((place) => place.id === decodedId) ||
    places.find((place) => normalize(place.id) === normalizedId) ||
    places.find((place) => normalize(place.name) === normalizedId) ||
    places.find((place) => normalize(place.name).includes(normalizedId))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {place ? (
        <PlaceDetail place={place} />
      ) : (
        <main id="conteudo-principal" tabIndex={-1} className="mx-auto max-w-7xl p-6">
          <Link href="/explorar" className="text-sm text-primary hover:underline">
            Voltar
          </Link>
          <h2 className="mt-6 text-xl font-semibold">Local não encontrado</h2>
          <p className="text-sm text-muted-foreground">
            Desculpe, não encontramos esse lugar.
          </p>
        </main>
      )}
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  const normalizedId = normalize(decodedId)

  const place =
    places.find((item) => item.id === decodedId) ||
    places.find((item) => normalize(item.id) === normalizedId) ||
    places.find((item) => normalize(item.name) === normalizedId) ||
    places.find((item) => normalize(item.name).includes(normalizedId))

  return {
    title: place ? place.name : "Local não encontrado",
  }
}
