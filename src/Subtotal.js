import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal(0 items):<strong>0</strong>
            </p>
            <small>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        displayType={"Text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix="₹"
        value={0}
      />
      <button className="subtotal_button">Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
