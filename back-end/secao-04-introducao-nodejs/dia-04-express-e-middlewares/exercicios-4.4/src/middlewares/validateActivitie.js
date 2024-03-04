const validateActivitie = (req, res, next) => {
  const { name, price } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 4) {
 return res
  .status(400).json({ message: 'O campo "name", deve ter mais de 4 caracters' }); 
}
  if (!price) return res.status(400).json({ message: 'O campo price é obrigatório' });
  if (Number(price) < 0) {
 return res
  .status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' }); 
}
  next();
};

module.exports = validateActivitie;