"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

type LoginMode = "usuario" | "estabelecimento"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const modoParam = searchParams.get("modo") as LoginMode | null
  const [mode, setMode] = useState<LoginMode>(
    modoParam === "estabelecimento" ? "estabelecimento" : "usuario"
  )

  useEffect(() => {
    if (modoParam === "estabelecimento" || modoParam === "usuario") {
      setMode(modoParam)
    }
  }, [modoParam])
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const config = {
    usuario: {
      mascot: "/bonicos/pitch-(7).png",
      speech: "Ó-lhó-lhó! Que bom te ver!",
      headline: "Bem-vindo de volta, Mané!",
      sub: "Entre para descobrir os segredos da ilha.",
      placeholder: "teuemail@mane.com",
      cta: "Entrar",
      alternate: "Entrar como estabelecimento",
      alternateMode: "estabelecimento" as LoginMode,
    },
    estabelecimento: {
      mascot: "/bonicos/pitch-(6).png",
      speech: "Ôpa, bem-vindo de volta, Parceiro!",
      headline: "Acesse seu painel, Parceiro!",
      sub: "Gerencie seu estabelecimento no radar dos Manézinhos.",
      placeholder: "seunegocio@mane.com",
      cta: "Entrar no Painel",
      alternate: "Entrar como usuário",
      alternateMode: "usuario" as LoginMode,
    },
  }

  const c = config[mode]

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#F8F4EF" }}>
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-border bg-card px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ManéGuide" width={36} height={36} className="rounded-full" />
          <span className="text-xl font-bold text-foreground">ManéGuide</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/explorar" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Explorar
          </Link>
          <Link href="/lado-b" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Lado B
          </Link>
          <Link href="/comunidade" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Comunidade
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Buscar na ilha..."
              className="h-9 w-52 rounded-full border border-border bg-muted pl-4 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="flex w-full max-w-4xl items-center gap-16">

          {/* Left — mascot + text */}
          <div className="hidden flex-1 flex-col items-start lg:flex">
            <div className="relative mb-6">
              {/* Speech bubble */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-md">
                {c.speech}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-secondary" />
              </div>
              {/* Card behind mascot */}
              <div className="relative flex h-72 w-60 items-center justify-center overflow-visible rounded-2xl border border-border bg-card shadow-sm p-4">
  <Image
    src={c.mascot}
    alt="Mascote ManéGuide"
    width={240}
    height={260}
    className="max-h-full w-auto object-contain"
  />
</div>
            </div>
            <h2 className="mb-2 text-3xl font-bold leading-tight text-primary text-balance">
              A Ilha te espera.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Deixa o Mané te guiar pelos caminhos mais<br />autênticos de Floripa!
            </p>
          </div>

          {/* Right — form card */}
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 shadow-sm">

            {/* Mode toggle */}
            <div className="mb-8 flex rounded-full border border-border bg-muted p-1">
              <button
                onClick={() => setMode("usuario")}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition-all ${
                  mode === "usuario"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sou Usuário
              </button>
              <button
                onClick={() => setMode("estabelecimento")}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition-all ${
                  mode === "estabelecimento"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sou Estabelecimento
              </button>
            </div>

            <h1 className="mb-1 text-center text-2xl font-bold text-foreground">
              {c.headline}
            </h1>
            <p className="mb-8 text-center text-sm text-muted-foreground">
              {c.sub}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.placeholder}
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Senha
                  </label>
                  <button type="button" className="text-xs font-medium text-primary hover:underline">
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 pr-12 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="mt-2 flex h-13 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                {c.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Alternate mode link */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setMode(c.alternateMode)}
                className="text-sm font-medium text-primary hover:underline"
              >
                {c.alternate}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-8 py-4">
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span className="font-semibold text-foreground">ManéGuide</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacidade</Link>
            <Link href="#" className="hover:text-foreground">Termos</Link>
            <Link href="#" className="hover:text-foreground">Sobre Nós</Link>
            <Link href="#" className="hover:text-foreground">Contato</Link>
          </div>
          <span>© 2026 ManéGuide - Feito com sotaque em Floripa.</span>
        </div>
      </footer>
    </div>
  )
}
