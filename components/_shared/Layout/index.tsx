import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const Layout = class Layout extends React.Component<Props> {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

const Wrapper = styled.div`
  padding: 80px 0;
  max-width: 960px;
  margin: 0 auto;
`

export default Layout
