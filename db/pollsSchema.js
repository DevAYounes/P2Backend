const mongoose = require("mongoose");
//Disabled Schema
const pollsSchema = mongoose.Schema({
  polls: [
    {
      Title: { type: String },
      Description: { type: String },
    //   Time: { type: String },
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

module.exports = mongoose.model("pollsSchema", pollsSchema);
