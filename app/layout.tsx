import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
