const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const verifyCreatedAt = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  if (!description.createdAt) return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  if (!description.rating) return res.status(400).json({ message: 'O campo rating é obrigatório' });
  if (!description.difficulty) return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  if (!verifyCreatedAt.test(description.createdAt)) return res.status(400).json({ message: 'A data precisa ser no formato dd/mm/yyyy' });
  if (!(description.rating >= 1 && description.rating <= 5)) return res.status(400).json({ message: 'Rating deve estar entr 1 e 5' });
  next();
};

module.exports = validateDescription;