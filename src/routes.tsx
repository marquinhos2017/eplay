import Header from './components/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Product from './pages/Product'
import { GlobalCss } from './styles'
import Checkout from './pages/Checkout'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
