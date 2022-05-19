import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReservationsObserver from './reservations/reservationsObserver.js'
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />,
  document.getElementById('root')
)