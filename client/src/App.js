import React from 'react'
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './pages/aboutUs';
import BookPage from './pages/bookPage';
import Contacts from './pages/contacts';


const App = () => {
  console.log('here')
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route index path="/" element={<BookPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;