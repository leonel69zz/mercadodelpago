import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MercadoDelPago – Asesoría Financiera en México',
  description: 'Asesoría financiera personalizada en México. Aprende a manejar tus créditos, mejorar tu historial y tomar decisiones inteligentes con tu dinero.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17995401029"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17995401029');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}