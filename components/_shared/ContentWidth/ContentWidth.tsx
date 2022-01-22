import { FC } from 'react'
import styled from '@emotion/styled'

const ContentWidth: FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  padding: 80px 0;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`

export default ContentWidth
