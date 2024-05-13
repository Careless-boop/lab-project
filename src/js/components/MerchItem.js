import React from "react";

function MerchItem({ item, addToCart }) {
  function handleAddToCartClick() {
    console.log(item);
    console.log("Was added!");
    addToCart(item);
  }

  return (
    <div className="merch-item">
      <img
        src={"img/" + item.img}
        className="merch-item__img"
        alt={item.name}
      ></img>
      <div className="merch-item__info">
        <h4 className="merch-item__name">{item.name}</h4>
        <p className="merch-item__price">{item.price} $</p>
        <button
          className="merch-item__button"
          onClick={() => handleAddToCartClick()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default MerchItem;
