const PersonaUser = require("../db/PersonaUser");

const addPolls = async (req, res) => {
  const person = req.body;
  const newPoll = await PersonaUser.findOneAndUpdate(
    {
      email: person.email,
    },
    {
      //add options
    },
    {
      new: true,
      upsert: true,
    }
  );
  res.status(200).send(newPoll);
};
const getPolls = async (req, res) => {
  const email = req.body.email;
  const person = await PersonaUser.find({
    email: email,
  });
  const polls = person[0].Options;
  res.send(polls);
};

module.exports = { addPolls, getPolls };
