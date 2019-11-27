import React from 'react'
import { Provider, useDispatch } from 'react-redux'
import store from './store'
import { actions } from './ducks/pokemon'
// import PokemonList from './components/PokemonList'

const Pokemon = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(actions.fetchPokemons())}>
        Fetch Pokemons
      </button>
    </div>
  )
}

export default Pokemon
