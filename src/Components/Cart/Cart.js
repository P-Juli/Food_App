import Modal from '../UI/Modal';
import './Cart.css';
import CartContext from '../../Store/cart_context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount= cartCtx.totalAmount
  const hasItems=cartCtx.items.length >0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  }
  
  


  return (
    <Modal hidecartHandler={props.hidecartHandler}>
      {/* {cartCtx.items.map((item)=><h7><li>{item.name}</li></h7>)} */}
      <ul className='car1-items'>
  {cartCtx.items.map((item) => (
    <li key={item.id}>
      <CartItem
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}

        // onRemove={() => cartItemRemoveHandler(item.id)}
        // onAdd={() => cartItemAddHandler(item)}
        
      />
    </li>
  ))}
</ul>

      <div className='total'>
        <span>Total Amount :</span>
        <span>${totalAmount}</span>
        </div>
      <div className='actions'>
        {/* chnage here */}
        <button className='button--alt' onClick={props.hidecartHandler}>Close</button>
        {hasItems&&<button className='button'>Order</button>}
       </div>
    </Modal>
  );
}



export default Cart;