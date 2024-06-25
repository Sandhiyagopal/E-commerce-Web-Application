import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Pages/actions/cartActions';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';

const Carts = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/checkout');
  };

  console.log("sssCards",cart)

  return (
    <div className="centerPage">
      <Header />
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.length>0&&cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))
        )}
        <div className="total">
          Total: ${cart.length>0&&cart.reduce((acc, item) => acc + item.price, 0)}
        </div>
        <button className='checkoutButton' style={{backgroundColor:"#FFA756"}} onClick={checkoutHandler}>Checkout</button>
      </div>
    </div>
  );
};

export default Carts;
