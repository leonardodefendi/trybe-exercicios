const express = require('express');
const { passengerModel } = require('./models');

const app = express();

app.use(express.json());

app.get('/passengers', async (req, res) => {
  const passenger = await passengerModel.findAll();
  return res.status(200).json(passenger);
});

app.get('/passengers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const passenger = await passengerModel.findById(id);
    return res.status(200).json(passenger);
  } catch (erro) {
    console.error('Id invalido');
    return res.sendStatus(400);
  }
});

app.post('/passengers', async (req, res) => {
  const { name, email, phone } = req.body;
  const result = await passengerModel.insert({ name, email, phone });
  res.status(200).json({
    id: result,
    name,
    email,
    phone,
  });
});

app.delete('/passengers/:id', async (req, res) => {
  const { id } = req.params;
  await passengerModel.remove(id);
  res.status(204).end();
});

module.exports = app;