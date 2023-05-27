const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database")
class User extends Model {}

User.init(
  {
    // Define your table's columns here
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

// User.create({
//     email: "email",
//     phone: 13123456,
//     password: "password"
//   });
module.exports = User;
