import React,{ Fragment, useContext} from 'react';

import classes from './ProductItem.module.css'; 

import CartContext  from '../../../store/cart-context';

const ProductItem =(props) =>{
    const CartCtx = useContext(CartContext);

    const hasItem = CartCtx.items.length > 0
    
    const addItemToCartHandler = (amount) => { 
        CartCtx.addItem({ 
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
          });
} 
    const cartItemRemoveHandler =( id ) =>{
        CartCtx.removeItem(id);
    } 
    return (
        <Fragment className={classes.cardContainer}>
           <div className={classes.imageContainer}>
               <img  className={classes.image} src={props.url} alt="product"/>
             </div>
             <div><h3>{props.name}</h3>
                 <div><h4>Rs. {props.price}</h4></div>
                <div className={classes.actions}>
              { hasItem  && <button onClick={cartItemRemoveHandler.bind(null,props.id)}>-</button>}
                 <button onClick={addItemToCartHandler.bind(null,1)}>+</button>
             </div>
           </div>
        </Fragment>
        
    )
}


export default ProductItem;