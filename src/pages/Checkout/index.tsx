import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as Yup from 'yup'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

import * as S from './styles'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

import { getTotalPrice, parseToBrl } from '../../utils'
import InputMask from 'react-input-mask'
import { clear } from '../../store/reducers/cart'

type installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<installment[]>([])
  const dispatch = useDispatch()
  const totalPrice = getTotalPrice(items)

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
      installments: 1
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
      ),
      installments: Yup.number()
        .integer('O número de parcelas deve ser um número inteiro')
        .positive('O número de parcelas deve ser positivo')
        .min(1, 'O número de parcelas deve ser pelo menos 1')
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardOwner,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && isSuccess === false) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito obrigado">
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              temporibus similique
              <br /> alias architecto illo. Minima animi quisquam consequatur
              sunt? Libero ipsa numquam, dolores veritatis doloremque dolor quam
              fugiat minus corrupti! Numero do pedido: {data.orderId} <br />
              Forma de Pagamento:{' '}
              {payWithCard ? 'Cartao de Credito' : 'Boleto bancario'}
            </p>
            <p className="margin-top">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem et quae, aliquam corrupti in incidunt quos unde nam
              officia ipsum vitae molestiae provident tempore sit, explicabo
              quis, sint iusto vel.
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              perferendis pariatur debitis earum vitae numquam expedita,
              reiciendis quam voluptatibus libero! Illum reiciendis, doloremque
              nobis commodi mollitia laboriosam eaque error veritatis.
            </p>
            <p className="margin-top">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              sapiente, nostrum assumenda possimus sit deleniti dolor
              repellendus laboriosam aut! Veniam, qui rem. Consequuntur
              cupiditate, maxime est ipsa sit ad assumenda.
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobranca">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999.999.999-99"
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteudo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.deliveryEmail}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.confirmDeliveryEmail}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={boleto} alt="boleto" />
                Boleto bancario
              </S.TabButton>
              <S.TabButton
                type="button"
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={cartao} alt="cartao" />
                Cartao de credito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do Cartao
                        </label>
                        <input
                          id="cardOwner"
                          name="cardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardOwner}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do Cartao
                        </label>
                        <InputMask
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cpfCardOwner}
                          mask="999.999.999-99"
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">
                          Nome do titular do Cartao
                        </label>
                        <input
                          id="cardDisplayName"
                          name="cardDisplayName"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardDisplayName}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Numero do cartao</label>
                        <InputMask
                          id="cardNumber"
                          name="cardNumber"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardNumber}
                          mask="9999 9999 9999 9999"
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mes de expiracao</label>
                        <InputMask
                          id="expiresMonth"
                          name="expiresMonth"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiresMonth}
                          mask="99"
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de expiracao</label>
                        <InputMask
                          id="expiresYear"
                          name="expiresYear"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiresYear}
                          mask="99"
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          name="cardCode"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardCode}
                          mask="999"
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>

                        <select
                          id="installments"
                          name="installments"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.installments}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.amount}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, et atque possimus dolore ratione reprehenderit
                    tempore cupiditate? Impedit facilis tempora sapiente dolore
                    cum sit, hic nihil, nulla magnam necessitatibus
                    perspiciatis.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            title="Clique aqui para finalizar a compra"
            type="submit"
            onClick={form.handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
