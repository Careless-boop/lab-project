import React, { useEffect, useState } from "react";
import MerchList from "./MerchList";
import Popup from "./Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const initialMerch = [
    { id: 1, name: "White TA-12 t-shirt", price: 69, img: "white-t-shirt.png" },
    { id: 2, name: "Black TA-12 t-shirt", price: 33, img: "black-t-shirt.png" },
    { id: 3, name: "White TA-12 hoodie", price: 1488, img: "white-hoodie.png" },
    { id: 4, name: "Black TA-12 hoodie", price: 1939, img: "black-hoodie.png" },
  ];
  if (!localStorage.getItem("merch")) {
    localStorage.setItem("merch", JSON.stringify(initialMerch));
  }

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart"));
    console.log("1.1 Effect");
    console.log(cartList);
    if (cartList) {
      console.log("1.2 Effect");
      setCart(cartList);
    }
  }, []);

  useEffect(() => {
    console.log("2 Effect");
    console.log(JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item){
    setCart([...cart,item]);
  }

  function togglePopup() {
    console.log(localStorage.getItem("cart"));
    setShowPopup(!showPopup);
    document.body.classList.toggle("no-scroll");
  }
  function deleteItemFromCart(index){
    const temp = [...cart];
    temp.splice(index,1)
    setCart(temp);
  }
  return (
    <div>
      <div className="merch__header">
        <div>
          <h2>Our Merch</h2>
          <p>Feel free to buy some</p>
        </div>
        <img
          className="merch__cart-button"
          src="img/cart-icon.png"
          alt="Cart icon"
          onClick={() => togglePopup()}
        ></img>
      </div>
      {showPopup ? <Popup togglePopup={togglePopup} cartList={cart} removeFromCart={deleteItemFromCart}/> : ""}
      <MerchList addToCart={addToCart}/>
    </div>
  );
}

export default App;
