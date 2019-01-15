import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;

  .zoom {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 1.7rem;
    color: #ff742b;
  }

  @media (min-width: 768px) {
    .zoom {
      transition: all 0.4s ease-out;
      transform: rotate(0deg);

      &.focused {
        background: #f6f6ef;
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
  background: #fffff3;
  border: 1px solid #ff742b;
  font-size: 1.1rem;
  color: #666;
  transition: all 0.3s ease-out;

  &::placeholder {
    color: #999;
  }

  @media (min-width: 768px) {
    &.focused {
      width: 480px;
    }
  }
`
