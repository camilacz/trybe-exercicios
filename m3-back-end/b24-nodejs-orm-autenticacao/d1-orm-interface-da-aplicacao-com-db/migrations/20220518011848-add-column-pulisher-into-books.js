'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
