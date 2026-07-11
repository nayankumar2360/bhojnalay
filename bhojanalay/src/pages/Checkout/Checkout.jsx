import "./Checkout.css";

import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import { useContext, useState }
from "react";

import { CartContext }
from "../../context/CartContext";

import { useNavigate }
from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const {

    cartItems,

    clearCart

  } = useContext(CartContext);

  const [formData, setFormData] =
    useState({

      name: "",

      phone: "",

      address: "",

      payment: "Cash on Delivery"

    });

  const totalPrice =
    cartItems.reduce(

      (total, item) =>

        total +
        (item.price * item.quantity),

      0

    );

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const placeOrder = () => {

    if (

      !formData.name ||

      !formData.phone ||

      !formData.address

    ) {

      alert("Please fill all fields");

      return;

    }

    clearCart();

    navigate("/success");

  };

  return (

    <>

      <Navbar />

      <section className="checkout-page">

        <div className="checkout-container">

          {/* LEFT */}

          <div className="checkout-form">

            <h2>Delivery Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              onChange={handleChange}
            />

            <select
              name="payment"
              onChange={handleChange}
            >

              <option>
                Cash on Delivery
              </option>

              <option>
                UPI
              </option>

              <option>
                Card Payment
              </option>

            </select>

          </div>

          {/* RIGHT */}

          <div className="checkout-summary">

            <h2>Order Summary</h2>

            {

              cartItems.map((item, index) => (

                <div
                  className="summary-item"
                  key={index}
                >

                  <p>
                    {item.name}
                  </p>

                  <span>
                    x{item.quantity}
                  </span>

                </div>

              ))

            }

            <h3>
              Total: ₹{totalPrice}
            </h3>

            <button
              onClick={placeOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );
}

export default Checkout;