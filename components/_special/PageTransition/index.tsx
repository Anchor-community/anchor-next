import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const PageTransition: React.FC = () => {
  const [isIntroFinished, setIntroFinished] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIntroFinished(true)
    }, 1700)
  }, [])

  return isIntroFinished ? (
    <></>
  ) : (
    <>
      <Container>
        <Pillar1 />
        <Pillar2 />
        <Pillar3 />
        <Pillar4 />
        <Pillar5 />
        <Pillar6 />
        <Pillar7 />
        <Pillar8 />
      </Container>
    </>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PillarBase = css`
  position: fixed;
  background-color: #000;
  height: calc(var(--vh, 1vh) * 12.5);
  width: 100%;
  right: 0;
`

const Pillar1 = styled.div`
  ${PillarBase}

  top: 0;
  animation: deflate 1s 0s ease forwards;
`

const Pillar2 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 12.5);
  animation: deflate 1s 0.1s ease forwards;
`

const Pillar3 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 25);
  animation: deflate 1s 0.2s ease forwards;
`

const Pillar4 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 37.5);
  animation: deflate 1s 0.3s ease forwards;
`

const Pillar5 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 50);
  animation: deflate 1s 0.4s ease forwards;
`

const Pillar6 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 62.5);
  animation: deflate 1s 0.5s ease forwards;
`

const Pillar7 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 75);
  animation: deflate 1s 0.6s ease forwards;
`

const Pillar8 = styled.div`
  ${PillarBase}

  top: calc(var(--vh, 1vh) * 87.5);
  animation: deflate 1s 0.7s ease forwards;
`

export default PageTransition
