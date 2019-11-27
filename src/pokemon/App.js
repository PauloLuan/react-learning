import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './ducks/pokemon'
import PokemonList from './components/PokemonList'

const Pokemon = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon.pokemons)

  console.log({pokemons})

  return (
    <div>
      <button onClick={() => dispatch(actions.fetchPokemons())}>
        Fetch Pokemons
      </button>

      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default Pokemon
