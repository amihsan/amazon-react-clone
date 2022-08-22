import React from "react";
import { useStateValue } from "../../store/StateProvider";
import ProductRating from "../Product/ProductRating";
import classes from "./CheckoutProduct.module.css";
import Button from "react-bootstrap/Button";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img className={classes.image} src={image} alt="" />

      <div className={classes.info}>
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.rating}>
          <ProductRating />
        </div>
        {!hideButton && (
          <Button variant="warning" size="sm" onClick={removeFromBasket}>
            Remove from Basket
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
