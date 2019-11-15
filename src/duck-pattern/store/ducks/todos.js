import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addTodo: ['payload'],
  removeTodo: ['id'],
  toggleTodo: ['id']
})

export const TodosTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  todos: []
})

/* Reducers */
export const handlers = {
  addTodo: (state = INITIAL_STATE, payload) => ({
    todos: [...state.todos, payload]
  }),

  removeTodo: (state = INITIAL_STATE, id) => ({
    todos: state.todos.filter(todo => {
      return todo.id !== id
    })
  }),

  toggleTodo: (state = INITIAL_STATE, id) => {
    const toggleMap = todo => {
      const SAME_ID = todo.id === id
      if (SAME_ID) {
        todo.toggle = !todo.toggle
      }
      return todo
    }
    return {
      todos: [...state.todos.map(toggleMap)]
    }
  }
}

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: handlers.addTodo,
  [Types.REMOVE_TODO]: handlers.removeTodo,
  [Types.TOGGLE_TODO]: handlers.toggleTodo
})
