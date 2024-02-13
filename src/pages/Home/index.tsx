import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Acao',
    description: 'Rs=esidente Evvi 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Acao',
    description: 'Rs=esidente Evvi 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 290,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Acao',
    description: 'Rs=esidente Evvi 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 220,00'],
    image: starwars
  },
  {
    id: 4,
    category: 'Acao',
    description: 'Rs=esidente Evvi 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Diablo Louco',
    title: 'Diablo 4',
    system: 'Linux',
    infos: ['10%', 'R$ 320,00'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Diablo Louco',
    title: 'Diablo 4',
    system: 'Linux',
    infos: ['10%', 'R$ 320,00'],
    image: resident
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Diablo Louco',
    title: 'Diablo 4',
    system: 'Linux',
    infos: ['10%', 'R$ 320,00'],
    image: starwars
  },
  {
    id: 8,
    category: 'RPG',
    description: 'Diablo Louco',
    title: 'Diablo 4',
    system: 'Linux',
    infos: ['10%', 'R$ 320,00'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promocoes" background="grey" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
