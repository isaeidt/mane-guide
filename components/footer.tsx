// components/Footer.tsx
import Link from "next/link";

interface FooterProps {
  brandName?: string;
  navLinks?: Array<{ label: string; href: string }>;
  copyrightText?: string;
  showDevAlert?: boolean;
  className?: string;
}

const Footer = ({
  brandName = "ManéGuide",
  navLinks = [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
    { label: "Sobre Nós", href: "#" },
    { label: "Suporte", href: "#" },
  ],
  copyrightText = "© 2026 ManéGuide · Feito com carinho em Floripa",
  showDevAlert = true,
  className = "",
}: FooterProps) => {
  return (
    <footer className={`border-t border-border bg-card px-6 py-5 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {showDevAlert && (
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
        )}

        {/* Desktop: Grid 3 colunas */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-4 text-sm text-muted-foreground">
          <div className="flex justify-start">
            <p className="font-semibold text-foreground whitespace-nowrap">
              {brandName}
            </p>
          </div>

          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-end">
            <p className="whitespace-nowrap">{copyrightText}</p>
          </div>
        </div>

        {/* Mobile: Layout empilhado */}
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:hidden">
          <p className="font-semibold text-foreground">
            {brandName}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-center">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;