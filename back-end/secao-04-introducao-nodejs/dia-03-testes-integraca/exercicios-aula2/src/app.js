const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const {name} = req.query;
  const chocolates = await cacauTrybe.getAllChocolates();
  const filtredChocolates = chocolates.filter((chocolate) => chocolate.name.includes(name));

  res.status(filtredChocolates.length > 0 ? 200 : 404).json(filtredChocolates);
})

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getAllChocolates();
  
  res.status(200).json({totalChocolates: totalChocolates.length})
})

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({chocolates})
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
 
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
})

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const {id} = req.params;
  const {name, brandId} =req.body;
  const update = {name, brandId};
  const chocolate = await cacauTrybe.changeChocolates(id, update);
  res.status(200).json({chocolate});
})


module.exports = app;