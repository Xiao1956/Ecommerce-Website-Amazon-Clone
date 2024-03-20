import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispath] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispath({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* fill()用来初始化 */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
