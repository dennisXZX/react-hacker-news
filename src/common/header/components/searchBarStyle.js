import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  
  .zoom {
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 1.7rem;
    color: #FF742B;
  }
  
  .zoom:hover {
    font-weight: bold;
    background: #f0f0f0;
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
  border-radius: 32px;
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