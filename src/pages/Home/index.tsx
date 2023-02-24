import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BannerContainer, InfoWrapper } from './styles'

import coffeBanner from '../../assets/coffe-home.svg'
import background from '../../assets/background.svg'

import { ItemInfoBanner } from './components/ItemInfoBanner'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <BannerContainer>
      <img src={background} alt="" />
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <InfoWrapper>
          <ItemInfoBanner
            text="Compra simples e segura"
            icon={<ShoppingCart size={16} weight="fill" />}
            bgColor={theme['yellow-700']}
          />
          <ItemInfoBanner
            text="Embalagem mantém o café intacto"
            icon={<Package size={16} weight="fill" />}
            bgColor={theme['base-text']}
          />
          <ItemInfoBanner
            text="Entrega rápida e rastreada"
            icon={<Timer size={16} weight="fill" />}
            bgColor={theme['yellow-500']}
          />
          <ItemInfoBanner
            text="O café chega fresquinho até você"
            icon={<Coffee size={16} weight="fill" />}
            bgColor={theme['purple-500']}
          />
        </InfoWrapper>
      </div>

      <img src={coffeBanner} alt="" />
    </BannerContainer>
  )
}
