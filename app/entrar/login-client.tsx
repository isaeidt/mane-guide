"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { useSearchParams, useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Header } from "@/components/header"
//import { Footer } from "react-day-picker"

type LoginMode = "usuario" | "estabelecimento"

export function LoginClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { login } = useAuth()
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
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailFieldId = "login-email"
  const passwordFieldId = "login-password"
  const errorMessageId = "login-error"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email || !password) {
      setError("Preencha e-mail e senha para entrar.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      const success = login(email, password, mode)
      if (success) {
        router.push(mode === "estabelecimento" ? "/estabelecimento" : "/")
      } else {
        setError("Credenciais inválidas. Tente novamente.")
        setLoading(false)
      }
    }, 600)
  }

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
      <Header></Header>

      {/* Main content */}
      <main id="conteudo-principal" tabIndex={-1} className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="flex w-full max-w-4xl items-center gap-16">
          {/* Left — mascot + text */}
          <div className="hidden flex-1 flex-col items-start lg:flex">
            <div className="relative mb-6">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-md">
                {c.speech}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-secondary" />
              </div>
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
              Deixa o Mané te guiar pelos caminhos mais
              <br />
              autênticos de Floripa!
            </p>
          </div>

          {/* Right — form card */}
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 shadow-sm">
            <div className="mb-8 flex rounded-full border border-border bg-muted p-1">
              <button
                type="button"
                onClick={() => setMode("usuario")}
                aria-pressed={mode === "usuario"}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition-all ${
                  mode === "usuario"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sou Usuário
              </button>
              <button
                type="button"
                onClick={() => setMode("estabelecimento")}
                aria-pressed={mode === "estabelecimento"}
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

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor={emailFieldId} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  E-mail
                </label>
                <input
                  id={emailFieldId}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.placeholder}
                  autoComplete="email"
                  aria-invalid={Boolean(error && !email)}
                  aria-describedby={error ? errorMessageId : undefined}
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor={passwordFieldId} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Senha
                  </label>
                  <button type="button" className="text-xs font-medium text-primary hover:underline">
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id={passwordFieldId}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    aria-invalid={Boolean(error && !password)}
                    aria-describedby={error ? errorMessageId : undefined}
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 pr-12 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p id={errorMessageId} role="alert" className="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm font-medium text-destructive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex h-13 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                ) : (
                  <>
                    {c.cta}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setMode(c.alternateMode)}
                className="text-sm font-medium text-primary hover:underline"
              >
                {c.alternate}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
