const restaurants = [

  {
    id: 1,

    name: "Pizza Hub",

    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",

    cuisine: "Pizza, Italian",

    rating: 4.5,

    deliveryTime: "25 mins",

    menu: [

      {
        category: "Popular Pizzas",

        items: [

          {
            id: 101,

            name: "Farmhouse Pizza",

            description:
              "Loaded with fresh veggies and cheese",

            price: 299,

            image:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
          },

          {
            id: 102,

            name: "Chicken Dominator",

            description:
              "Loaded chicken pizza with extra cheese",

            price: 399,

            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          },

        ],
      },

    ],
  },

  {
    id: 2,

    name: "Burger Town",

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    cuisine: "Burger, Fast Food",

    rating: 4.3,

    deliveryTime: "20 mins",

    menu: [

      {
        category: "Burgers",

        items: [

          {
            id: 201,

            name: "Cheese Burger",

            description:
              "Juicy grilled burger with cheese",

            price: 199,

            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
          },

          {
            id: 202,

            name: "Veg Crispy Burger",

            description:
              "Crispy veg patty with fresh veggies",

            price: 149,

            image:
              "https://images.unsplash.com/photo-1550547660-d9450f859349",
          },

        ],
      },

    ],
  },

  {
    id: 3,

    name: "Biryani Palace",

    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",

    cuisine: "Biryani, Indian",

    rating: 4.7,

    deliveryTime: "30 mins",

    menu: [

      {
        category: "Biryani",

        items: [

          {
            id: 301,

            name: "Chicken Biryani",

            description:
              "Spicy dum biryani with chicken",

            price: 349,

            image:
              "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
          },

          {
            id: 302,

            name: "Paneer Biryani",

            description:
              "Flavorful paneer biryani with spices",

            price: 279,

            image:
              "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
          },

        ],
      },

    ],
  },

];

export default restaurants;