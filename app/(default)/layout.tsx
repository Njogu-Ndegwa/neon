'use client'

import { useEffect } from 'react'
import Script from 'next/script';
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      {/* Google Analytics Global Site Tag */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B4T9453L73"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B4T9453L73');
        `}
      </Script>
      <Header />

      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
