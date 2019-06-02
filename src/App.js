import React, { Component } from 'react'
import Slider from './Slider'

// class component
class App extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className="App">
        <section>
          <h1>Carousel Test</h1>
        </section>

        <Slider/>
      </div>
    )
  }
}

export default App
