import Image from 'next/image'

import * as S from './styles'

import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Button from 'components/Button'

const HeroIntro = () => (
  <S.Wrapper>
    <S.Header>
      <Menu />
    </S.Header>
    <S.Content>
      <div className="logo">
        {/* <img src="img/logocamaleao.png" alt="" /> */}
        <Image
          src="/img/logocamaleao.png"
          alt="Camo Digital"
          width={904}
          height={867}
        />
      </div>

      <div className="WrapperContent">
        <div className="title">
          <Heading>
            Olá, nós somos<span>a Camo Digital.</span>
          </Heading>
        </div>

        <div className="text">
          Uma agência digital fundada nos princípios da honestidade, clareza e
          simplicidade.
        </div>

        <div className="button">
          <Button link="#">Sobre</Button>
        </div>
      </div>
    </S.Content>
    <S.Footer>Scroll</S.Footer>
  </S.Wrapper>
)

export default HeroIntro
