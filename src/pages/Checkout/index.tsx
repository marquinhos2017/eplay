import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as Yup from 'yup'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

import { InputGroup, Row, TabButton } from './styles'
import { useFormik } from 'formik'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardNumber: '',
      cardDisplayName: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('O campo eh obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 carcteres')
        .max(14, ' O campo precisa ter 14 caractres')
        .required('O campo eh obrigatorio'),
      deliveryEmail: Yup.string()
        .email('E-mail obrigatorio')
        .required('O campo e obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails sao diferentes')
        .required('O campo e obrigatorio'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      ),
      Installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.required('O numero do cartao eh obrigatorio')
          : schema
      ),

      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo eh obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobranca">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpfCardOwner)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                type="email"
                id="deliveryEmail"
                name="deliveryEmail"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.deliveryEmail}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.confirmDeliveryEmail}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto bancario
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="cartao" />
            Cartao de credito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do Cartao</label>
                    <input
                      id="cardOwner"
                      name="cardOwner"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardOwner}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do Cartao
                    </label>
                    <input
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cpfCardOwner}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">
                      Nome do titular do Cartao
                    </label>
                    <input
                      id="cardDisplayName"
                      name="cardDisplayName"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardDisplayName}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numero do cartao</label>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardNumber}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mes de expiracao</label>
                    <input
                      id="expiresMonth"
                      name="expiresMonth"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.expiresMonth}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de expiracao</label>
                    <input
                      id="expiresYear"
                      name="expiresYear"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.expiresYear}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      name="cardCode"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardCode}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>

                    <select
                      id="installments"
                      name="installments"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.installments}
                    >
                      <option value="">1x de R$ 200,00</option>
                      <option value="">2x de R$ 200,00</option>
                      <option value="">3x de R$ 200,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, et atque possimus dolore ratione reprehenderit tempore
                cupiditate? Impedit facilis tempora sapiente dolore cum sit, hic
                nihil, nulla magnam necessitatibus perspiciatis.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button title="Clique aqui para finalizar a compra" type="button">
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
