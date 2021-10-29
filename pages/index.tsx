import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import IntroScreen from '../components/_special/IntroScreen'
import TopPage from '../components/pages/TopPage'
import Cursor from '../components/_shared/Cursor'

const Home: NextPage = () => {
  const [isAnimating, setAnimationState] = useState(true)

  const start = () => {
    setAnimationState(false)
  }

  useEffect(() => {
    setTimeout(() => {
      // setAnimationState(true)
    }, 3000)
  })

  return (
    <>
      <Head>
        <title>Anchor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />

      {isAnimating ? <IntroScreen start={start} /> : <TopPage />}
    </>
  )
}

export default Home
