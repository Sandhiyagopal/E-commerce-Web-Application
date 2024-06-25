import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Header from './header';
import './style.css';

const Checkout = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', address: '' });
  const cart = useSelector(state => state.cart.cart);

  const handleChange = (e) => {
    setUser({ ...user, [ e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, cart })
    });

    if (response.ok) {
      alert('Order placed successfully!');
    } else {
      alert('Error placing order');
    }
  }

  return (
    <div className="centerPage">
      <Header />
      <div className="checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
            required
            rows="4"
            cols="50"
          />
          

        {cart.length>0&&<div style={{marginTop:"1.5rem"}}>
          {cart.map(item => (
            <div key={item.id} style={{display:"flex",justifyContent:"space-between",width:"300px"}}>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <div style={{textAlign:"right",width:"300px",margin:"1rem 0"}}>
            Total: ${cart.length>0&&cart.reduce((acc, item) => acc + item.price, 0)}
          </div>
        </div>
        }
        <button type="submit">Place Order</button>
        </form>

      </div>
    </div>
  );
};

export default Checkout;
