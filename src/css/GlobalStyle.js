import React, { Component, Fragment } from 'react'
import ResetStyle from './resetStyle'
import GlobalTypography from './globalTypography'
import IconFont from './iconfont/iconfont'

class GlobalStyle extends Component {
  render () {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalTypography />
        <IconFont />
      </Fragment>
    )
  }
}

export default GlobalStyle
