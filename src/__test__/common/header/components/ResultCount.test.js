import React from 'react'
import { shallow } from 'enzyme'
import ResultCount from '../../../../common/header/components/ResultCount'
import { findByTestAttr } from '../../../../utils/testUtils'

const setup = (propsOverrides = {}) => {
  return shallow(<ResultCount {...propsOverrides} />)
}

test('should render the error message correctly', () => {
  const wrapper = setup({
    articleCount: 10,
    processingTimeMS: 2
  })

  const component = findByTestAttr(wrapper, 'component-resultCount')
  expect(component.text()).toContain('10 results (0.002 seconds)')
})
