import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import coffeBanner from '../../../../assets/coffe-home.svg'
import { BannerContainer, Content, InfoWrapper } from './styles'

import { ItemInfoBanner } from '../ItemInfoBanner'

export function Banner() {
  const theme = useTheme()
  const ITEMS_BANNER = [
    {
      id: 1,
      text: 'Compra simples e segura',
      icon: <ShoppingCart size={16} weight="fill" />,
      bgColor: theme['yellow-700'],
    },
    {
      id: 2,
      text: 'Embalagem mantém o café intacto',
      icon: <Package size={16} weight="fill" />,
      bgColor: theme['base-text'],
    },
    {
      id: 3,
      text: 'Entrega rápida e rastreada',
      icon: <Timer size={16} weight="fill" />,
      bgColor: theme['yellow-500'],
    },
    {
      id: 4,
      text: 'O café chega fresquinho até você',
      icon: <Coffee size={16} weight="fill" />,
      bgColor: theme['purple-500'],
    },
  ]

  return (
    <BannerContainer>
      <Content>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <InfoWrapper>
            {ITEMS_BANNER.map((item) => (
              <ItemInfoBanner
                key={item.id}
                text={item.text}
                icon={item.icon}
                bgColor={item.bgColor}
              />
            ))}
          </InfoWrapper>
        </div>

        <img src={coffeBanner} alt="" />
      </Content>
    </BannerContainer>
  )
}
