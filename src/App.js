import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./Cart";

import { CartProvider } from "react-use-cart";
import Footer from "./Footer";
import Login from './Login';
import SignUp from "./Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} />
           */}
        </Routes>
    </Router>
    <Cart />
    <Footer />
    </CartProvider>
    
  );
}

export default App;
