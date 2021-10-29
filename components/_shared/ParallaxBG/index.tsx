import React, { useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

const ParallaxBG: React.FC = (props) => {
  const bg = useRef(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const offsetX = (window.innerWidth / 2 - e.clientX) / 50
    const offsetY = (window.innerHeight / 2 - e.clientY) / 50

    gsap.to(bg.current, {
      duration: 0.2,
      backgroundPosition: `${offsetX * -1}px ${offsetY * -1}px`,
    })
  }

  return (
    <Container ref={bg} onMouseMove={(e) => handleMouseMove(e)}>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(var(--vh, 1vh) * 100);
  background-image: url('/assets/images/grid.svg');
  background-repeat: repeat;
  background-size: 10px;
  overflow: scroll hidden;
`

export default ParallaxBG
