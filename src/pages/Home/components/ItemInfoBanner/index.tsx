import { IconProps } from 'phosphor-react'
import { ReactElement } from 'react'

import { Item } from './styles'

type ItemProps = {
  text: string
  icon: ReactElement<IconProps>
  bgColor: string
}

export function ItemInfoBanner({ text, icon, bgColor }: ItemProps) {
  return (
    <Item color={bgColor}>
      <div>{icon}</div>
      <span>{text}</span>
    </Item>
  )
}
