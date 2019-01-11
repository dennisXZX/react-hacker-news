import { createGlobalStyle } from 'styled-components'

const ReactPaginationStyle = createGlobalStyle`
  .paginationContainer {
    display: flex;
  }
  
  .paginationPage {
    margin: 3px;
    border: 1px solid #9d9d9d;
    outline: none;
    color: #9d9d9d;
    padding: 5px 15px;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    font-size: 0.8rem;
    
    &:hover {
      border: 1px solid #ffb290;
      color: #ffb290;
    }
    
    a {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: inline-block;
      text-align: center;
      line-height: 25px;
      outline: none
    }
  }
  
  .paginationBreak {
    margin: 0 10px;
    cursor: pointer;
    
    a {
      outline: none;
    }
  }
  
  .paginationPrevious, .paginationNext {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #9d9d9d;
    outline: none;
    padding: 5px;
    color: #9d9d9d;
    border-radius: 3px;
    height: 22px;
    line-height: 22px;
    width: 15px;
    cursor: pointer;
    font-size: 0.8rem;
    
    &:hover {
      border: 1px solid #ffb290;
      color: #ffb290;
    }
    
    a {
      padding: 6px 8px;
      outline: none;
    }    
  }
  
  .paginationPrevious {
    margin-right: 13px;
  }
  
  .paginationNext {
    margin-left: 13px;
  }
  
  .paginationActive {
    border: 1px solid #FF742B;
    color: #FF742B;
  }
`

export default ReactPaginationStyle