const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();

const users = require("./routes/users");
const cars = require("./routes/cars");
const sellTrades = require("./routes/sellTrades");
const buyRequests = require("./routes/buyRequests");
const admin = require("./routes/admin");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//
app.use("/api/users", users);
app.use("/api/admin", admin);
app.use("/api/cars", cars);
app.use("/api/sellTrades", sellTrades);
app.use("/api/buyRequests", buyRequests);

mongoose
  .connect(
    "mongodb://ahsan_aslam35202:bugatti91@solid-motor-shard-00-00.l4fou.mongodb.net:27017,solid-motor-shard-00-01.l4fou.mongodb.net:27017,solid-motor-shard-00-02.l4fou.mongodb.net:27017/test?replicaSet=atlas-nuokeq-shard-0&ssl=true&authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
