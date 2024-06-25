import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Pages/actions/productActions';
import { addToCart } from '../Pages/actions/cartActions';
import './style.css';
import Header from './header';
import TopImage from "../assets/Top immages.jpg";
import TableImage from "../assets/Table images.jpg";
import ChairImage from "../assets/chair images.jpg";
import { Navigate, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);
  const { cart } = useSelector(state => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const buttonHandller = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  }

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  console.log("sssProudct",products,cart);

  return (
    <div className="centerPage">
      <Header />
      <div className="product-list">
      {['Chairs', 'Tables', 'Dining Tops'].map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id} className="product-card">{console.log("sssCondition",cart.includes(product))}
                <img src={product.category==="Dining Tops" ? TopImage :product.category==="Chairs" ? ChairImage : TableImage} alt="products" className='productImage' />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button style={{backgroundColor:isInCart(product) ?"	#FFA756":"#0086FF"}} onClick={() => buttonHandller(product)}
                >{isInCart(product) ? "Go to Cart":"Add to Cart"}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
