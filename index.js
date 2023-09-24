const express = require("express");
const webSocket = require("ws");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const api = require("./api/api");
//middlewares
const app = express();
//this is a test 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//consts
const PORT = process.env.PORT;
const URI = process.env.URI;
const wss = new webSocket.Server({ server: app });
//routing
app.use(api);
connect();
//DB connect
async function connect() {
  await mongoose.connect(URI).then(() => {
    console.log("DB is Online");
  });
}
wss.on("connection", function connection(ws) {
  ws.on("message", function incomming(message) {
    console.log(message)
  });
  ws.send("Hi");
});
//listen
app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
