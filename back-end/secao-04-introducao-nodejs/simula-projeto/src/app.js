const express = require('express');
const { readData, getById, postNewTalker } = require('./talker');
const token = require('./utils/token');
const verifyEmail = require('./middlewares/verifyEmail');
const verifyPassword = require('./middlewares/verifyPassword');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());

app.get('/talker', async (req, res) => {
  try {
    const talkers = await readData();
    if (talkers) {
      res.status(200).json(talkers);
    }
    return res.status(200).json([]);
  } catch (error) {
    console.error('Não foi possivel encontrar uma base de dados');
    res.status(400);
  }
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await getById(id);
    if (talker) {
      return res.status(200).json(talker);
    }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', verifyEmail, verifyPassword, (req, res) => {
  const tokenGenerated = token();
  res.status(200).json({ token: tokenGenerated });
});

app.post('/talker', auth, async (req, res) => {
  const newTalker = await postNewTalker(req.body);
  console.log(newTalker);
  res.status(201).json(newTalker);
});

module.exports = app;