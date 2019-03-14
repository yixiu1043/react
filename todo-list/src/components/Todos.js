
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  
  render() {
    const { todos, handleChange, handleClick } = this.props
    return (
      <div>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            handleClick={handleClick}
        />)}
      </div>
    )
  }
}

export default Todos



