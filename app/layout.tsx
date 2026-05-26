import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
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
    images: [{ url: '/favicon.jpg', width: 1080, height: 1080 }],
  },
  twitter: {
    card: 'summary',
    images: ['/favicon.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
