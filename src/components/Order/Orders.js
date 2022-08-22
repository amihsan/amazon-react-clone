import React, { useState, useEffect } from "react";

import { useStateValue } from "../../store/StateProvider";
import { db } from "../../firebase";
import classes from "./Orders.module.css";
import Order from "./Order";
import {
  query,
  collection,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user?.uid);
      const colRef = collection(docRef, "orders");
      const q = query(colRef, orderBy("created", "desc"));

      onSnapshot(q, (snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={classes.orders}>
      <h1>Your Orders</h1>

      <div className={classes.order}>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
