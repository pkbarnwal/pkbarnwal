import { useState } from 'react';
import { Route,Switch, Redirect  } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import Layout from '../src/components/Layout/Layout';

import CartProvider from './store/cart-provider';


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  
  const hideCartHandler = () => {
     setCartIsShown(false);
   }

  const showCartHandler = () => {
     setCartIsShown(true);
   }
  
  return (
    //  {cartIsShown && <Cart click={hideCartHandler}/>
    <CartProvider>
       <Layout clicked ={showCartHandler}>
          <Switch>
            <Route path="/" exact >
                <Redirect to="/home"/>
              </Route>
              <Route path="/home" exact>
                <Home/>
             </Route>
             <Route path="/products" exact>
                <Products/>
             </Route>
             <Route path="/checkout">
               <Checkout />
             </Route>
         </Switch>
         
         </Layout>
     </CartProvider>
  );
}

export default App;
