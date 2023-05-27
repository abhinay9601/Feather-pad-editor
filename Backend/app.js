const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const registerRoutes = require("./routes/register");
const sequelize = require("./util/database");
const loginRoutes = require("./routes/login")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/form",loginRoutes)
app.use("/api", registerRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => {
        console.log("Server running on port 3000");
      });
  })
  .catch((e) => {
    console.log(e);
  });


