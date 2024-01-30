import React from 'react';
import { useProductContext } from '../Store/ProductContext';
import './ProductList.css';

const ProductList = () => {
  const { productData, addToCart } = useProductContext();

  const addToCartHandler = async (productIndex, size) => {
    try {
      const selectedProduct = productData[productIndex];

      if (selectedProduct.quantity[size] > 0) {
        const updatedProductData = [...productData];
        updatedProductData[productIndex].quantity[size] -= 1;

        const cartItem = {
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: { [size]: 1 },
        };

        await addToCart(cartItem);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className='table-container'>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity (L)</th>
            <th>Quantity (M)</th>
            <th>Quantity (S)</th>
          </tr>
        </thead>
        <tbody>
          {productData && productData.length > 0 ? (
            productData.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td className='td-price'>${product.price}</td>
                <td><button className='button' onClick={() => addToCartHandler(index, 'L')}>{product.quantity.L}</button></td>
                <td><button className='button' onClick={() => addToCartHandler(index, 'M')}>{product.quantity.M}</button></td>
                <td><button className='button' onClick={() => addToCartHandler(index, 'S')}>{product.quantity.S}</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-products">No products submitted yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
