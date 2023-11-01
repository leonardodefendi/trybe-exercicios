const express = require('express');

const app = express();

app.use(express.json());

const fs = require('fs');

const path = require('path');

const dir = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const data = await fs.readFileSync(dir);
    const response = await JSON.parse(data);
    return response;
  } catch (error) {
    console.log('Não foi possivel ler o arquivo', error.message);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  const movies = await readMovies();
  
  const movie = movies.find((mov) => Number(id) === mov.id);

  res.status(200).json({ movie });
});

app.get('/movies', async (req, res) => {
  const movies = await readMovies();

  res.status(200).json({ movies });
});

app.post('/movies', async (req, res) => {
  const movies = await readMovies();
  const newMovie = { ...req.body, id: (movies.length + 1) }; 
  const allMovies = [...movies, newMovie];
  await fs.writeFileSync(dir, JSON.stringify(allMovies));

  res.status(201).json(JSON.stringify(allMovies));
});

app.put('/movies/:id', async (req, res) => {
  const movies = await readMovies();
  const { id } = req.params;
  const { movie, price } = req.body;
  const updateMovies = movies.find((value) => value.id === Number(id));
  
  if (!updateMovies) {
      return res.status(404).json({ message: 'Filme não está em nossa base de dados' });
    }
    updateMovies.movie = movie;
    updateMovies.price = price;
  
  await fs.writeFileSync(dir, JSON.stringify([...movies, updateMovies]));

  return res.sendStatus(200).json(JSON.stringify(updateMovies));
});

app.delete('/movies/:id', async (req, res) => {
  const movie = await readMovies();
  const { id } = req.params;

  const newMovies = movie.filter((mov) => mov.id !== Number(id));

  await fs.writeFileSync(dir, JSON.stringify(newMovies));

  return res.sendStatus(204).end();
});

module.exports = app;