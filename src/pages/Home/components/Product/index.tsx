import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'

import { useTheme } from 'styled-components'

import {
  Item,
  Tags,
  InfoItem,
  Buy,
  Price,
  SelectQuantity,
  ButtonCart,
} from './styles'

interface Props {
  item: {
    id: number
    img: string
    tags: string[]
    info: {
      title: string
      description: string
      price: string
    }
  }
}

export function Product({ item }: Props) {
  const theme = useTheme()

  return (
    <Item>
      <img src={item.img} alt={item.info.title} />

      <Tags>
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <InfoItem>
        <h3>{item.info.title}</h3>
        <p>{item.info.description}</p>
      </InfoItem>

      <Buy>
        <Price>
          <span>R$</span> {item.info.price}
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
            <ShoppingCartSimple weight="fill" size={22} color={theme.white} />
          </ButtonCart>
        </div>
      </Buy>
    </Item>
  )
}
