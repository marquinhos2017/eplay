import Header from './components/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'
import { GlobalCss } from './styles'
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
  </Routes>
)

export default Rotas
