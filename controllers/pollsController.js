const PersonaUser = require("../db/PersonaUser");

const addPolls = async (req, res) => {
  const email = req.params.email;
  const poll = req.body;
  console.log(poll);

  let person = await PersonaUser.updateOne(
    { email: email },
    { $push: { polls: poll } },
    {
      new: true,
      upsert: true,
    }
  );
  res.json(person);
};
const getPolls = async (req, res) => {
  const Users = await PersonaUser.find();
  const polls = Users.map((o) => {
    return o.polls;
  });

  console.log(polls);
  res.send(polls);
};
const getMyPolls = async (req, res) => {
  const email = req.params.email;
  const Users = await PersonaUser.find({ email: email });
  const polls = Users.map((o) => {
    return o.polls;
  });

  res.send(polls);
};
const getActivePolls = async (req, res) => {
  const email = req.params.email;
  const Users = await PersonaUser.find({ email: email });
  const polls = Users.map((o) => {
    return o.polls;
  });

  res.send(polls);
};
const submit = async (req, res) => {
  //Change submitted state
  const title = req.params.title;
  const value = req.params.value;
  const users = await PersonaUser.find();
  const polls = users.map((p) => {
    return p.polls;
  });
  const filteredPolls = polls.filter((f) => {
    return f.length;
  });
  const card = filteredPolls[0].map((c) => {
    return (c.Title = title);
  });

  console.log(filteredPolls[0]);
  res.send("s");
};
module.exports = { addPolls, getPolls, submit, getMyPolls, getActivePolls };
