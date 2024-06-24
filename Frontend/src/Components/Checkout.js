import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Checkout = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const cart = useSelector(state => state.product.cart);

  const handleCheckout = async () => {
    await axios.post('http://localhost:5000/api/checkout', { user, cart });
    // Handle response (e.g., show a confirmation message)
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
    <div>
      {/* <h2>Checkout</h2>
      <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <button onClick={handleCheckout}>Place Order</button> */}
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
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
