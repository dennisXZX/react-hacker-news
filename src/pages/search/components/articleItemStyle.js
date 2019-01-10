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
`

export const MetaDataItem = styled.span`
  font-size: 0.8rem;
  border-right: 1px solid dimgray;
  padding: 0 10px;
  
  &:last-child {
    border: 0;
  }
`

