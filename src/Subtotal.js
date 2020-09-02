import React from "react";
import "./Subtotal.css";
import CurrencyFormat, { NumberFormat } from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
