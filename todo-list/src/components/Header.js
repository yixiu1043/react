import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
      <h1>Todolist</h1>
      </header>
    )
  }
}

const headerStyle = {
  height: '80px',
  lineHeight: '80px',
  textAlign: 'center',
  background: '#000',
  color: '#fff',
}