const express = require('express');
require('express-async-errors');
const morgan= require('morgan');
const apiCredentials = require('./middlewares/apiCredentials');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use('/static', express.static('images'));
app.use(apiCredentials);
app.use(express.json());



let nextId = 3;
const validateId = require('./middlewares/validateId');
const validateTeam = require('./middlewares/validateTeam');
const teams = require('./utils/teams')

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id',validateId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  }
});



app.post('/teams', validateTeam, (req, res) => {
  console.log(req.teams);
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id',validateId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

// app.use((req, res) => res.sendStatus(404));
app.use((error, req, res, next) => {
  console.error(error.stack);
  next();
})

app.use((error, req, res, next) => {
  res.status(500).send({message: 'Deu ruim'})
})
module.exports = app;