import React, { useEffect } from "react";
// import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import SharedLayout from "./pages/SharedLayout/SharedLayout";

import Login from "./pages/Login/Login";
import { useStateValue } from "./pages/StateProvider/StateProvider";
import { auth } from "./firebase";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./pages/Header/Header";
import Orders from "./pages/Orders/Orders";

const promise = loadStripe(
  "pk_test_51ON5B7DGGaXK149PoPbs51zDynuop9ZprW1CQmK36PG9w83NHlDV7VOUUsvZjDwMNjCJnYmIpYGjjBbPJhHlog4600wH0cu9LR"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
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
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
