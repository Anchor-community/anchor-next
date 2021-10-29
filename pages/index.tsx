import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import IntroScreen from '../components/_special/IntroScreen'
import PageTransition from '../components/_special/PageTransition'
import TopPage from '../components/pages/TopPage'
import Cursor from '../components/_shared/Cursor'

const Home: NextPage = () => {
  const [isAnimating, setAnimatingState] = useState(false)
  const [isAnimationFinished, setAnimatedState] = useState(false)

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const start = async () => {
    setAnimatingState(true)
    await timeout(1500)
    setAnimatedState(true)
  }

  return (
    <>
      <Head>
        <title>Anchor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />

      {isAnimationFinished ? (
        <>
          <PageTransition />
          <TopPage />
        </>
      ) : (
        <IntroScreen isAnimating={isAnimating} start={start} />
      )}
    </>
  )
}

export default Home
