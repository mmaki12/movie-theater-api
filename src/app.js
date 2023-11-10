const express = require("express");
const app = express();
const User = require("../routes/User")
const showRouter = require("../routes/Show")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/shows", showRouter)
app.use("/users",User)




module.exports = app;
