import React from 'react';
import ProductList from './ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Cart from './Cards';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
