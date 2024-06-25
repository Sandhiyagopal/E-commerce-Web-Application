const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); 
const User = require('./models/User'); 
const Order = require('./models/Order'); 
const OrderItem = require('./models/OrderItem'); 
const Product = require('./models/Product'); 
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Lounge Chair', price: 2000, category: 'Chairs' },
  { id: 2, name: 'Dining Chair', price: 1800, category: 'Chairs' },
  { id: 3, name: 'Table1', price: 3000, category: 'Tables' },
  { id: 4, name: 'Table2', price: 3200, category: 'Tables' },
  { id: 5, name: 'Table3', price: 3100, category: 'Tables' },
  { id: 6, name: 'Dining Top', price: 900, category: 'Dining Tops' }
];


app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/checkout', async (req, res) => {
  const { user, cart } = req.body;
  try {
    const newUser = new User(user);
    await newUser.save();

    const orderItems = await Promise.all(
      cart.map(async item => {
        console.log("Itemmmmm",item)
    //     const productId = new mongoose.Types.ObjectId(item.id); 
    // const product = await Product.findById(productId);

    //     if (!product) {
    //       throw new Error(`Product not found for id: ${productId}`);
    //     }

        const orderItem = new OrderItem({
          // product: product._id,
          quantity: 1 
        });

        await orderItem.save();
        return orderItem;
      })
    );

    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

    const order = new Order({
      amount: totalAmount,
      user: newUser._id,
      items: cart.map(item => item._id)
    });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
