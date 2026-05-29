import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ManéGuide - Explore Floripa como um verdadeiro Manézinho',
  description: 'Descubra os melhores lugares de Florianópolis com dicas de moradores locais',
  icons: {
    icon: [
      {
        url: 'public/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'public/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'public/logo.png',
      },
    ],
    apple: 'public/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-background">
        <AuthProvider>
          {children}
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
