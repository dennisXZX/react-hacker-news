import React from 'react'
import { shallow } from 'enzyme'
import ResultList from '../../../../pages/search/components/ResultList'
import { mockResultList } from '../../../dataProviders/mockResultList'

const defaultProps = {
  articleList: mockResultList
}

const setup = (propsOverrides = {}) => {
  const setupProps = { ...defaultProps, ...propsOverrides }
  return shallow(<ResultList {...setupProps} />)
}

test('should render the result list correctly', () => {
  const wrapper = setup()
  const component = wrapper.find('StoryItem')
  expect(component.length).toBe(20)
})
