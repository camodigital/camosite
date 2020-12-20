import * as S from './styles'
import Logo from 'components/Logo'

const Menu = () => (
  <S.Wrapper>
    <S.WrapperLogo>
      <Logo />
    </S.WrapperLogo>

    <S.WrapperMenu>
      <S.NavBar>
        <S.NavBarButton aria-label="Botão para ativar o menu">
          <div></div>
          <div></div>
          <div></div>
        </S.NavBarButton>
      </S.NavBar>
    </S.WrapperMenu>
  </S.Wrapper>
)

export default Menu
