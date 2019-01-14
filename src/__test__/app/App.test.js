import React from 'react'
import { shallow } from 'enzyme'
import App from '../../app/App'
import { findByTestAttr, storeFactory } from '../../utils/testUtils'

const setup = (initialState = {}) => {
	const store = storeFactory(initialState)
	return shallow(<App {...store} />)
}

describe('App', () => {
	let wrapper

	beforeEach(() => {
		wrapper = setup()
	})

	test('should render Header', () => {
		const headerComponent = findByTestAttr(wrapper, 'component-header')
		expect(headerComponent.length).toBe(1)
	})

	test('should render SearchPage', () => {
		const searchPageComponent = findByTestAttr(wrapper, 'component-searchPage')
		expect(searchPageComponent.length).toBe(1)
	})
})
