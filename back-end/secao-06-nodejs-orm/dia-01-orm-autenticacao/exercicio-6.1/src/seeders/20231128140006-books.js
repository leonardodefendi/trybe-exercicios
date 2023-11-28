'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  queryInterface.bulkInsert('Books', [
 {  
    title: 'Harry Potter 1',
    author: 'JK Rowling',
    pageQuantity: 200,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  {  
    title: 'Harry Potter 2',
    author: 'JK Rowling',
    pageQuantity: 250,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
  ], {})
  },


  async down (queryInterface, Sequelize) {
   queryInterface.bulkDelete('Books', null, {})
  }
};
