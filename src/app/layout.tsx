import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingWrapper from './components/LoadingWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WaguRoom - Powerful Discord Bot',
  description: 'The most powerful and feature-rich Discord bot built for modern communities. Automate moderation, engage members, and unlock unlimited possibilities.',
  keywords: 'discord bot, waguroom, discord moderation, discord music bot, discord utility bot, discord server management',
  authors: [{ name: 'Kh1ev' }],
  creator: 'Kh1ev',
  publisher: 'Kh1ev',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://waguroom.com',
    siteName: 'WaguRoom',
    title: 'WaguRoom - Powerful Discord Bot',
    description: 'The most powerful and feature Discord bot',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <LoadingWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  )
}