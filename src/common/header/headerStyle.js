import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  z-index: 1;
  border-bottom: 1px solid #c2c2c2;

  @media (min-width: 1140px) {
    width: 1140px;
    margin: 0 auto;
  }
`

export const Nav = styled.div`
  flex: 1;
`
