import React, { useContext } from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/cart_context'

const MealItem = (props) => {

const cartCtx = useContext(CartContext);

//amount is the quantity not price
  const addToCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  };
console.log("hello iam inside mealItem",props.id,props.name)
  

  const price=`Nrs${props.price}/-` //Nrs 140/-
  return (
    <li className='meal'>
      <div>
      <div><h3>{props.name}</h3></div>
      <div className='description'>{props.description}</div>
      <div className='price'>{price}</div>
      
      </div>
      <div><MealItemForm onAddToCart={addToCartHandler}/></div>
    </li>
  )
}

export default MealItem
