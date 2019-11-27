import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  fetchPokemons: [],
  successFetchPokemons: ['payload'],
  failureFetchPokemons: ['payload']
})

export const PokemonTypes = Types
export const actions = Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  pokemons: [],
  loading: false,
  isFetched: false
})

/* Reducers */
export const handlers = {
    fetchPokemons: (state = INITIAL_STATE, action) => {
        return {...state, loading: true}
    },

    successFetchPokemons: (state = INITIAL_STATE, action) => {
        return {...state, loading: false, pokemons: [...action.payload]}
    }
} 

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUCCESS_FETCH_POKEMONS]: handlers.successFetchPokemons
})

export default reducer