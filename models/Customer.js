const sequelize = require("../config/db.js");
const { DataTypes } = require("sequelize");
const User = require("./User.js");

const Customer = sequelize.define(
  "Customer",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: true,
  }
);

Customer.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Customer, { foreignKey: "user_id" });

module.exports = Customer;
