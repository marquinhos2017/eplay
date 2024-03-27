import { Container, FooterSection, Link, Links, SectionTitle } from './styles'
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories/#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories/#action">Acao</Link>
          </li>

          <li>
            <Link to="/categories/#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories/#simulation">Simulacao</Link>
          </li>
          <li>
            <Link to="/categories/#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <Links>
          <li>
            <Link to="#on-sale">Promocoes</Link>
          </li>
          <li>
            <Link to="#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
