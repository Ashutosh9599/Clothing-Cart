import React from 'react';
import './ProductList.css'; // Import your CSS file for styling

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul className="products">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="quantities">
              <h4>Available Quantities:</h4>
              <div className="quantity-buttons">
                <button>Size L: {product.quantity.L}</button>
                <button>Size M: {product.quantity.M}</button>
                <button>Size S: {product.quantity.S}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
