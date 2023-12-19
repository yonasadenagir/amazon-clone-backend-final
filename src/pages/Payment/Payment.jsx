import React, { useState, useEffect } from "react";
import "../../assets/Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axiosconfig";
import { db } from "../../firebase";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [proccessing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigateTo = useNavigate();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  //  Get basket total
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigateTo("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle change
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items </Link>}</h1>
      </div>

      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>123 React Lane</p>
          <p>chaska MN</p>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Reviwe items and delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={proccessing || disabled || succeeded}>
                <span>{proccessing ? <p>Proccessing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
