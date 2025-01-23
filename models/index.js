const sequelize = require("../config/db");
const User = require("./User");
const Customer = require("./Customer");

const syncDb = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

module.exports = { User, Customer, syncDb };
