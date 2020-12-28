import React from "react";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h2 className="checkout_heading">Your Shoping Bag</h2>
        {basket.map((item) => {
          return (
            <div className="checkout_products">
              <div className="checkout_products_left">
                <img src={item.image} />
              </div>
              <div className="checkout_products_right">
                <p>{item.title}</p>
                <p className="price_tag">
                  <small>₹</small>
                  <strong>{item.price}</strong>
                </p>
                <div className="product_rating">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐</p>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
