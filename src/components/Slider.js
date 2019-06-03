import React, { Component } from 'react'
import Slide from './Slide/slide'
// import LeftArrow from './Arrows/left-arrow'
// import RightArrow from './Arrows/right-arrow'

import './slider.css'

export class Slider extends Component {
  constructor () {
    super()
    this.state = {
      slide: null,
      loading: true,
      error: null,
      currentSlide: [],
      currentIndex: 1,
      currentTransform: null,
    }
  }

  componentDidMount () {

    const url = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo'

    fetch(url, {
      method: 'get',
    })
      .then(response => response.json())
      .then(response => {
        this.setState({slide: response.hits, loading: false, currentSlide: response.hits[0]})
      }).catch(error => {
      this.setState({error: error.message, loading: false})
    })

  }

  renderSlides = () => {
    const {slide} = this.state
    return slide.map((curr, i) =>

      <Slide
        key={i}
        item={slide[i]}
        isShowing={this.state.currentSlide === i}
      />
    )
  }

  playCarousel = () => {
    let cnt = document.querySelector('.slider')
    let css = `transform: translateX(${this.state.currentTransform}%)`

    cnt.setAttribute('style', css)

  }

  nextSlide = () => {
    this.setState(state => {
      const newIndex = state.currentIndex + 1

      return {
        ...state,
        currentIndex: newIndex,
        currentTransform: `-${this.state.currentIndex * 20}`
      }
    }, () => this.playCarousel())
  }

  prevSlide = () => {
    this.setState(state => {
      const newIndex = state.currentIndex - 1

      return {
        ...state,
        currentIndex: newIndex,
        currentTransform: `${parseInt(this.state.currentTransform) + parseInt(20)}`
      }
    }, () => this.playCarousel())
  }

  render () {

    const {error, loading, currentIndex, slide, currentTransform} = this.state

    if (error) {
      return error
    } else if (loading) {
      return 'loading..'
    } else {
      return (
        <div>
          <div className="sliders">
            <ul className="slider"
                style={{
                  transform: `translateX(${currentTransform}px)`,
                  transition: 'transform ease-out 0.45s'
                }}>
              {this.renderSlides()}
            </ul>
          </div>

          <button
            onClick={() => this.prevSlide()}
            disabled={currentIndex === 1}
            className="buttonController"
          >Prev
          </button>

          <button
            onClick={() => this.nextSlide()}
            disabled={currentIndex === slide.length - 1}
            className="buttonController"
          >Next
          </button>

          {/*<LeftArrow
            prevSlide={this.prevSlide}
            disabled={currentIndex === 1}
          />

          <RightArrow
            nextSlide={this.nextSlide}
            disabled={currentIndex === slide.length - 1}
          />*/}

        </div>
      )
    }

  }

}

export default Slider
