// src/Pages/actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/products');
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
