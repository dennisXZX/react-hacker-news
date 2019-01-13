import React from 'react'

import { ErrorWrapper, ErrorText } from './errorStyle'

const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorText>{message}</ErrorText>
    </ErrorWrapper>
  )
}

export default ErrorMessage
