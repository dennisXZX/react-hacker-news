import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import { LoadingSpinnerWrapper, LoadingText } from './loadingSpinnerStyle'

class LoadingSpinner extends Component {
  render () {
    return (
      <LoadingSpinnerWrapper>
        <Loader
          type="Watch"
          color="#FF742B"
          height="50"
          width="50"
        />
        <LoadingText>Loading...</LoadingText>
      </LoadingSpinnerWrapper>
    )
  }
}

export default LoadingSpinner
