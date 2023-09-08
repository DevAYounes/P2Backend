const PersonaUser = require("../db/PersonaUser");
const ObjectId = require("mongodb").ObjectId;

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
  var voteId;
  const FindByTitle = await PersonaUser.find({ "polls.Title": title });
  const Card = FindByTitle[0].polls;
  const Options = Card[0].Options;

  for (let i = 0; i < Options.length; i++) {
    if (Options[i].value == value) {
      voteId = Options[i]._id;
    }
  }

  // const updated = await PersonaUser.updateOne(
  //   { _id: id },
  //   { "submited.$": true },
  //   { new: true }
  // );
  const idSearch = await PersonaUser.findById("64fa782b8d9efeacdafdd6be");
  console.log(idSearch);
  // for (let i = 0; i < Options.length; i++) {
  //   if (Options[i].value == value) {
  //     Options[i].value=3

  //   }
  // }
  //   const s = await PersonaUser.updateOne(
  //     { "polls.Title": title ,"polls.Options.value":value},
  //     {
  //       $push: {
  //         polls: {
  //             Options:{
  //               votes:4
  //             }
  //         },
  //       },
  //     },
  //     {
  //       new: true,

  //     }
  //   );
  //   console.log(s);
};
module.exports = { addPolls, getPolls, submit, getMyPolls, getActivePolls };
