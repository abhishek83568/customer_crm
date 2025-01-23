const { Sequelize } = require("sequelize");
require("colors");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  connectTimeout: 30000,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connection success".green))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
