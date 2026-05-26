import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Bebas_Neue, Dancing_Script } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ['400'],
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FLO 360° — Flow With Confidence',
    template: '%s | FLO 360°',
  },
  description: 'Premium sanitary pads engineered for every Ghanaian woman. 12-hour protection, 3D Soft Fit, Mint Essence. Extra Long 330mm. Born in Ghana, built for you.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flo360.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
    apple: '/favicon.jpg',
    shortcut: '/favicon.jpg',
  },
  openGraph: {
    siteName: 'FLO 360 Global Limited',
    locale: 'en_GH',
    type: 'website',
    images: [{
      url: '/images/products-stack.jpg',
      width: 853,
      height: 1280,
      alt: 'FLO 360° — Premium Sanitary Pads, Born in Ghana',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/products-stack.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${playfair.variable} ${bebas.variable} ${dancing.variable} font-sans antialiased`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
