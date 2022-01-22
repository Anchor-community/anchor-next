import styled from '@emotion/styled'
import { FC } from 'react'

const LogoBlock: FC = () => {
  return (
    <Block>
      <ImageBrick style={{ gridArea: 'img' }}>
        <img src="/assets/images/anchor_white.svg" alt="logo" />
        <i className="material-icons">arrow_upward</i>
        <a href="#top" />
      </ImageBrick>
      <TextBrick style={{ gridArea: 'text' }}>
        <p>アンカー｜ANCHOR</p>
      </TextBrick>
      <TextBrick style={{ gridArea: 'catch' }}>
        <p>クリエイターの巣窟</p>
      </TextBrick>
    </Block>
  )
}

export default LogoBlock

const Block = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-template-areas: 'img text' '. catch';
  gap: 10px;
  width: 200px;
  position: fixed;
  left: 20px;
  top: 20px;
`

const ImageBrick = styled.div`
  position: relative;
  height: 35px;
  width: 35px;
  padding: 8px;
  background-color: #000;
  overflow: hidden;

  img {
    display: block;
    transform: translateY(0px);
    opacity: 1;
    object-fit: contain;
    width: 100%;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: translate(-50%, calc(-50% + 10px));
    opacity: 0;
    color: white;
  }

  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  &:hover {
    img {
      transform: translateY(-10px);
      opacity: 0;
    }

    i {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`

const TextBrick = styled.div`
  height: 35px;
  background-color: #000;
  text-align: center;
  font-weight: 600;

  p {
    line-height: 35px;
    color: #fff;
    margin: 0;
  }
`
