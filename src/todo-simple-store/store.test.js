import { createStore } from 'redux'
import configureStore from 'redux-mock-store'
import reducers from './reducers'

describe('STORE', () => {
  describe('reducers', () => {
    let store

    beforeEach(() => {
      store = createStore(reducers)
    })

    it('should add an todo', () => {
      store.dispatch({ type: 'ADD_TODO', text: 'asdfsdf' })
      expect(store.getState().todos.length).toBe(1)

      store.dispatch({ type: 'ADD_TODO', text: 'asdfsdf' })
      expect(store.getState().todos.length).toBe(2)

      store.dispatch({ type: 'ADD_TODO', text: 'asdfsdf' })
      expect(store.getState().todos.length).toBe(3)
    })
  })

  describe('actions', () => {
    const middlewares = []
    const mockStore = configureStore(middlewares)
    const addTodo = () => ({ type: 'ADD_TODO' })

    it('should test if actions are reflecting to store', () => {
      // Initialize mockstore with empty state
      const initialState = {}
      const store = mockStore(initialState)

      // Dispatch the action
      store.dispatch(addTodo())

      // Test if your store dispatched the expected actions
      const actions = store.getActions()
      const expectedPayload = { type: 'ADD_TODO' }
      expect(actions).toEqual([expectedPayload])
    })
  })
})
