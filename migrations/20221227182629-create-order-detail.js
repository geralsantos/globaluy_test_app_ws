'use strict';
module.exports = {
  up: async (queryInterface, type) => {
    await queryInterface.createTable('order_detail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: type.INTEGER
      },
      order_id: {
				type: type.INTEGER,
				allowNull: false,
				references: {
					model: "order",
					key: "id",
				},
			},
      product_id: {
				type: type.INTEGER,
				allowNull: false,
				references: {
					model: "product",
					key: "id",
				},
			},
      quantity: {
				type: type.INTEGER,
				allowNull: false,
			},
      status: {
        type: type.INTEGER,
        defaultValue: 1 //1 pending, 2 approved, 3 cancelled
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order_detail');
  }
};