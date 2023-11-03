import React, { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};


const cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const addExistingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      if (addExistingCartItemIndex !== -1) {
        const existingAmount = parseInt(
          state.items[addExistingCartItemIndex].amount,
          10
        );
        const newAmount = parseInt(action.item.amount, 10);
        const updatedAmount = existingAmount + newAmount;

        // Update the item's amount with the new numeric value
        state.items[addExistingCartItemIndex].amount = updatedAmount;
      } else {
        // If it's a new item, simply add it to the items array
        state.items.push(action.item);
      }

      return {
        ...state,
        totalAmount: updatedTotalAmount,
      };

      case "REMOVE":
        const removeExistingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
      
        if (removeExistingCartItemIndex === -1) {
          return state; // No item found, nothing to remove
        }
      
        const existingItem = state.items[removeExistingCartItemIndex];
        const updatedTotalAmount1 = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[removeExistingCartItemIndex] = updatedItem;
        }
      
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount1,
        };
      

    default:
      return state;
  }
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartreducer,
    defaultCartState
  );

  const addItemToCarthandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",

      id: id,
    });
  };

  // this is the value
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount, // amount as in quantity not price
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
