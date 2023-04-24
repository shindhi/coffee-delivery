import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Success />} /> */}
        <Route path="/" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
