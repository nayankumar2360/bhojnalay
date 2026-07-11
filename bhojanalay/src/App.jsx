import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Home from "./pages/Home/Home";

import RestaurantDetails
from "./pages/RestaurantDetails/RestaurantDetails";

import Cart from "./pages/Cart/Cart";

import Login from "./pages/Login/Login";

import Checkout from "./pages/Checkout/Checkout";

import Success from "./pages/Success/Success";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
        path="/checkout"
        element={<Checkout />}
      />
        <Route
        path="/success"
        element={<Success />}
     />

      </Routes>

    </BrowserRouter>

  );
}

export default App;