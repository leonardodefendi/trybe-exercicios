const verifyAge = (req, res, next) => {
  const { age, talk } = req.body;
  if (!age) return res.send(400).json('O campo "age" é obrigatório');
  if ((age % 2 !== 0) && '') return res.send(400).json('');
  if (!talk) return res.send(400).json('O campo "talk" é obrigatório');
  next();
};

module.exports = verifyAge;