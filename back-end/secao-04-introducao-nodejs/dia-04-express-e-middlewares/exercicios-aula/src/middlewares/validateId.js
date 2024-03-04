const teams = require('../utils/teams');

const validateId = (req, res, next) => {
  if(!teams.some((team) => team.id === Number(req.params.id))) {
   return res.status(400).json({message: 'Time não encontrado'});
  }
  next();
};

module.exports = validateId;