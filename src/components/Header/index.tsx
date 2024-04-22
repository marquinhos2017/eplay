import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setisMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>

          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a secao de categorias"
                  to="/categories"
                  onClick={() => setisMenuOpen(false)}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a secao em breve"
                  to="/#coming-soon"
                  onClick={() => setisMenuOpen(false)}
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a secao de promocoes"
                  to="/#on-sale"
                  onClick={() => setisMenuOpen(false)}
                >
                  Promocoes
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>

        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="cartIcon" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a secao de categorias"
              to="/categories"
              onClick={() => setisMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a secao em breve"
              to="/#coming-soon"
              onClick={() => setisMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a secao de promocoes"
              to="/#on-sale"
              onClick={() => setisMenuOpen(false)}
            >
              Promocoes
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
