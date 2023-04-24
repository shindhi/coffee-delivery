import { Minus, Plus } from 'phosphor-react'

import { Container } from './styles'

export function SelectQuantity() {
  return (
    <Container>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>10</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
