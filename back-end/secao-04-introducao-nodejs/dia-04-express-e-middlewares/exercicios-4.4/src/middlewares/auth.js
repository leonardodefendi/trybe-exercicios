const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    res.status(401).json({ message: 'Token invalido' });
  }
  next();
};

module.exports = auth;