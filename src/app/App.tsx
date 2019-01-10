import React, { Component } from 'react';
import store from '../store/configStore'
import { Provider } from 'react-redux'

import GlobalStyle from '../css/GlobalStyle'
import Header from '../common/header/Header'
import ResultPage from '../pages/result/ResultPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <ResultPage />
      </Provider>
    );
  }
}

export default App;
