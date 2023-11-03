import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
  const [cartIsShown,setCartIsShown]=useState(true);
  
  
  const showCarthandler = () => {
    setCartIsShown(true);
  }
  const hidecartHandler =()=>{
    setCartIsShown(false);
  }
  
  
  return (
    <CartProvider>
   { cartIsShown && <Cart hidecartHandler={hidecartHandler}/>}
      <Header 
      onShowCart={showCarthandler}
      />
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
