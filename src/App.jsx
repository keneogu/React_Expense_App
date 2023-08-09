import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from "./pages/Login";

function App() {

  return (
    <div className=''>
      <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
