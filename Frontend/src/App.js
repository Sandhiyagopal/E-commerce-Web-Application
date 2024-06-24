import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Products from './Components/ProductList';
// import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome to the E-commerce Store</h1>
        <Products />
        {/* <Cart /> */}
        <Checkout />
      </div>
    </Provider>
  );
}

export default App;
