const PersonaUser = require("../db/PersonaUser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
  const newPerson = req.body;
  const newUser = await PersonaUser.findOneAndUpdate(
    {
      email: newPerson.email,
      password: newPerson.password,
    },
    {
      email: newPerson.email,
      password: newPerson.password,
      fullName: newPerson.fullName,
    },
    {
      new: true,
      upsert: true,
    }
  );
  res.status(200).send(newUser);
};

const login = async (req, res) => {
  const userInfo = req.body;
  const person = await PersonaUser.find({
    email: userInfo.email,
    password: userInfo.password,
  });
  console.log(person[0]);
  if (person[0] != undefined) {
    const payload = { subject: person[0] };
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "10min",
    });
    res.status(200).send(token);
  } else {
    res.status(404).send("can't be found");
  }
};

module.exports = { register, login };
