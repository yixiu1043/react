import React, { Component } from 'react'

export class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // fetch('https://api.imgflip.com/get_memes')
    //   .then(res => res.json())
    //   .then(res => { 
    //     console.log(res);
    //   })

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default index
