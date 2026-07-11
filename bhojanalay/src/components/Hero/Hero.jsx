import "./Hero.css";

import { FaSearch } from "react-icons/fa";

function Hero({
  search,
  setSearch
}) {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Craving Something <br />
          Delicious?
        </h1>

        <p>
          Order food from the best restaurants near you.
          Fast delivery, great taste, and amazing offers.
        </p>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search restaurants"

            value = {search}

            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button>
            Search
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="food"
        />

      </div>

    </section>
  );
}

export default Hero;