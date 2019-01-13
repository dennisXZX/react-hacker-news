import React, { Component } from 'react'

import {
  HotSearchWrapper,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem,
  Triangle
} from './hotSearchPanelStyle'

class HotSearchPanel extends Component {
  getCurrentPageItems = () => {
    const {
      currentHotSearchPage,
      handleHotSearchClick,
      hotSearchList
    } = this.props

    const pageList = []

    if (hotSearchList.length) {
      for (let i = (currentHotSearchPage - 1) * 7; i < currentHotSearchPage * 7; i++) {
        pageList.push(
          <SearchInfoItem
            key={hotSearchList[i]}
            onClick={() => handleHotSearchClick(hotSearchList[i])}
          >
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
      currentHotSearchPage,
      totalPage
    } = this.props

    return (
      <HotSearchWrapper
        onMouseEnter={handleHotSearchMouseEnter}
        onMouseLeave={handleHotSearchMouseLeave}>

        <Triangle />
        <SearchInfoTitle>
          Hot Searches
          <SearchInfoSwitch onClick={() => handleChangeHotSearchPage(currentHotSearchPage, totalPage, this.spinIcon)}>
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
