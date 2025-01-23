# CRM System API

The **CRM System API** is a backend application built with **Node.js**, **Express**, and **Sequelize** (ORM for SQL databases). It provides functionality for user authentication, customer management, and data filtering. The API supports CRUD operations for customers and includes features like JWT-based authentication, data filtering, and pagination.

---

## Features

- **User Authentication**: Register and log in using JWT-based secure authentication.
- **Customer Management**: Perform Create, Read, Update, and Delete (CRUD) operations on customer records.
- **Advanced Filtering**: Filter customer data by name, email, phone, or company.


---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) or a compatible SQL database

---

## Setup Instructions

1. **Clone the Repository**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/abhishek83568/customer_crm.git
   cd customer_crm
   ```

2. **Install Dependencies**
   Install the required dependencies using npm or yarn:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   PORT=PORTNUMBER
   ```

4. **Run the Server**
   Start the application by running:
   ```bash
   npm run start
   ```

5. **View API Documentation**
   Access the API documentation at:
   ```
   https://customer-crm-47qd.onrender.com/api-docs/
   ```

---

## API Endpoints

### **Authentication**
- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Log in and receive a JWT token.

### **Customer Management**
- `GET /api/customers` – Retrieve a list of customers (supports filtering and pagination).
- `POST /api/customers` – Add a new customer.
- `PUT /api/customers/:id` – Update an existing customer.
- `DELETE /api/customers/:id` – Delete a customer.

---

## Technologies Used

- **Backend Framework**: Node.js with Express
- **Database**: MySQL (via Sequelize ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger UI

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a Pull Request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).



  ---
