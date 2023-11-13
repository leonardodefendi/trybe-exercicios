  const verifyEmail = (req, res, next) => {
    const { email } = req.body;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    if (!regexEmail.test(email)) {
      return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
    }// pode ser erro de regex
    next();
  };
  
  module.exports = verifyEmail;