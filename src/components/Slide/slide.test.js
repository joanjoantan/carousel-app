import React from 'react'
import { shallow } from 'enzyme'

import Slide from './slide'

describe('Slide component', () => {
  it('should render component with mock value', () => {
    const slide = [{'previewURL': 'url', 'tags': 'name'}]
    const component = shallow(<Slide
      item={slide}
      isShowing='1'/>)
    expect(component).toMatchSnapshot()
  })
})