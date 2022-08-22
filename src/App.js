import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Order/Orders";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Product/ProductDetails";
import HeaderBottom from "./components/Header/HeaderBottom";
import Profile from "./Profile/Profile";

const promise = loadStripe(
  "pk_test_51LQekKCKCvt4iPakGKoWJhOvasZ5GihWxo1q3iq07bnDWfgLONl9kKTj7ufDt7cLAe8qKCheJshTjlB6omIMby6w008ktfLw48"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <HeaderBottom />
              <Orders />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <HeaderBottom />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <HeaderBottom />
              <Profile />
              <Footer />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <HeaderBottom />

              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Header />
              <HeaderBottom />
              <ProductDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeaderBottom />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
