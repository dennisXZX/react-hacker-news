import React from 'react'
import { shallow } from 'enzyme'
import App from '../../app/App'
import { findByTestAttr } from '../../utils/testUtils'

const setup = () => {
	return shallow(<App />)
}

describe('render child components correctly', () => {
	let wrapper

	beforeEach(() => {
		wrapper = setup()
	})

	test('renders Header', () => {
		const headerComponent = findByTestAttr(wrapper, 'component-header')
		expect(headerComponent.length).toBe(1)
	})

	test('renders SearchPage', () => {
		const searchPageComponent = findByTestAttr(wrapper, 'component-searchPage')
		expect(searchPageComponent.length).toBe(1)
	})
})
