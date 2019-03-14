import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  static propTypes = {
    handSubmit: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }
  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.value) return
    let newItem = {
      id: parseInt(Math.random() * 1000),
      completed: false,
      title: this.state.value
    }
    this.props.handSubmit(newItem)
  }

  render() {
    return (
      <form style={formStyle} onSubmit={this.handleSubmit.bind(this)}>
        <input style={inputStyle} type="text" onChange={this.handleInput.bind(this)} />
        <input style={submitStyle} type="submit" value="Submit" />
      </form>
    )
  }
}

const formStyle = {
  display: 'flex',
  height: '30px',
}

const inputStyle = {
  flex: '10',
  textIndent: '10px',
  border: 'none',
  outline: 'none',
  fontSize: '16px'
}

const submitStyle = {
  flex: '2',
  background: '#333',
  border: 'none',
  outline: 'none',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
}
