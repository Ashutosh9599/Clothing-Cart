import React from 'react';
import "./Cartitem.css";

const Cartitem = ({ item }) => {
  return (
    <li>
      <div className="cart-item">
        <samp className="cart-item1">{item.name}</samp>
        {Object.entries(item.quantity).map(([size, quantity]) => (
          <samp className="cart-item3" key={size}><samp className="amount">x {quantity}</samp>{size}</samp>
        ))}
        
        <samp className="cart-item2">${item.price}</samp>
      </div>
    </li>
  );
};

export default Cartitem;