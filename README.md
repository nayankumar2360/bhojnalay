# Bhojnalay - Full-Stack Food Ordering Application

Bhojnalay is a modern, responsive, full-stack food delivery and restaurant discovery application. It allows users to browse food categories, view popular local restaurants, customize their cart, securely log in/register, and complete orders.

---

## 🚀 Key Features

- **Interactive UI/UX:** Built with high-fidelity components, custom CSS, smooth transitions, and responsive grid layouts.
- **Restaurant Discovery:** Explore popular restaurants with detail cards showing cuisine types, ratings, and delivery times.
- **Dynamic Categories:** Seamlessly filter available items by food categories (Pizza, Burgers, Noodles, Desserts, etc.).
- **Detailed Restaurant Pages & Menus:** Browse dedicated menus for each restaurant and add items to your cart.
- **Full-featured Cart System:** Manage quantities, recalculate subtotal, delivery charges, tax, and order totals dynamically.
- **Secure Authentication:** JWT (JSON Web Token) based user registration and login system with password hashing (`bcryptjs`).
- **Checkout & Order Success:** Fully functional checkout form culminating in an order success confirmation page.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Styling:** Custom CSS Grid/Flexbox styling

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js v5](https://expressjs.com/)
- **Database Connector:** [Mongoose v9](https://mongoosejs.com/) (MongoDB)
- **Security:** JWT (`jsonwebtoken`) & `bcryptjs`
- **Development Tooling:** `nodemon` for hot-reloading

---

## 📁 Repository Structure

```text
bhojanalayProject/
├── bhojanalay/                 # Frontend Application (React + Vite)
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── assets/             # Brand logos & background images
│   │   ├── components/         # Reusable UI components (Navbar, Hero, Categories, Footer, etc.)
│   │   ├── context/            # AuthContext & CartContext states
│   │   ├── data/               # Local mock restaurant and food item data
│   │   ├── pages/              # App Pages (Home, Cart, Checkout, Success, Login)
│   │   ├── App.jsx             # Main App layout & route definitions
│   │   ├── main.jsx            # React root mount point
│   │   └── index.css           # Global CSS variables & styles
│   ├── package.json
│   └── vite.config.js
│
├── bhojanalay-backend/         # Backend REST API (Node + Express + MongoDB)
│   ├── config/                 # Database connection config
│   ├── controllers/            # Controller functions for business logic
│   ├── models/                 # Mongoose schemas (User, etc.)
│   ├── routes/                 # Express route definitions (auth, etc.)
│   ├── server.js               # Express app entrypoint
│   └── package.json
│
├── .gitignore                  # Main Git ignore configuration
└── README.md                   # Project documentation
```

---

## ⚙️ Configuration & Environment Variables

### Backend Configuration
Create a `.env` file inside the `bhojanalay-backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bhojanalay?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

*Replace `<username>`, `<password>`, and host details with your actual MongoDB connection string.*

---

## 🏁 Getting Started

### Prerequisites
- Node.js installed (v18+ recommended)
- MongoDB account (local instance or MongoDB Atlas cluster)

---

### Setup Instructions

#### 1. Clone & Set Up Directory
Ensure you are in the project root:
```bash
cd bhojanalayProject
```

#### 2. Start the Backend Server
```bash
# Navigate to the backend directory
cd bhojanalay-backend

# Install dependencies
npm install

# Start the server in development mode (runs on http://localhost:5000 by default)
npm run dev
```

#### 3. Start the Frontend Application
Open a new terminal window:
```bash
# Navigate to the frontend directory
cd bhojanalayProject/bhojanalay

# Install dependencies
npm install

# Start the Vite development server (runs on http://localhost:5173 by default)
npm run dev
```

---

## 🔌 API Endpoints

The backend exposes the following REST API endpoints:

### Authentication (`/api/auth`)
- **POST** `/register` - Creates a new user profile.
  - *Request Body:* `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
- **POST** `/login` - Authenticates user & returns JWT token + user details.
  - *Request Body:* `{ "email": "john@example.com", "password": "password123" }`

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
