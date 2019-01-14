import React from 'react'
import { shallow } from 'enzyme'
import ArticleList from '../../../../pages/search/components/ArticleList'
import { mockArticleList } from '../../../dataProviders/mockArticleList'

const defaultProps = {
	articleList: mockArticleList
}

const setup = (propsOverrides = {}) => {
	const setupProps = { ...defaultProps, ...propsOverrides }
	return shallow(<ArticleList {...setupProps} />)
}

test('renders the article list correctly', () => {
	const wrapper = setup()
	const component = wrapper.find('ArticleItem')
	expect(component.length).toBe(20)
})