import React, { useRef, useState } from "react";
import "./MealItemForm.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

const[amountIsValid, setAmountIsValid]=useState(true);
const amountInputRef = useRef();

const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount= amountInputRef.current.value// this value will be string.
    const numericEnteredAmount = +enteredAmount;// amount as in quantity
    
    
    
    if (enteredAmount.trim().length ===0 || numericEnteredAmount.length <1 ||numericEnteredAmount > 5)
    {
      setAmountIsValid(false);
      return;
    }
   
    props.onAddToCart(enteredAmount); // sending to MealItem
  }
  

  return (

    <form className="form" onSubmit={submitHandler}>
      <Input
        label="quantity"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!amountIsValid && <p>invalid input</p>}
    </form>
  );
};

export default MealItemForm;

/*
So, the use of colons (:) in the object you pass as a prop is just a way to define property-value pairs within an object, and when spread into the JSX, they are correctly interpreted as attributes with equal signs (=) as required in JSX. The conversion is handled by the JSX parser.
<Input
  input={{
    id: "amount",
    type: "number",
    min: "1",
    max: "5",
    defaultValue: "1",
  }}
/>
The spread operator takes the properties from this object and sets them as attributes for the <input> element. In this case, it would result in:
<input
  id="amount"
  type="number"
  min="1"
  max="5"
  defaultValue="1"
/>
*/