import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <Logo src="/assets/images/anchor.svg" alt="anchor logo" />
          <Links>
            <li>
              <Link href="/">AAA</Link>
            </li>
          </Links>
        </Inner>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 80px 40px 30px;
`

const Inner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`

const Logo = styled.img`
  object-fit: contain;
  width: 120px;
  height: 120px;
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  letter-spacing: 0;
  font-size: 1.8rem;
  font-family: 'Optician', monospace;
`

export default Header
