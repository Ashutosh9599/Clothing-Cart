import React, { Fragment, useState } from 'react';
import ClothingHeader from './component/ClothingHeader/ClothingHeader';
import ProductForm from './component/ProductForm/ProductForm';
import ProductList from './component/ProductList/ProductList';
import Cart from './component/Cart/Cart';
import { ProductProvider } from './component/Store/ProductContext';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <ProductProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <ClothingHeader onShowCart={showCartHandler} />
        <ProductForm />
        <ProductList />
      </ProductProvider>
    </Fragment>
  );
};

export default App;