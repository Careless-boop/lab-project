import React, { useEffect, useState } from "react";
import MerchList from "./MerchList";
import Popup from "./Popup";
import axios from "axios";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [cart, setCart] = useState([]);
  const [merchList,setMerchList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8008/merch")
      .then((response) => {
        const merchData = response.data;
        setMerchList(merchData);
        localStorage.setItem("merch", JSON.stringify(merchData));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart"));
    console.log(cartList);
    if (cartList) {
      setCart(cartList);
    }
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function togglePopup() {
    console.log(localStorage.getItem("cart"));
    setShowPopup(!showPopup);
    document.body.classList.toggle("no-scroll");
  }
  function deleteItemFromCart(index) {
    const temp = [...cart];
    temp.splice(index, 1);
    setCart(temp);
  }
  return (
    <div>
      <div className="merch__header">
        <div>
          <h2>Our Merch</h2>
          <p>Feel free to buy some</p>
        </div>
        <div className="merch__cart-container">
          <img
            className="merch__cart-button"
            src="img/cart-icon.png"
            alt="Cart icon"
            onClick={() => togglePopup()}
          ></img>
          <div className="merch__cart-count">{cart.length}</div>
        </div>
      </div>
      {showPopup ? (
        <Popup
          togglePopup={togglePopup}
          cartList={cart}
          removeFromCart={deleteItemFromCart}
        />
      ) : (
        ""
      )}
      <MerchList merchList={merchList} addToCart={addToCart} />
    </div>
  );
}

export default App;
