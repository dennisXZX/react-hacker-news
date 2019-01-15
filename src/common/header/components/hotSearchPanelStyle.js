import styled from 'styled-components'

export const HotSearchWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 500px;
    top: 0;
    width: 240px;
    padding: 20px 20px 15px 20px;
    box-shadow: 0 -5px 40px 0 rgba(236, 231, 231, 0.2),
      20px 10px 30px 30px rgba(236, 231, 231, 0.2);
    border-radius: 3px;
    background-color: #fff;
  }
`

export const Triangle = styled.span`
  display: block;
  position: absolute;
  top: 13px;
  left: -7px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  transform: rotate(45deg);
`

export const SearchInfoTitle = styled.div`
  color: #969696;
  font-size: 1.1rem;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 4px;

  &:hover {
    color: #555;
  }

  .spin {
    display: block;
    float: left;
    font-size: 0.8rem;
    margin-right: 3px;
    transition: all 0.2s ease-in;
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
    border: 1px solid #ff742b;
  }
`
