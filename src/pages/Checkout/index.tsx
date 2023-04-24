import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  Container,
  Order,
  PaymentMethod,
  Title,
  TitleCard,
  FormGroup,
  ConfirmOrder,
  RemoveButton,
  ItemCart,
  ItemCartDetails,
  ItemCartActions,
  TotalOrder,
  ConfirmButton,
} from './styles'

import cafeExpresso from '../../assets/cafe-expresso.svg'
import { SelectQuantity } from '../../components/SelectQuantity'

export function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <div className="payment-form">
        <Title>Complete seu pedido</Title>

        <Order>
          <TitleCard>
            <MapPinLine size={22} color={theme['yellow-700']} />

            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </TitleCard>

          <form>
            <input type="text" className="cep" placeholder="CEP" />

            <input type="text" placeholder="Rua" />

            <FormGroup>
              <input type="text" className="numero" placeholder="Número" />

              <div className="optional-field" data-optional="Opcional">
                <input
                  type="text"
                  className="complemento"
                  placeholder="Complemento"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <input type="text" className="bairro" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" className="uf" placeholder="UF" />
            </FormGroup>
          </form>
        </Order>

        <PaymentMethod>
          <TitleCard>
            <CurrencyDollar size={22} color={theme['purple-500']} />

            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </TitleCard>

          <ul>
            <li>
              <button>
                <CreditCard size={16} color={theme['purple-500']} />
                <span>Cartão de Crédito</span>
              </button>
            </li>

            <li>
              <button>
                <Money size={16} color={theme['purple-500']} />
                <span>Cartão de Débito</span>
              </button>
            </li>

            <li>
              <button>
                <Bank size={16} color={theme['purple-500']} />
                <span>Dinheiro</span>
              </button>
            </li>
          </ul>
        </PaymentMethod>
      </div>

      <div className="">
        <Title>Cafés selecionados</Title>

        <ConfirmOrder>
          <div>
            <ItemCart>
              <ItemCartDetails>
                <img src={cafeExpresso} alt="" />

                <div>
                  Expresso Tradicional
                  <ItemCartActions>
                    <SelectQuantity />

                    <RemoveButton>
                      <Trash size={16} color={theme['purple-500']} />
                      Remover
                    </RemoveButton>
                  </ItemCartActions>
                </div>
              </ItemCartDetails>

              <strong>R$ 9,90</strong>
            </ItemCart>

            <hr />

            <ItemCart>
              <ItemCartDetails>
                <img src={cafeExpresso} alt="" />

                <div>
                  Expresso Tradicional
                  <ItemCartActions>
                    <SelectQuantity />

                    <RemoveButton>
                      <Trash size={16} color={theme['purple-500']} />
                      Remover
                    </RemoveButton>
                  </ItemCartActions>
                </div>
              </ItemCartDetails>

              <strong>R$ 9,90</strong>
            </ItemCart>

            <hr />

            <TotalOrder>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div className="total-order">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </TotalOrder>
          </div>

          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </ConfirmOrder>
      </div>
    </Container>
  )
}
