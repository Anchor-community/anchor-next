import React from 'react'
import styled from 'styled-components'
import ParallaxBG from '../../_shared/ParallaxBG'
import Layout from '../../_shared/Layout'

export default class TopPage extends React.Component {
  render() {
    return (
      <ParallaxBG>
        <Layout>
          <Block>
            {/* <LogoImage src="/assets/images/anchor.svg" /> */}
            <Heading>モチベーションは、雰囲気とともにやってくる。</Heading>
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
            <Heading></Heading>
          </Block>
        </Layout>
      </ParallaxBG>
    )
  }
}

const Header = styled.div`
  height: 120px;
  margin-bottom: 40px;
`

const Block = styled.div`
  display: block;
  gap: 30px;
  width: 100%;
  padding-top: calc(var(--vh, 1vh) * 30);
`

const Heading = styled.h1`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #000;
  margin-bottom: 60px;
`

const Description = styled.div`
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 0.9rem;
  word-break: keep-all;
  white-space: normal;
  line-height: 30px;
  margin: 0 0 100px 0;

  p {
    margin-bottom: 30px;
  }
`

const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
`
