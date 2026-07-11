import "./PopularRestaurants.css";

import { useNavigate } from "react-router-dom";

import restaurants from "../../data/restaurants";

function PopularRestaurants({ search }) {

  const navigate = useNavigate();

  const filteredRestaurants = restaurants.filter((item) =>

    item.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <section className="restaurants">

      <div className="restaurant-title">

        <h2>Popular Restaurants</h2>

        <p>Top rated restaurants near you</p>

      </div>

      <div className="restaurant-grid">

        {

          filteredRestaurants.map((item) => (

            <div
              className="restaurant-card"
              key={item.id}

              onClick={() =>
                navigate(`/restaurant/${item.id}`)
              }
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="restaurant-info">

                <div className="restaurant-top">

                  <h3>{item.name}</h3>

                  <span>{item.rating} ⭐</span>

                </div>

                <p>{item.cuisine}</p>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );
}

export default PopularRestaurants;