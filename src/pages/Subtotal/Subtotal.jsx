import React from "react";
import "../../assets/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link, useNavigate } from "react-router-dom";
function Subtotal() {
  const navigateTo = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigateTo("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
