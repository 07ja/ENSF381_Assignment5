// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from'axios';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState ([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Could not retireve products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
