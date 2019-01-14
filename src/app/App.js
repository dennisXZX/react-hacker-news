import React, { Component } from 'react'
import store from '../store/configStore'
import { Provider } from 'react-redux'

import GlobalStyle from '../css/GlobalStyle'
import Header from '../common/header/Header'
import SearchPage from '../pages/search/SearchPage'

class App extends Component {
	render() {
		return (
			<div data-test="component-app">
				<Provider store={store}>
					<GlobalStyle />
					<Header data-test="component-header" />
					<SearchPage data-test="component-searchPage" />
				</Provider>
			</div>
		)
	}
}

export default App
