/*
	Jest would run this file before each test
	Since I don't want to eject the create-react-app config file,
	this file would have to live in the src folder
*/

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
