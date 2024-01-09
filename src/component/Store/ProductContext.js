import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addProduct = (data) => {
    setProductData([...productData, data]);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);

    if (existingItemIndex !== -1) {
      // Product with the same name exists in the cart
      const updatedCartItems = [...cartItems];
      const existingItem = updatedCartItems[existingItemIndex];

      // Update the quantity for the corresponding size
      for (const size in product.quantity) {
        if (product.quantity.hasOwnProperty(size)) {
          existingItem.quantity[size] = (existingItem.quantity[size] || 0) + product.quantity[size];
        }
      }

      setCartItems(updatedCartItems);
    } else {
      // Product with a new name, add it to the cart
      setCartItems([...cartItems, product]);
    }
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => {
      const sizeQuantities = Object.values(item.quantity);
      return total + sizeQuantities.reduce((sizeTotal, sizeQuantity) => sizeTotal + sizeQuantity, 0);
    }, 0);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      for (const size in item.quantity) {
        if (item.quantity.hasOwnProperty(size)) {
          total += item.price * item.quantity[size];
        }
      }
      return total;
    }, 0);
  };

  return (
    <ProductContext.Provider value={{ productData, addProduct, cartItems, addToCart, calculateTotalQuantity, calculateTotalPrice }}>
      {children}
    </ProductContext.Provider>
  );
};