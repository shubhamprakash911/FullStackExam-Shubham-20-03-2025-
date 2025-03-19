
# 🛒 E-Commerce Backend (Node.js + Express + MySQL + MongoDB)

This is the backend for a full-stack e-commerce application built with **Node.js**, **Express**, **MySQL**, and **MongoDB**. It follows the **MVC architecture** to maintain separation of concerns and utilizes **JWT** for authentication.

---

## 🚀 Features

- User Authentication (Register/Login/Logout) using **JWT**
- Product Catalog with CRUD operations
- Shopping Cart to add and remove items
- Order Placement and Order History
- Report Generation:
  - **Daily Revenue Report** (SQL)
  - **Sales by Category Report** (MongoDB)
- API Documentation available on **Postman**
  - [API Documentation on Postman](https://documenter.getpostman.com/view/24845617/2sAYkEqf2r)
- Backend is deployed on **Render**
  - [deployed backend](https://fullstackexam-shubham-20-03-2025.onrender.com/)
---

## 🏗️ Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:**
  - **SQL:** MySQL (for users, orders, and order items)
  - **NoSQL:** MongoDB (for products and carts)
- **Authentication:** JWT (JSON Web Tokens)
- **ORM:** Sequelize (for SQL) and Mongoose (for MongoDB)
- **Security:** Bcrypt for password hashing
- **Environment Variables:** Dotenv for secure configuration

---

## 🗃️ Project Structure

```
project/
├── controllers/           # Business logic
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── reportController.js
├── middleware/            # Middlewares
│   └── authMiddleware.js
├── models/                # Data models
│   ├── User.js
│   ├── Order.js
│   ├── OrderItem.js
│   ├── Product.js
│   └── Cart.js
├── routes/                # API routes
│   └── index.js
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── server.js               # Entry point
```

---

## 📝 Installation and Setup

### Prerequisites

- **Node.js** (v16+)
- **MongoDB** (local or cloud)
- **MySQL** (local or cloud)

### Clone the Repository
```bash
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
# Server Configuration
PORT=5000

# JWT Secret Key
JWT_SECRET=yourSecretKey

# MySQL Database Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=ecommerce

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/ecommerce
```

### Run Migrations
Make sure your MySQL database is up and running.
```bash
npx sequelize-cli db:migrate
```

### Start the Server
```bash
npm start
```

### Test the API
Visit [http://localhost:5000/api](http://localhost:5000/api) to access the API.

---

## 🧪 Running in Development
For hot-reloading during development:
```bash
npm run dev
```

---

## 📋 API Documentation

The full API documentation is available on Postman.  
[API Documentation on Postman](https://documenter.getpostman.com/view/24845617/2sAYkEqf2r)

---

## 🌐 Usage

1. Register a new user using the **/api/auth/register** endpoint.
2. Login to receive a JWT token.
3. Use the token in the `Authorization` header as `Bearer <token>` for protected routes.
4. Manage products, cart, and orders through the respective endpoints.
5. Check out the daily revenue and sales by category via **/api/reports** endpoints.

---

## 💡 Best Practices Followed

- **MVC Architecture:** Clear separation of Models, Controllers, and Routes.
- **Security:** Passwords are hashed and stored securely.
- **Performance Optimization:**
  - Indexing MongoDB collections.
  - Avoiding N+1 queries with SQL.
  - Using bulk operations wherever possible.
- **Code Structure:** Organized in a modular way for scalability.

---

## 🤝 Contributing

Feel free to open an issue or submit a pull request for improvements or new features!

---

Let me know if you need more additions or changes to the README! 😊
