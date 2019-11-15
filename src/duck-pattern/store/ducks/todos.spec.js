import { INITIAL_STATE, handlers } from './todos'

describe('TODOS Duck', () => {
  describe('Handlers', () => {
    it('should addTodo to the state', () => {
      const state = { todos: [] }
      const result = handlers.addTodo(state, {
        text: 'um',
        id: 1,
        toggle: false
      })
      const expectedResult = {
        todos: [{ text: 'um', id: 1, toggle: false }]
      }
      expect(result).toStrictEqual(expectedResult)
    })

    it('should remove a todo', () => {
      const state = {
        todos: [
          {
            text: 'um',
            id: 1,
            toggle: false
          },
          {
            text: 'dois',
            id: 2,
            toggle: false
          }
        ]
      }
      const ID_TO_BE_REMOVED = 2
      const result = handlers.removeTodo(state, ID_TO_BE_REMOVED)
      expect(result.todos.length).toEqual(1)
      expect(result.todos[0].id).toEqual(1)
    })

    it('should toggle a todo', () => {
      const state = {
        todos: [
          {
            text: 'um',
            id: 1,
            toggle: false
          },
          {
            text: 'dois',
            id: 2,
            toggle: false
          }
        ]
      }
      const ID_TO_BE_TOGGLE = 2
      const result = handlers.toggleTodo(state, ID_TO_BE_TOGGLE)
      expect(result.todos.length).toEqual(2)
      expect(result.todos[0].toggle).toBeFalsy()
      expect(result.todos[0].id).toEqual(1)
      expect(result.todos[1].toggle).toBeTruthy()
      expect(result.todos[1].id).toEqual(2)

      const SECOND_TOGGLE = 1
      const secondResult = handlers.toggleTodo(state, SECOND_TOGGLE)
      expect(secondResult.todos[0].toggle).toBeTruthy()
      expect(secondResult.todos[0].id).toEqual(1)
      expect(secondResult.todos[1].toggle).toBeTruthy()
      expect(secondResult.todos[1].id).toEqual(2)
    })
  })
})
