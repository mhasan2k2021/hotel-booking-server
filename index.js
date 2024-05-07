const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const hotelDetails = require("./roomDetails.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world.");
});

app.get("/roomDetails", (req, res) => {
  res.send(hotelDetails);
});

app.get("/book/:id", (req, res) => {
  const uniqId = req.params.id;
  const findRoom = hotelDetails.find((room) => room.roomId === uniqId);
  res.send(findRoom);
});

app.listen(port, () => {
  console.log("this server is running port: ", port);
});
