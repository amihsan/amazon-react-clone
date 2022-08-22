import React from "react";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Button from "react-bootstrap/Button";
import { getBasketTotal } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import classes from "./Subtotal.module.css";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={classes.gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <Button variant="warning" size="sm" onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </Button>
      {/* <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button> */}
    </div>
  );
}

export default Subtotal;
