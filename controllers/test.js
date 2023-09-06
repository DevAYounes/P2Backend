let UserModel = require("../db/PersonaUser");

let TestUser = {
  find: async (req, res) => {
    let found = await UserModel.find();
    res.json(found);
  },
  getAll: async (req, res) => {
    const email = req.params.email;
    let person = await UserModel.find({ email: email }).populate("pollsSchema");
    res.json(person);
  },
  add: async (req, res) => {
    const email = req.params.email;
    const poll = req.body;
    let person = await UserModel.findOneAndUpdate(
      { email: email },
      { polls:  {Title:"uou",Description:"hoha",Time:"20/10"} },
      {
        new: true,
        upsert: true,
      }
    );
    console.log(person.polls);
    res.json(person);
  },
};

module.exports = TestUser;
