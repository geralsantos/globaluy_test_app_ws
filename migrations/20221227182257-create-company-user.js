'use strict';
module.exports = {
  up: async (queryInterface, type) => {
    await queryInterface.createTable('company_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: type.INTEGER
      },
      company_id: {
				type: type.INTEGER,
				allowNull: false,
				references: {
					model: "company",
					key: "id",
				},
			},
      user_id: {
				type: type.INTEGER,
				allowNull: false,
				references: {
					model: "user",
					key: "id",
				},
			},
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('company_user');
  }
};