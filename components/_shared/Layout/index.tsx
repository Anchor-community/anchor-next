import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const Component = class Layout extends React.Component<Props> {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export default Component
