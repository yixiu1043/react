import React, { Component } from 'react'
import axios from 'axios'
import Todos from "./components/Todos"
import Header from "./components/Header"
import Search from "./components/Search"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  // 改变checked
  handleChange(id) {
    console.log(id)
    let temp = this.state.todos
    temp.forEach(item => {
      if (id === item.id) item.completed = !item.completed
    })
    this.setState({
      todos: [...temp]
    })
  }

  // 删除
  handleClick(id) {
    console.log(id)
    let temp = this.state.todos
    let list = temp.filter(item => id !== item.id)
    console.log(list)
    this.setState({
      todos: [...list]
    })
  }

  // 新增
  handSubmit(data) {
    console.log(data);
    let temp = this.state.todos;
    temp.unshift(data)
    this.setState({ todos: temp })
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <Search handSubmit={this.handSubmit.bind(this)} />
        <Todos
          todos={todos}
          handleChange={this.handleChange.bind(this)}
          handleClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
