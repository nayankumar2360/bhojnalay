import "./Categories.css";

function Categories() {

  const items = [
    {
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      name: "Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      name: "Biryani",
      image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
    },

    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
    }
  ];

  return (
    <section className="categories">

      <div className="section-title">
        <h2>Top Categories</h2>
        <p>Explore your favourite food categories</p>
      </div>

      <div className="category-grid">

        {
          items.map((item, index) => (
            <div className="category-card" key={index}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Categories;