import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <div>teste</div>
  </Provider>
)

export default App
