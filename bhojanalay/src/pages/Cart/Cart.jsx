import { useContext } from "react";

import { CartContext }
from "../../context/CartContext";

import "./Cart.css";

import { useNavigate } from "react-router-dom";

function Cart() {

  const {

    cartItems,

    increaseQuantity,

    decreaseQuantity,

    clearCart

  } = useContext(CartContext);

  // TOTAL PRICE

  const totalPrice =
    cartItems.reduce(

      (total, item) =>

        total +
        (item.price * item.quantity),

      0

    );

    const navigate = useNavigate();

  return (

    <section className="cart-page">

      <h1>Your Cart</h1>

      {

        cartItems.length === 0 ? (

          <p className="empty-cart">
            No items in cart
          </p>

        ) : (

          <div className="cart-container">

            <div className="cart-items">

              {

                cartItems.map((item, index) => (

                  <div
                    className="cart-card"
                    key={index}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">

                      <h3>{item.name}</h3>

                      <p>
                        ₹{item.price}
                      </p>

                      <div className="quantity-box">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.name
                            )
                          }
                        >
                          -
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.name
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <p>

                Total Items:{" "}

                {

                  cartItems.reduce(

                    (total, item) =>

                      total + item.quantity,

                    0

                  )

                }

              </p>

              <h3>
                Total: ₹{totalPrice}
              </h3>

              <button
                onClick={() =>
                  navigate("/checkout")
              }
            >
                Proceed to Checkout
              </button>

              <button
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>

            </div>

          </div>

        )

      }

    </section>

  );
}

export default Cart;