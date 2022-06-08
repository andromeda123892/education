import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Compilations from './store/Compilations';
import UserStore from './store/UserStore';

export const Context = createContext()
console.log(process.env.REACT_APP_API_URL)
ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      tasks: new Compilations(),
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);

