import React from 'react'
import { shallow } from 'enzyme'
import LoadingSpinner from '../../../UI/loading/LoadingSpinner'
import { findByTestAttr } from '../../../utils/testUtils'

const setup = (propsOverrides = {}) => {
	return shallow(<LoadingSpinner {...propsOverrides} />)
}

test('render the loading message correctly', () => {
	const wrapper = setup({ loadingText: 'Loading...' })
	const component = findByTestAttr(wrapper, 'component-loadingSpinner')
	expect(component.text()).toContain('Loading...')
})