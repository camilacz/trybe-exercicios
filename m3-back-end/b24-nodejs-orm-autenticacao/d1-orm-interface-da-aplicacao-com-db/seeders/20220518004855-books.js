'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Books', [
     {
       id: 1,
       title: 'Abacaxi ralado',
       pageQuantity: 40,
       author: 'Batata Doce',
       createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
       updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     }
   ])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
