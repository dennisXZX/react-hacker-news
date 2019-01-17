import React, { PureComponent } from 'react'

import { HOT_SEARCH_PER_PAGE } from '../headerActions'

import {
  HotSearchWrapper,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem,
  Triangle
} from './hotSearchPanelStyle'
import PropTypes from 'prop-types'

class HotSearchPanel extends PureComponent {
  getCurrentPageItems = () => {
    const {
      currentHotSearchPage,
      handleHotSearchClick,
      hotSearchList
    } = this.props

    if (hotSearchList.length) {
      const pageList = hotSearchList.slice(
        (currentHotSearchPage - 1) * HOT_SEARCH_PER_PAGE,
        currentHotSearchPage * HOT_SEARCH_PER_PAGE
      )

      return pageList.map(item => (
        <SearchInfoItem key={item} onClick={() => handleHotSearchClick(item)}>
          {item}
        </SearchInfoItem>
      ))
    }

    return <div>Preparing hot searches data...</div>
  };

  render() {
    const {
      handleChangeHotSearchPage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      currentHotSearchPage,
      totalPage
    } = this.props

    return (
      <HotSearchWrapper
        onMouseEnter={handleHotSearchMouseEnter}
        onMouseLeave={handleHotSearchMouseLeave}
      >
        <Triangle />
        <SearchInfoTitle>
          Hot Searches
          <SearchInfoSwitch
            onClick={() =>
              handleChangeHotSearchPage(
                currentHotSearchPage,
                totalPage,
                this.spinIcon
              )}
          >
            <i
              className="iconfont spin"
              ref={icon => { this.spinIcon = icon }}
            >
              &#xe851;
            </i>
            Change
          </SearchInfoSwitch>
        </SearchInfoTitle>

        <SearchInfoList>{this.getCurrentPageItems()}</SearchInfoList>
      </HotSearchWrapper>
    )
  }
}

HotSearchPanel.propTypes = {
  currentHotSearchPage: PropTypes.number.isRequired,
  handleChangeHotSearchPage: PropTypes.func.isRequired,
  handleHotSearchClick: PropTypes.func.isRequired,
  handleHotSearchMouseEnter: PropTypes.func.isRequired,
  handleHotSearchMouseLeave: PropTypes.func.isRequired,
  hotSearchList: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired
}

export default HotSearchPanel
