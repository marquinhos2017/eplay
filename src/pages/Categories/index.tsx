import { ProductsList } from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  })

  return (
    <>
      <ProductsList games={gamesAcao} title="Acao" background="black" />
      <ProductsList games={gamesEsportes} title="Esportes" background="grey" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulacao"
        background="black"
      />
      <ProductsList games={gamesLuta} title="Luta" background="grey" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Categories
