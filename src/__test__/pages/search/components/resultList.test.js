import React from 'react'
import { shallow } from 'enzyme'
import ResultList from '../../../../pages/search/components/ResultList'
import { mockResultList } from '../../../dataProviders/mockResultList'

const defaultProps = {
  resultList: mockResultList
}

const setup = (propsOverrides = {}) => {
  const setupProps = { ...defaultProps, ...propsOverrides }
  return shallow(<ResultList {...setupProps} />)
}

test('should render the article results correctly', () => {
  const wrapper = setup()
  const component = wrapper.find('ResultItemArticle')
  expect(component.length).toBe(1)
})

test('should render the story results correctly', () => {
  const wrapper = setup()
  const component = wrapper.find('ResultItemStory')
  expect(component.length).toBe(1)
})
