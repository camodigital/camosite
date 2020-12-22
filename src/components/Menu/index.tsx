import { useState } from 'react'
import Link from 'next/link'

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
              <Link href="/qrc-web">
                <a>Web</a>
              </Link>
            </li>
            <li>
              <Link href="/qrc-app">
                <a href="#">APP</a>
              </Link>
            </li>
            <li>
              <Link href="/qrc-ar">
                <a href="#">AR</a>
              </Link>
            </li>
            <li>
              <Link href="/qrc-motion">
                <a href="#">Motion</a>
              </Link>
            </li>
            <li>
              <Link href="/qrc-mkt">
                <a href="#">MKT</a>
              </Link>
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
                  <Link href="/qrc-web">
                    <a>Web</a>
                  </Link>
                </li>
                <li>
                  <Link href="/qrc-app">
                    <a href="#">APP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/qrc-ar">
                    <a href="#">AR</a>
                  </Link>
                </li>
                <li>
                  <Link href="/qrc-motion">
                    <a href="#">Motion</a>
                  </Link>
                </li>
                <li>
                  <Link href="/qrc-mkt">
                    <a href="#">MKT</a>
                  </Link>
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
