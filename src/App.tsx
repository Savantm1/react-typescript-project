import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './Components/AppRouter/AppRouter';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
