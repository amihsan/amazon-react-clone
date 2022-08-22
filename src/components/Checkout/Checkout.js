import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../store/StateProvider";
import ProductRating from "../Product/ProductRating";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className={classes.checkout}>
      <div className={classes.left}>
        <img
          className={classes.ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className={classes.title}>Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={<ProductRating />}
            />
          ))}
        </div>
      </div>

      <div className={classes.right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
