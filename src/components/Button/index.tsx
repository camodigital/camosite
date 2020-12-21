import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  link: string
}

const Button = ({ children, link }: ButtonProps) => (
  <S.Wrapper>
    <a href={link}>{children}</a>
  </S.Wrapper>
)

export default Button
