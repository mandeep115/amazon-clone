import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout({ hasSubtotal }) {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Empty</h2>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your basket</h1>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">{hasSubtotal && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
