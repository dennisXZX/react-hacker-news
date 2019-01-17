/*
	Jest would run this file before each test
	Since I don't want to eject the create-react-app config file for Jest config,
	this file have to be placed in the src folder
*/

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
