const ModelBook = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    publisher: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({force: true});
  })
  return Book;
};

module.exports = ModelBook;