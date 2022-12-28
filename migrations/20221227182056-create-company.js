'use strict';
module.exports = {
  up: async (queryInterface, type) => {
    await queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: type.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('company');
  }
};