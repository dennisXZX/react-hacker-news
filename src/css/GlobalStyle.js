import React, { Component, Fragment } from 'react'
import ResetStyle from './resetStyle'
import GlobalTypography from './globalTypography'
import PaginationStyle from './paginationStyle'
import IconFont from './iconfont/iconfont'

class GlobalStyle extends Component {
  render () {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalTypography />
        <IconFont />
        <PaginationStyle />
      </Fragment>
    )
  }
}

export default GlobalStyle
