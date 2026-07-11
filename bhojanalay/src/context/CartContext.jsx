import {
  createContext,
  useState,
  useEffect
} from "react";

import { toast }
from "react-toastify";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cartItems");

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    });

  // ADD TO CART

  const addToCart = (foodItem) => {

    const itemExists =
      cartItems.find(

        (item) =>
          item.name === foodItem.name

      );

    if (itemExists) {

      setCartItems(

        cartItems.map((item) =>

          item.name === foodItem.name

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item

        )

      );

    }

    else {

      setCartItems([

        ...cartItems,

        {
          ...foodItem,
          quantity: 1
        }

      ]);

    }

    toast.success("Item added to cart");

  };

  // INCREASE QUANTITY

  const increaseQuantity = (name) => {

    setCartItems(

      cartItems.map((item) =>

        item.name === name

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item

      )

    );

  };

  // DECREASE QUANTITY

  const decreaseQuantity = (name) => {

    setCartItems(

      cartItems
        .map((item) =>

          item.name === name

            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };

  // CLEAR CART

  const clearCart = () => {

    setCartItems([]);

    toast.info("Cart cleared");

  };

  // LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(

      "cartItems",

      JSON.stringify(cartItems)

    );

  }, [cartItems]);

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart

      }}

    >

      {children}

    </CartContext.Provider>

  );
}

export default CartProvider;