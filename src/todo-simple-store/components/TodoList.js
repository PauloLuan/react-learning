import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import { Container } from './styles';

const TodoList = props => (
  <>
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </>
)

const mapStateToProps = state => ({
  todos: state.todos
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(TodoList)
