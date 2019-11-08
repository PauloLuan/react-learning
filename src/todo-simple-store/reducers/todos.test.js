import todosReducer from './todos'

describe('Todos Reducer', () => {
  it('should add a todo to the reducer', () => {
    const state = [{ id: 1, text: 'from test' }]
    const MOCK_ACTION = { type: 'ADD_TODO', text: 'dado que deve retornar' }
    const result = todosReducer(state, MOCK_ACTION)
    const resultSize = result.length
    expect(resultSize).toBe(2)
  })
})
