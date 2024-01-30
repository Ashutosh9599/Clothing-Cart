import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/1e9283a4cbdb4512967b3e7db9342a05/addproduct');
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProductData();
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/1e9283a4cbdb4512967b3e7db9342a05/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetchCartData();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await fetch('https://crudcrud.com/api/1e9283a4cbdb4512967b3e7db9342a05/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      setProductData([...productData, product]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const existingCartItemIndex = cartItems.findIndex(
        (item) => item.name === product.name
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        const existingCartItem = updatedCartItems[existingCartItemIndex];

        for (const size in product.quantity) {
          if (product.quantity.hasOwnProperty(size)) {
            existingCartItem.quantity[size] =
              (existingCartItem.quantity[size] || 0) +
              product.quantity[size];
          }
        }
        console.log('Updating cart item:', existingCartItem);
        const response = await fetch(
          `https://crudcrud.com/api/1e9283a4cbdb4512967b3e7db9342a05/cart/${existingCartItem._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(existingCartItem),
          }
        );
        console.log('Update response:', response);
        if (!response.ok) {
          throw new Error('Failed to update cart item');
        }

        setCartItems(updatedCartItems);
      } else {
        const response = await fetch(
          'https://crudcrud.com/api/1e9283a4cbdb4512967b3e7db9342a05/cart',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }

        setCartItems([...cartItems, product]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
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
    <ProductContext.Provider value={{ productData, cartItems, addProduct, addToCart, calculateTotalQuantity, calculateTotalPrice }}>
      {children}
    </ProductContext.Provider>
  );
};
