import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Home from './screens/Home';
import logo from './logo.svg';
import { store } from '../src/redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" width={300} height={300} />
        </div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
