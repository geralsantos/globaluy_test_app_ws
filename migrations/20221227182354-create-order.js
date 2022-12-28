'use strict';
module.exports = {
  up: async (queryInterface, type) => {
    await queryInterface.createTable('order', {
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
      status: {
        type: type.INTEGER,
        defaultValue: 1 //1 pending, 2 approved, 3 cancelled
      },
      date_created: {
        type: type.DATE,
        defaultValue: type.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order');
  }
};