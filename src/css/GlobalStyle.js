import React, { Component, Fragment } from 'react'
import ResetStyle from './resetStyle'
import GlobalTypography from './globalTypography'
import ReactPaginationStyle from './reactPaginationStyle'
import IconFont from './iconfont/iconfont'

class GlobalStyle extends Component {
  render () {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalTypography />
        <IconFont />
        <ReactPaginationStyle />
      </Fragment>
    )
  }
}

export default GlobalStyle
