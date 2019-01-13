import React, { Component, Fragment } from 'react'
import ResetStyle from './resetStyle'
import GlobalCSS from './globalCSS'
import PaginationStyle from './paginationStyle'
import IconFont from './iconfont/iconfont'

class GlobalStyle extends Component {
	render () {
		return (
			<Fragment>
				<ResetStyle />
				<GlobalCSS />
				<IconFont />
				<PaginationStyle />
			</Fragment>
		)
	}
}

export default GlobalStyle
