import React from "react";
import MerchItem from "./MerchItem";

function MerchList({ merchList, addToCart }) {
  return (
    <div>
      <ul>
        {merchList.map((item,index) => (
          <MerchItem key={index} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default MerchList;
