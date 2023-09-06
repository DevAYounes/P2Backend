const PersonaUser = require("../db/PersonaUser");

const addPolls = async (req, res) => {
  const email = req.params.email;
  const poll = req.body;
  let person = await PersonaUser.findOneAndUpdate(
    { email: email },
    { polls: poll },
    {
      new: true,
      upsert: true,
    }
  );
  res.json(person);
};
const getPolls = async (req, res) => {
  const email = req.body.email;
  const person = await PersonaUser.find({
    email: email,
  });
  const polls = person[0].Options;
  res.send(polls);
};

const submit = async (req, res) => {
  //Change submitted state
  const email = req.params.email;
  const pollCard = req.params.pollCard;
  let person = await PersonaUser.findOneAndUpdate(
    { email: email },
    { polls: { Options: { submited: true } } },
    {
      new: true,
      upsert: true,
    }
  );
  res.json(person);

  res.status(200).send();
};
module.exports = { addPolls, getPolls, submit };
