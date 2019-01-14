import React from 'react'
import { shallow } from 'enzyme'
import ErrorMessage from '../../../UI/error/ErrorMessage'
import { findByTestAttr } from '../../../utils/testUtils'

const setup = (propsOverrides = {}) => {
	return shallow(<ErrorMessage {...propsOverrides} />)
}

test('renders the error message correctly', () => {
	const wrapper = setup({ message: 'error' })
	const component = findByTestAttr(wrapper, 'component-errorWrapper')
	expect(component.text()).toContain('error')
})