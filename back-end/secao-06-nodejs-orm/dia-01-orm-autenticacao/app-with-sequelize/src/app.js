const express = require('express');

const User = require('./controller/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.get('/user/search/:id', User.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/user', User.createUser);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/user/:id', User.updateUser);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/user/:id', User.deleteUser);

module.exports = app;
