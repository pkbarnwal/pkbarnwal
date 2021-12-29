import React,{useContext, useState} from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from '../Cart/CartItem';

const Cart =(props) => {
  const [cartIsShown,setCartIsShown] = useState(false);
  const cartCtx = useContext(cartContext);
  
  const toAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
 

  const cartItemRemoveHandler =( id ) =>{
      cartCtx.removeItem(id);
  }   
   const cartItemAddHandler=(item) =>{
     cartCtx.addItem({...item,amount:1});
    }
      const cartItems=(<ul className={classes['cart-items']}>
      {cartCtx.items.map((item)=>(
      /* {[{id:'c1', name:'sushi', amount:2,price:12.99}].map((item)=>( */
         <CartItem  key={item.id}
                    id={item.id} 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onRemove={cartItemRemoveHandler.bind(null,item.id)} 
                    onAdd ={cartItemAddHandler.bind(null,item)} 
                    />
         ))}
          </ul>)
   
   return(
        <Modal onClose={props.click}>
          {cartItems}
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>{toAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={hideCartHandler}>Close</button>
           { hasItems && <button className={classes.button}>Order</button>}
          </div>
        </Modal>
    );
}

export default Cart;