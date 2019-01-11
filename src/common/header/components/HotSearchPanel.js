import React, { Component } from 'react'
import {
  HotSearchWrapper,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem
} from './hotSearchPanelStyle'

class HotSearchPanel extends Component {
  getCurrentPageItems = () => {
    const {
      hotSearchList,
      currentPage,
    } = this.props

    const pageList = []

    if (hotSearchList.length) {
      for (let i = (currentPage - 1) * 7; i < currentPage * 7; i++) {
        pageList.push(
          <SearchInfoItem key={hotSearchList[i]}>
            {hotSearchList[i]}
          </SearchInfoItem>
        )
      }
    }

    return pageList
  }

  render () {
    const {
      handleChangeHotSearchPage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      currentPage,
      totalPage
    } = this.props

    return (
      <HotSearchWrapper
        onMouseEnter={handleHotSearchMouseEnter}
        onMouseLeave={handleHotSearchMouseLeave}>

        <SearchInfoTitle>
          Hot Searches
          <SearchInfoSwitch onClick={() => handleChangeHotSearchPage(currentPage, totalPage, this.spinIcon)}>
            <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>
              &#xe851;
            </i>
            Change
          </SearchInfoSwitch>
        </SearchInfoTitle>

        <SearchInfoList>
          {this.getCurrentPageItems()}
        </SearchInfoList>
      </HotSearchWrapper>
    )
  }
}

export default HotSearchPanel
