import React, { useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

type Props = {
  start: () => void
}

const IntroScreen: React.FC<Props> = (props) => {
  const logo = useRef(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const offsetX = (window.innerWidth / 2 - e.clientX) / 50
    const offsetY = (window.innerHeight / 2 - e.clientY) / 50

    gsap.to(logo.current, {
      duration: 0.5,
      x: offsetX,
      y: offsetY,
    })
  }

  return (
    <Container onMouseMove={(e) => handleMouseMove(e)}>
      <Wrapper ref={logo}>
        <Logo src="/assets/images/anchor.svg" alt="anchor logo" />
        <Title>Anchor maintainance team</Title>
        <StartLink onClick={() => props.start()}>Enter</StartLink>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`

const Logo = styled.img`
  object-fit: contain;
  width: 120px;
  height: 120px;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  letter-spacing: 0;
  font-size: 1.8rem;
  font-family: 'Optician', monospace;
`

const StartLink = styled.button`
  position: relative;
  font-family: 'Optician', monospace;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 0 5px;
  letter-spacing: 1px;

  ::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
  }

  ::after {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    transition: transform 0.2s ease;
    transform: translate(-50%, -50%) scale(1);
    background-color: red;
  }

  &:hover {
    ::after {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`

export default IntroScreen
