import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("authToken") || null;
  });

  // Keep state and localStorage in sync
  useEffect(() => {
    if (user && token) {
      localStorage.setItem("authUser", JSON.stringify(user));
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authUser");
      localStorage.removeItem("authToken");
    }
  }, [user, token]);

  // REGISTER
  const register = async (name, email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setUser({ _id: data._id, name: data.name, email: data.email });
      setToken(data.token);
      toast.success("Account created successfully!");
      return { success: true };
    } catch (error) {
      toast.error(error.message);
      return { success: false, error: error.message };
    }
  };

  // LOGIN
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setUser({ _id: data._id, name: data.name, email: data.email });
      setToken(data.token);
      toast.success("Welcome back!");
      return { success: true };
    } catch (error) {
      toast.error(error.message);
      return { success: false, error: error.message };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
