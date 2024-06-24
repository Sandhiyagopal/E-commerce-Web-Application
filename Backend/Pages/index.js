const express = require('express');
const cors = require('cors');
const connectDB = require('../db'); // Adjusted the path to db.js if it's one level up
const User = require('../models/User'); // Adjusted the path to User model
const Order = require('../models/Order'); // Adjusted the path to Order model
const OrderItem = require('../models/OrderItem'); // Adjusted the path to OrderItem model
const Product = require('../models/Product'); // Adjusted the path to Product model

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Define routes

// Get products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Checkout
app.post('/api/checkout', async (req, res) => {
  const { user, cart } = req.body;

  try {
    const newUser = new User({
      name: user.name,
      email: user.email
    });

    const savedUser = await newUser.save();

    const amount = cart.reduce((sum, item) => sum + item.price, 0);

    const newOrder = new Order({
      amount,
      user: savedUser._id
    });

    const savedOrder = await newOrder.save();

    for (const item of cart) {
      const newOrderItem = new OrderItem({
        order: savedOrder._id,
        product: item._id
      });
      await newOrderItem.save();
    }

    res.status(200).send('Order placed successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
