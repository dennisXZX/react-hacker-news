import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  border-bottom: solid 1px #eee;
  padding: 13px 0;
`

export const Title = styled.a`
	display: inline-block;
  margin-bottom: 7px;
  font-size: 1.1rem;
  color: #000;
  text-decoration: none;
  
  &:hover {
  	color: #FF742B;
  }
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
  
  &:first-child {
    padding-left: 0;
  }
  
  &:last-child {
    border: 0;
  }
  
  :nth-last-child(2) {
    border: 0;
  }
  
  a {
    color: dimgray;
    text-decoration: none;
  }
  
  a:hover {
  	text-decoration: underline;
  }
  
  @media (min-width: 1140px) {
    :nth-last-child(2) {
      border-right: 1px solid dimgray;
    }
  }
`

