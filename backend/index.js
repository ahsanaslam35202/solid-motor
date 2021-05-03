const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

const users = require("./routes/users");
const cars = require("./routes/cars");
const sellTrades = require("./routes/sellTrades");
const buyRequests = require("./routes/buyRequests");
const admin = require("./routes/admin");

app.use(cors());
app.use(express.json());
app.use("/api/users", users);
app.use("/api/admin", admin);
app.use("/api/cars", cars);
app.use("/api/sellTrades", sellTrades);
app.use("/api/buyRequests", buyRequests);

mongoose
  .connect("mongodb://localhost/SolidMotors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Could not connect to mongodb"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
