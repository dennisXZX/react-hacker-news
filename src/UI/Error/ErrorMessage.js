import React, { Component } from 'react'

import { ErrorWrapper, ErrorText } from './errorStyle'

class ErrorMessage extends Component {
  render () {
    return (
      <ErrorWrapper>
        <ErrorText>Sorry, something just went wrong...</ErrorText>
      </ErrorWrapper>
    )
  }
}

export default ErrorMessage
