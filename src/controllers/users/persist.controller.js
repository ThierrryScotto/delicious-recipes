"use strict";

// model
const User = require('../../models/users');

// imports
const { generateToken } = require('../../services/jwt');

const createUser = async (req, res) => {
  try {
    const body = req.body;
    
    const userFound = await User.findOne({ email: body.email});

    if (userFound) {
      return res.status(400).send({ message: "E-mail already registered" });
    }

    const userCreated = await User.create(body);

    const token = generateToken(userCreated.id);

    const response = {
      id: userCreated.id,
      email: userCreated.email,
      createdAt: userCreated.createdAt,
    }

    return res.status(201).send({ response, token });
  } catch(error) {
    console.log('Error: ', error);
    return res.status(500).send({ message: "Internal error" });
  }
};

module.exports = {
  createUser
}