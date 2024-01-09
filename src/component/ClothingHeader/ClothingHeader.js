import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from '../Store/ProductContext';
import "./ClothingHeader.css";

const ClothingHeader = (props) => {
  const { calculateTotalQuantity } = useProductContext();
  return (
    <header className="header">
      <h1>Clothing APP</h1>
      <button  className="cart-button" onClick={props.onShowCart}>
        <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span>
        <span className="cart-name">Your Cart</span>
        <span className="cart-count">{calculateTotalQuantity()}</span>
      </button>
    </header>
  );
};

export default ClothingHeader;
