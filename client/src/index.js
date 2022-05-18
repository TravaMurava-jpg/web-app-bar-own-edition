import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReservationsObserver from './reservations/reservationsObserver.js'
export const Context = createContext(null)


ReactDOM.render(
    <Context.Provider value={{
    user: new ReservationsObserver()
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
)