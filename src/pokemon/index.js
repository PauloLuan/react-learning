import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// import { Container } from './styles';

const PokemonApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default PokemonApp
