import React from "react";
import MerchItem from "./MerchItem";

function MerchList({addToCart}) {
  const merchList = JSON.parse(localStorage.getItem("merch"));

  return (
    <div>
      <ul>
        {merchList.map((item) => (
          <MerchItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default MerchList;
