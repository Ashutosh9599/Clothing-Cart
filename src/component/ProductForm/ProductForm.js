import React, { useState } from 'react';
import './ProductForm.css'; // Create a CSS file for styling if needed

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: {
      L: 0,
      M: 0,
      S: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      quantity: {
        ...productData.quantity,
        [name]: parseInt(value),
      },
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Perform action with the product data like sending to an API
    console.log('Product data:', productData);
    // Reset form after submission
    setProductData({
      name: '',
      description: '',
      price: '',
      quantity: {
        L: 0,
        M: 0,
        S: 0,
      },
    });
  };

  return (
    <div className="product-form">
      <form onSubmit={handleAddProduct}>
        <div>
          <label>T-Shirt Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity (L):</label>
          <input
            type="number"
            name="L"
            value={productData.quantity.L}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div>
          <label>Quantity (M):</label>
          <input
            type="number"
            name="M"
            value={productData.quantity.M}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div>
          <label>Quantity (S):</label>
          <input
            type="number"
            name="S"
            value={productData.quantity.S}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
