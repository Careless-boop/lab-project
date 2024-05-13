import React from "react";

function Popup({ togglePopup, cartList, removeFromCart }) {
  console.log(cartList);
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-content__header">
          <h3>Your Cart</h3>
          <p>Remove with "X" button near the item.</p>
        </div>
        <span className="popup__close" onClick={() => togglePopup()}>
          &times;
        </span>
      </div>
      {cartList.length === 0 ? (
        <div className="popup__summary">
          <p className="popup__desclaimer">Your cart is empty</p>
          <p className="popup__desclaimer">Add some items to see them here!</p>
        </div>
      ) : (
        <div className="popup__summary">
          <p className="popup__summary-count">
            Items in cart: {cartList.length}
          </p>
          <p className="popup__summary-total">
            Total:
            {cartList.reduce(
              (accumulator, item) => accumulator + item.price,
              0
            )}{" "}
            $
          </p>
          <ul className="popup__items">
            {cartList.map((item, index) => (
              <li className="popup__item">
                <div className="popup__item-header">
                  <p className="popup__item-title">
                    {index + 1}. {item.name}
                  </p>
                  <button
                    className="popup__item-remove"
                    onClick={() => removeFromCart(index)}
                  >
                    X
                  </button>
                </div>
                <p className="popup__item-price">price: {item.price} $</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Popup;
