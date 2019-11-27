import React from 'react'

// import { Container } from './styles';

const PokemonList = props => (
  <div>
    {props.pokemons.map(pokemon => (
      <>
        <p>Name: {pokemon.name} url: {pokemon.url}</p>
      </>
    ))}
  </div>
)
export default PokemonList
