import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Pages/actions/cartActions';
import '../style.css';

const Carts = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
      <div className="total">
        Total: ${cart.reduce((acc, item) => acc + item.price, 0)}
      </div>
    </div>
  );
};

export default Carts;
