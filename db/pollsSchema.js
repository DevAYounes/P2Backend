const mongoose = require("mongoose");

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
      owner: { type: mongoose.Schema.Types.ObjectId, ref: "PollsUsers" },
    },
  ],
});

module.exports = mongoose.model("pollsSchema", pollsSchema);
