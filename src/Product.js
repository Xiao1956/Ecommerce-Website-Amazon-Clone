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
    <div className="product" key={id}>
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
            .map(
              (
                _,
                i //出于性能考虑，，每个map渲染的元素都需要独特的key值，列表动态变化时，可提升性能和效率
              ) => (
                <p key={i}>⭐</p>
              )
            )}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
