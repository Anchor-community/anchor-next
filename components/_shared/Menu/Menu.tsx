import { FC } from 'react'
import styled from '@emotion/styled'
import LogoBlock from '~/components/_shared/Menu/LogoBlock'

const Menu: FC = () => {
  return (
    <>
      <MenuContainer>
        <LogoBlock />
      </MenuContainer>
    </>
  )
}

export default Menu

const MenuContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
`
