import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Pages/actions/productActions';
import { addToCart } from '../Pages/actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {['Chairs', 'Tables', 'Top'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
