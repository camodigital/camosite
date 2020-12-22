import * as S from './styles'
import Link from 'next/link'

export type LogoProps = {
  color?: 'primary' | 'secondary'
}

const Logo = ({ color = 'primary' }: LogoProps) => (
  <S.Wrapper>
    <Link href="/qrc-web">
      <S.Link
        href="/"
        color={color}
        role="title"
        aria-label="Agência de Mídia Digital Camo"
      >
        <h1>CAMO</h1>
      </S.Link>
    </Link>
  </S.Wrapper>
)

export default Logo
