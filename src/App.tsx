import Banner from './components/Banner'
import Header from './components/Header'
import Product from './components/Product'
import { ProductsList } from './components/ProductsList'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promocoes" background="grey" />
      </>
    )
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
