import React from 'react'
import PropTypes from 'prop-types'

import { ErrorWrapper, ErrorText } from './errorStyle'

const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper data-test='component-errorWrapper'>
      <ErrorText>{message}</ErrorText>
    </ErrorWrapper>
  )
}

ErrorMessage.propTypes = {
	message: PropTypes.string
}

export default ErrorMessage
