import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import Loader from '../../components/loader'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <div></div>
      <ProductsList
        games={onSaleGames}
        title="Promocoes"
        background="grey"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
