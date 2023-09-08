const mongoose = require("mongoose");
const pollsSchema = require("./pollsSchema");
const PollsUsers = mongoose.Schema({
  email: { type: String },
  password: { type: String },
  fullName: { type: String },
  polls: [
    {
      Time:{type: String},
      Title: { type: String },
      Description: { type: String },
      pollMaker: { type: String },
      Options: [
        {
          option: { type: String },
          value: { type: Number },
          votes: { type: Number },
          submited: { type: Boolean },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("PollsUsers", PollsUsers);
