import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container, Content } from './styles'

import successImg from '../../assets/success.svg'

export function Success() {
  const theme = useTheme()

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <Content>
          <ul>
            <li>
              <span>
                <MapPin color={theme.white} weight="fill" />
              </span>

              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </li>

            <li>
              <span>
                <Timer color={theme.white} weight="fill" />
              </span>

              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </li>

            <li>
              <span>
                <CurrencyDollar color={theme.white} />
              </span>

              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de Crédito</strong>
                </span>
              </div>
            </li>
          </ul>
        </Content>

        <img src={successImg} alt="" />
      </div>
    </Container>
  )
}
