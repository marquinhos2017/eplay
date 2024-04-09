import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobranca">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome completo</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmdeliveryEmail">Confirme o e-mail</label>
            <input type="email" id="confirmdeliveryEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, et
          atque possimus dolore ratione reprehenderit tempore cupiditate?
          Impedit facilis tempora sapiente dolore cum sit, hic nihil, nulla
          magnam necessitatibus perspiciatis.
        </p>
      </div>
    </Card>
    <Button title="Clique aqui para finalizar a compra" type="button">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout
