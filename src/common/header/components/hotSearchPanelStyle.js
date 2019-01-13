import styled from 'styled-components'

export const HotSearchWrapper = styled.div`
  position: absolute;
  left: 190px;
  top: 63px;
  width: 240px;
  padding: 20px 20px 15px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: rgba(255,255,255,0.9);
`

export const SearchInfoTitle = styled.div`
  color: #969696;
  font-size: 1.1rem;

`

export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  font-size: 1rem;
  
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