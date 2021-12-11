"use strict"

const User                 = require('../../models/users');
const { generateToken }    = require('../services/jwt');

const getUsers = async (req, res) => {
  const users = await User.find();  

  if (!users) {
    return res.status(404).send({ message: "Users not found" });
  }

  return res.status(200).send(users);
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId });

  if (!user) {
    return res.status(404).send({ message: `User ${userId} not found` });
  }

  res.status(200).send(user);
};

module.exports = {
  getUsers,
  getUserById,
}