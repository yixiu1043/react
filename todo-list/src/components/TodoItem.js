import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  }
  render() {
    const { todo, handleChange, handleClick } = this.props;
    return (
      <div style={style}>
        <input
          style={{ verticalAlign: 'middle' }}
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange.bind(this,todo.id)}
        />
        <span style={{ marginLeft: '5px',textDecoration: todo.completed ? 'line-through': 'none' }}>{todo.title}</span>
        <button style={btnStyle} onClick={handleClick.bind(this,todo.id)}>x</button>
      </div>
    )
  }
}

const style = {
  padding: '10px',
  border: '1px dotted #f1f1f1',
  background: '#666',
  color: '#fff',
  fontSize: '16px'
}
const btnStyle = {
  padding: '0 6px',
  border: 'none',
  borderRadius: '50%',
  outline: 'none',
  background: '#f00',
  fontSize: '16px',
  float: 'right',
  cursor: 'pointer'
}