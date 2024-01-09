import React from 'react';
import Cartitem from './Cartitem';
import Modal from "../Modal/Modal";
import { useProductContext } from '../Store/ProductContext';
import "./Cart.css";

const Cart = (props) => {
  const { cartItems, calculateTotalPrice } = useProductContext();

  return (
    <Modal onClose={props.onClose} className="cart">
      <div>
        <ul className='list-ul'>
          {cartItems.map((item, index) => (
            <Cartitem key={index} item={item} />
          ))}
        </ul>
        <div className='price'>
          <span>Total Price:  <span className='total-price'>${calculateTotalPrice()}</span></span>
        </div>
        <div className='button-price'>
          <button className='button-price1'>Place Order</button>
          <button className='button-price2' onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;