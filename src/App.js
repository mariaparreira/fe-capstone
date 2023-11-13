import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/Landing_Page";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
