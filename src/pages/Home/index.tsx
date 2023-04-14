import { Banner } from './components/Banner'
import {
  ButtonCart,
  Buy,
  InfoItem,
  Item,
  ListItems,
  Price,
  SelectQuantity,
  Tags,
} from './styles'
import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'

import cafeComLeite from '../../assets/cafe-com-Leite.svg'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <Banner />
      <ListItems>
        <h2>Nossos cafés</h2>

        <Item>
          <img src={cafeComLeite} alt="Café com leite" />

          <Tags>
            <span>TRADICIONAL</span>
            <span>COM LEITE</span>
          </Tags>

          <InfoItem>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </InfoItem>

          <Buy>
            <Price>
              <span>R$</span> 9,90
            </Price>

            <div>
              <SelectQuantity>
                <button>
                  <Minus size={14} weight="bold" />
                </button>
                <span>10</span>
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </SelectQuantity>

              <ButtonCart>
                <ShoppingCartSimple
                  weight="fill"
                  size={22}
                  color={theme.white}
                />
              </ButtonCart>
            </div>
          </Buy>
        </Item>
      </ListItems>
    </>
  )
}
