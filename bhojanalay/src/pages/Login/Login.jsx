import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;

    if (isLogin) {
      result = await login(email, password);
    } else {
      result = await register(name, email, password);
    }

    if (result && result.success) {
      navigate("/");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Bhojanalay</h1>
          <p>
            Delicious food delivered
            at your doorstep 🍔
          </p>
        </div>

        <form className="auth-right" onSubmit={handleSubmit}>
          <h2>
            {
              isLogin
                ? "Sign In"
                : "Create Account"
            }
          </h2>

          {
            !isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )
          }

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {
              isLogin
                ? "Sign In"
                : "Register"
            }
          </button>

          <p className="toggle-text">
            {
              isLogin
                ? "Don't have an account?"
                : "Already have an account?"
            }
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              {
                isLogin
                  ? " Register"
                  : " Sign In"
              }
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;