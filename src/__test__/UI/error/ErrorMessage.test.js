import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ErrorMessage from '../../../UI/error/ErrorMessage'
import { findByTestAttr } from '../../../utils/testUtils'

Enzyme.configure({
	adapter: new EnzymeAdapter()
})

const setup = (props = {}) => {
	const wrapper = shallow(<ErrorMessage {...props} />)
	return wrapper
}

test('renders the error message correctly', () => {
	const wrapper = setup({ message: 'error' })
	const component = findByTestAttr(wrapper, 'component-errorWrapper')
	expect(component.text()).toContain('error')
})