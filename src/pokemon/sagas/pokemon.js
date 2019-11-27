import { delay, takeEvery, put } from 'redux-saga/effects'
// import * as service from '../service/api'
import { PokemonTypes, actions } from '../ducks/pokemon'

const mockApiResponse = {
  count: 964,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/'
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/'
    }
  ]
}


function * fetchPokemons () {
  // const pokemons = yield call(service.getPokemons)
  yield delay(500)
  const pokemons = mockApiResponse.results
  yield put(actions.successFetchPokemons(pokemons))
}

const pokemonSaga = [takeEvery(PokemonTypes.FETCH_POKEMONS, fetchPokemons)]

export default pokemonSaga