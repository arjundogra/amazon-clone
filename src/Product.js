import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket.length);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="price_tag">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
