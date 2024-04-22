import { Container, FooterSection, Link, Links, SectionTitle } from './styles'
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogo rpg"
              to="/categories/#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogo acao"
              to="/categories/#action"
            >
              Acao
            </Link>
          </li>

          <li>
            <Link
              title="Clique aqui para acessar jogo esportes"
              to="/categories/#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogo simulacao"
              to="/categories/#simulation"
            >
              Simulacao
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogo luta"
              to="/categories/#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a secao de promocoes"
              to="#on-sale"
            >
              Promocoes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a secao de em breve"
              to="#coming-soon"
            >
              Em Breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
