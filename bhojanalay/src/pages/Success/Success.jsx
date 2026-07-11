import "./Success.css";

import { useNavigate }
from "react-router-dom";

function Success() {

  const navigate = useNavigate();

  return (

    <section className="success-page">

      <div className="success-box">

        <div className="success-icon">
          ✅
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Your delicious food is on the way 🍔
        </p>

        <button
          onClick={() =>
            navigate("/")
          }
        >
          Continue Shopping
        </button>

      </div>

    </section>

  );
}

export default Success;