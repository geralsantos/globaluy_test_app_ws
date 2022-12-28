"use strict";
module.exports = {
	up: async (queryInterface, type) => {
		await queryInterface.createTable("product", {
			id: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			description: {
				type: type.STRING(150),
				allowNull: true,
			},
			unit: {
				type: type.STRING(10),
				allowNull: false,
			},
			stock: {
				type: type.INTEGER,
				allowNull: false,
			},
			url: {
				type: type.TEXT,
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("product");
	},
};
