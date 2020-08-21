import React from 'react';
import Counter from './components/Counter'
import RequestIndicator from './components/RequestIndicator'
import store from './store'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <RequestIndicator />
      <Counter/>
    </div>
  </Provider>
)
export default App
