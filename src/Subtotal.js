import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket[0]?.price);
  const totalValue = () => {
    let intitalPrice = 0;
    for (let i = 0; i < basket?.length; i++) {
      intitalPrice = intitalPrice + basket[i]?.price;
      // return intitalPrice + basket[i]?.price;
    }
    return intitalPrice;
  };
  console.log(totalValue());
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal_title">
              {totalValue}
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" className="subtotal_checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        value={totalValue()}
      />
      <button className="subtotal_button">Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
