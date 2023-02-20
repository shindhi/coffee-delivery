import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logoCoffee from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <span>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </span>

        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </nav>
    </HeaderContainer>
  )
}
