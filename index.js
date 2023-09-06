const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
const api = require("./api/api");
//middlewares
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
//consts
const PORT = process.env.PORT;
const URI = process.env.URI;

//routing
app.use(api);
connect();
//DB connect
async function connect() {
  await mongoose.connect(URI).then(() => {
    console.log("DB is Online");
  });
}
//listen
app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
