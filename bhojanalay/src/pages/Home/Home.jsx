import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";

import Hero from "../../components/Hero/Hero";

import Categories from "../../components/Categories/Categories";

import PopularRestaurants
from "../../components/PopularRestaurants/PopularRestaurants";

import OfferBanner
from "../../components/OfferBanner/OfferBanner";

import Footer
from "../../components/Footer/Footer";

function Home() {

  const [search, setSearch] =
    useState("");

  return (

    <>

      <Navbar />

      {/* HOME */}

      <section id="home">

        <Hero
          search={search}
          setSearch={setSearch}
        />

      </section>

      {/* RESTAURANTS */}

      <section id="restaurants">

        <Categories />

        <PopularRestaurants
          search={search}
        />

      </section>

      {/* OFFERS */}

      <section id="offers">

        <OfferBanner />

      </section>

      {/* CONTACT */}

      <section id="contact">

        <Footer />

      </section>

    </>

  );
}

export default Home;