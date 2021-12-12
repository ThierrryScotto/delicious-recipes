"use strict"

const { compare }       = require('../../services/bcrypt/index'); 
const { generateToken } = require('../../services/jwt/index');
const User              = require('../../models/users');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (!await compare(password, user.password)) {
    return res.status(404).send({ error: 'Invalid password' });
  }

  const token = generateToken(user.id);

  const response = {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
  }

  res.send({ user, token });
}

module.exports = {
  login
}