import { Suspense } from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ExplorarClient } from "./explorar-client"

export const metadata: Metadata = {
  title: "Explorar",
}

export default function ExplorarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense
        fallback={<div className="mx-auto max-w-6xl p-6 text-sm text-muted-foreground">Carregando...</div>}
      >
        <ExplorarClient />
      </Suspense>
    </div>
  )
}
