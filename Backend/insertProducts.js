const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./db');

connectDB();

const products = [
  { name: 'Lounge Chair', price: 2000, category: 'Chairs' },
  { name: 'Dining Chair', price: 1800, category: 'Chairs' },
  { name: 'Table1', price: 3000, category: 'Tables' },
  { name: 'Table2', price: 3200, category: 'Tables' },
  { name: 'Table3', price: 3100, category: 'Tables' },
  { name: 'Dining Top', price: 900, category: 'Tops' }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB();
