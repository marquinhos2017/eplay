import * as S from './styles'
const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogo rpg"
              to="/categories/#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogo acao"
              to="/categories/#action"
            >
              Acao
            </S.Link>
          </li>

          <li>
            <S.Link
              title="Clique aqui para acessar jogo esportes"
              to="/categories/#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogo simulacao"
              to="/categories/#simulation"
            >
              Simulacao
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogo luta"
              to="/categories/#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a secao de promocoes"
              to="#on-sale"
            >
              Promocoes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a secao de em breve"
              to="#coming-soon"
            >
              Em Breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
