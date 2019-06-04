import React from 'react'
import Slider from './components/Slider'

import Container from '@material-ui/core/Container';
import './App.css'

const App = () => (
  <React.Fragment>
    <Container fixed>
      <header>
        <h1>Carousel Test</h1>
      </header>
      <Slider/>
    </Container>
  </React.Fragment>
)

export default App
