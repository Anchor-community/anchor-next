import { FC } from 'react'
import styled from '@emotion/styled'
import { ParallaxBG } from '../../_shared/ParallaxBG'
import { ContentWidth } from '../../_shared/ContentWidth'

const TopPage: FC = () => {
  return (
    <ParallaxBG>
      <ContentWidth>
        <Block>
          <Heading>モチベーションは、雰囲気と共にやってくる。</Heading>
          <Description>
            <p>
              数々の思考や技術、作り手のこだわりが詰まった私達の創作物。
              <br />
              同じ創作を嗜む仲間たちと静かに作業したり、時に見せ合い、フィードバックをもらったり。
            </p>
            <p>
              同じ「創作」でも、仲間と作業をすれば普段とは違う成果が生まれたり、いつもは見ることのない世界に触れられることがあるかもしれません。
            </p>
            <p>創作をこよなく愛するあなたに、敬意をこめて。</p>
          </Description>
        </Block>
      </ContentWidth>
    </ParallaxBG>
  )
}

export default TopPage

const Block = styled.div`
  display: block;
  gap: 30px;
  width: 100%;
  padding-top: calc(var(--vh, 1vh) * 30);
`

const Heading = styled.h1`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #333;
  margin-bottom: 60px;
  word-break: break-all;
`

const Description = styled.div`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  color: #555;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 0.8rem;
  word-break: keep-all;
  white-space: normal;
  line-height: 30px;
  margin-bottom: 100px;
  word-break: break-all;

  p {
    margin-bottom: 30px;
  }
`

const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
`
