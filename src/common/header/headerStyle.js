import styled from 'styled-components'
import logoImage from '../../statics/logo-hn-search.webp'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #fff;
  z-index: 1;
  
  @media (min-width: 1140px) {
    width: 1140px;
    margin: 0 auto;
  }
`

export const Logo = styled.div`
  height: 50px;
  width: 50px;
  background: url('${logoImage}') center no-repeat;
  background-size: contain;
  margin: 0 15px 0 10px;
`

export const Nav = styled.div`
  flex: 1;
`

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  
  .zoom {
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 8px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 1.7rem;
    color: #FF742B;
  }
  
  @media (min-width: 768px) {
    .zoom {
      transition: all 0.4s ease-out;
      transform: rotate(0deg);
  
      &.focused {
        background: #f0f0f0;
        transform: rotate(360deg);
      }
    }
  }
`

export const NavSearch = styled.input`
  width: 240px;
  height: 45px;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  background: #fff;
  border: 1px solid #FF742B;
  font-size: 1.1rem;
  color: #666;
  transition: all .3s ease-out;
  
  &::placeholder {
    color: #999
  }
  
  @media (min-width: 768px) {
    &.focused {
      width: 360px;
    }
  }
`
/* Hot Search Panel */

export const HotSearch = styled.div`
  position: absolute;
  left: 0;
  top: 63px;
  width: 240px;
  padding: 20px 20px 15px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`

export const SearchInfoTitle = styled.div`
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  
  &:hover {
    color: #555;
  }
  
  .spin {
    display: block;
    float: left;
    font-size: 0.8rem;
    margin-right: 3px;
    margin-top: 3px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  padding: 15px 0 0;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  color: #969696;
  padding: 4px 6px;
  font-size: 0.8rem;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    color: #333;
    border: 1px solid #FF742B;
  }
`