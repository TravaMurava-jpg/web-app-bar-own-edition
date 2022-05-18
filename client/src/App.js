import React from 'react'
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
const App = () => {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
};

export default App;