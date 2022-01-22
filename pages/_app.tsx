import '../scss/global.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    let vh: number = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [router.pathname])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
