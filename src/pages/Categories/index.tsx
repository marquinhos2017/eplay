import { ProductsList } from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Acao"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="grey"
          id="sports"
        />

        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="grey" id="rpg" />
        <ProductsList
          games={simulationGames}
          title="Simulacao"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
