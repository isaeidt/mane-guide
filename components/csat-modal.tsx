"use client"

import { useEffect, useState } from "react"
import { Bookmark, X } from "lucide-react"

type CsatModalProps = {
  placeName: string
  onClose: () => void
}

const LABELS: Record<number, string> = {
  1: "Muito insatisfeito(a)",
  2: "Insatisfeito(a)",
  3: "Neutro(a)",
  4: "Satisfeito(a)",
  5: "Muito satisfeito(a)",
}

export function CsatModal({ placeName, onClose }: CsatModalProps) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  // fecha com Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  const handleSubmit = () => {
    // aqui você pode enviar o dado para sua API
    console.log("CSAT:", { placeName, rating: selected })
    setSubmitted(true)
    setTimeout(onClose, 1800)
  }

  const activeStar = hovered || selected

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="csat-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-sm rounded-3xl border border-border bg-background p-8 text-center shadow-lg">
        {/* Botão fechar */}
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          /* Estado de agradecimento */
          <div className="flex flex-col items-center gap-3 py-4" role="status" aria-live="polite">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
              ✓
            </div>
            <p className="text-base font-medium text-foreground">Valeu pelo feedback!</p>
            <p className="text-sm text-muted-foreground">
              Isso nos ajuda a melhorar sua experiência.
            </p>
          </div>
        ) : (
          <>
            {/* Badge salvo */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <Bookmark className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Local salvo!
            </div>

            <p className="mb-1 text-[17px] font-medium text-foreground">{placeName}</p>

            <p id="csat-title" className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Quão satisfeito(a) você está<br />com essa funcionalidade?
            </p>

            {/* Estrelas */}
            <div
              className="mb-2 flex justify-center gap-2"
              role="group"
              aria-label="Avaliação de 1 a 5 estrelas"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`${value} estrela${value > 1 ? "s" : ""} – ${LABELS[value]}`}
                  aria-pressed={selected === value}
                  onClick={() => setSelected(value)}
                  onMouseEnter={() => setHovered(value)}
                  onMouseLeave={() => setHovered(0)}
                  className="text-[28px] leading-none transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded"
                  style={{
                    color: value <= activeStar
                      ? "#EF9F27"
                      : "var(--color-border-secondary, #d1d5db)",
                  }}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Rótulos da escala */}
            <div className="mb-3 flex justify-between px-1 text-[11px] text-muted-foreground">
              <span>Muito insatisfeito(a)</span>
              <span>Muito satisfeito(a)</span>
            </div>

            {/* Label da nota selecionada */}
            <p
              className="mb-5 text-sm font-medium text-muted-foreground transition-opacity"
              style={{ minHeight: "20px", opacity: selected ? 1 : 0 }}
              aria-live="polite"
            >
              {selected ? LABELS[selected] : ""}
            </p>

            {/* Ações */}
            <div className="flex flex-col gap-2">
              <button
                type="button"
                disabled={!selected}
                onClick={handleSubmit}
                className="rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity disabled:opacity-40 enabled:hover:opacity-85"
              >
                Enviar avaliação
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Pular por agora
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}