const Sequelize = require("sequelize");
const sequelize = new Sequelize("featherpad", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
});

const { Model, DataTypes } = require("sequelize");

class User extends Model {}

// User.init(
//   {
//     // Define your table's columns here
//     uid: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     phone: DataTypes.STRING,
//   },
//   {
//     sequelize,
//     modelName: "user",
//   }
// );

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Table created!");
//   })
//   .catch((error) => {
//     console.error("Error creating table:", error);
//   });

module.exports = sequelize;
