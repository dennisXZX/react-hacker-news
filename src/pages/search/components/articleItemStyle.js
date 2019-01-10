import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  border-bottom: solid 1px #eee;
  padding: 10px 0;
`

export const Title = styled.div`
  margin-bottom: 10px;
`

export const MetaDataWrapper = styled.div`
  color: dimgray;
  
  .desktop-only {
    display: none;
  }
  
  @media (min-width: 1140px) {
    .desktop-only {
      display: inline-block;
    }
  }
`

export const MetaDataItem = styled.span`
  font-size: 0.8rem;
  border-right: 1px solid dimgray;
  padding: 0 10px;
  
  &:last-child {
    border: 0;
  }
  
  :nth-last-child(2) {
    border: 0;
  }
  
  @media (min-width: 1140px) {
    :nth-last-child(2) {
      border-right: 1px solid dimgray;
    }
  }  
`

