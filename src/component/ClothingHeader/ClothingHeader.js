import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./ClothingHeader.css";

const ClothingHeader = () => {

  return (
    <header className="header">
      <h1>Clothing APP</h1>
      <button className="cart-button" >
        <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span>
        <span className="cart">Your Cart</span>
        <span className="cart-count">0</span>
      </button>
    </header>
  );
};

export default ClothingHeader;