import * as S from './styles'

export type LogoProps = {
  color?: 'primary' | 'secondary'
}

const Logo = ({ color = 'primary' }: LogoProps) => (
  <S.Wrapper>
    <S.Link
      href="index.html"
      color={color}
      role="title"
      aria-label="Agência de Mídia Digital Camo"
    >
      <h1>CAMO</h1>
    </S.Link>
  </S.Wrapper>
)

export default Logo
