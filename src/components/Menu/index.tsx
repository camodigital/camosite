import { useState } from 'react'
import * as S from './styles'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.WrapperLogo>
        <Logo />
      </S.WrapperLogo>

      {/* desk menu */}
      <MediaMatch greaterThan="large">
        <S.WrapperMenu>
          <S.Nav>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </S.Nav>
        </S.WrapperMenu>
      </MediaMatch>

      {/* mobile menu */}
      <MediaMatch lessThan="large">
        <S.WrapperMenuFull>
          <S.NavBar>
            <S.NavBarButton
              aria-label="Botão para ativar o menu"
              onClick={() => setIsOpen(true)}
            >
              <div></div>
              <div></div>
              <div></div>
            </S.NavBarButton>

            <S.NavBarNav aria-hidden={!isOpen} isOpen={isOpen}>
              <S.CloseMenu
                aria-label="Botão para fechar o menu"
                onClick={() => setIsOpen(false)}
              >
                <div></div>
                <div></div>
              </S.CloseMenu>

              <S.NavBarLinks>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </S.NavBarLinks>
            </S.NavBarNav>
          </S.NavBar>
        </S.WrapperMenuFull>
      </MediaMatch>
    </S.Wrapper>
  )
}
export default Menu
