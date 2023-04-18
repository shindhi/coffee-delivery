import { Banner } from './components/Banner'
import { ListItems } from './styles'

import { Product } from './components/Product'

import { ListItemsCoffe } from './list-items'

export function Home() {
  return (
    <>
      <Banner />
      <ListItems>
        <h2>Nossos cafés</h2>

        <div>
          {ListItemsCoffe.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </ListItems>
    </>
  )
}
