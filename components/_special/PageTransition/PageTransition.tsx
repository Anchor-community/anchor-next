import { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'

const PageTransition: FC = () => {
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
        <Pillar style={{ top: 0, animation: 'deflate 1s 0s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 12.5)', animation: 'deflate 1s 0.1s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 25)', animation: 'deflate 1s 0.2s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 37.5)', animation: 'deflate 1s 0.3s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 50)', animation: 'deflate 1s 0.4s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 62.5)', animation: 'deflate 1s 0.5s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 75)', animation: 'deflate 1s 0.6s ease forwards' }} />
        <Pillar style={{ top: 'calc(var(--vh, 1vh) * 87.5)', animation: 'deflate 1s 0.7s ease forwards' }} />
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
  z-index: 40;
`

const Pillar = styled.div`
  position: fixed;
  background-color: #000;
  height: calc(var(--vh, 1vh) * 12.5);
  width: 100%;
  right: 0;
`

export default PageTransition
