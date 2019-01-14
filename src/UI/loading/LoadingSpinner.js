import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import { LoadingSpinnerWrapper, LoadingText } from './loadingSpinnerStyle'

const LoadingSpinner = ({ loadingText }) => (
	<LoadingSpinnerWrapper data-test='component-loadingSpinner'>
	  <Loader
	    type='Watch'
	    color='#FF742B'
	    height='50'
	    width='50'
	  />
	  <LoadingText>{loadingText}</LoadingText>
	</LoadingSpinnerWrapper>
)

LoadingSpinner.propTypes = {
	loadingText: PropTypes.string
}

export default LoadingSpinner
