import "./RestaurantDetails.css";

import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import { useContext } from "react";

import { useParams } from "react-router-dom";

import restaurants from "../../data/restaurants";

import { CartContext }
from "../../context/CartContext";

function RestaurantDetails() {

  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } =
    useContext(CartContext);

  if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (

    <>

      <Navbar />

      <section className="restaurant-details">

        <div className="restaurant-banner">

          <div className="overlay">

            <h1>{restaurant.name}</h1>

            <p>
              {restaurant.cuisine}
            </p>

            <span>
              ⭐ {restaurant.rating} Rating
            </span>

          </div>

        </div>

        {

          restaurant.menu.map((category, index) => (

            <div
              className="menu-category"
              key={index}
            >

              <div className="menu-title">

                <h2>{category.category}</h2>

              </div>

              <div className="food-grid">

                {

                  category.items.map((item) => (

                    <div
                      className="food-card"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="food-info">

                        <h3>{item.name}</h3>

                        <p>
                          {item.description}
                        </p>

                        <h4>
                          ₹{item.price}
                        </h4>

                        <button
                          onClick={() =>
                            addToCart(item)
                          }
                        >
                          Add to Cart
                        </button>

                      </div>

                    </div>

                  ))

                }

              </div>

            </div>

          ))

        }

      </section>

      <Footer />

    </>

  );
}

export default RestaurantDetails;