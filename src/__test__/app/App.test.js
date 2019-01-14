import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from '../../app/App'
import { findByTestAttr } from '../../utils/testUtils'

Enzyme.configure({
	adapter: new EnzymeAdapter()
})

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />)

	if (state) {
		wrapper.setState(state)
	}

	return wrapper
}

test('renders App without crashing', () => {
	const wrapper = setup()
	const appComponent = findByTestAttr(wrapper, 'component-app')
	expect(appComponent.length).toBe(1)
})

test('renders Header', () => {
	const wrapper = setup()
	const headerComponent = findByTestAttr(wrapper, 'component-header')
	expect(headerComponent.length).toBe(1)
})

test('renders SearchPage', () => {
	const wrapper = setup()
	const searchPageComponent = findByTestAttr(wrapper, 'component-searchPage')
	expect(searchPageComponent.length).toBe(1)
})
