const express = require('express');
const auth = require('./middlewares/auth');
const validateActivitie = require('./middlewares/validateActivitie');
const validateDescription = require('./middlewares/validateDescription');
const validateSignup = require('./middlewares/validateSignup');
const generateToken = require('./utils/token');

const app = express();
app.use(express.json());

app.post('/activities', auth, validateActivitie, validateDescription, (req, res) => {
  res.status(201).send({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', validateSignup, (req, res) => {
  const token = generateToken();
  console.log(token);
  res.status(200).send({ token });
});

module.exports = app;   