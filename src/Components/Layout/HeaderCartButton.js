import React, { useContext, useEffect, useState } from 'react'
import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/cart_context'


const HeaderCartButton = (props) => {
  const[btnIsHighLighted,setBtnIsHighLighted]=useState(false);
  
  const cartCtx = useContext(CartContext);
  //amount as in quantity not price.
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + parseInt(item.amount)
  }, 0);
 
const btnClasses=`button ${btnIsHighLighted?'bump':''}`

useEffect(()=>{
  
  if (cartCtx.items.length === 0){
return;
  }
  setBtnIsHighLighted(true)
  const timer=setTimeout(()=>{
    setBtnIsHighLighted(false)
  },300)
return ()=>{
  clearTimeout(timer);
}

 },[cartCtx.items.length,cartCtx.totalAmount]);
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className='icon'><CartIcon /> </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>

      
    </button>
  )
}

export default HeaderCartButton
