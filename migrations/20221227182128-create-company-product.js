"use strict";
module.exports = {
	up: async (queryInterface, type) => {
		await queryInterface.createTable("company_product", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: type.INTEGER,
			},
			company_id: {
				type: type.INTEGER,
				allowNull: false,
				defaultValue: 1,
				references: {
					model: "company",
					key: "id",
				},
			},
			product_id: {
				type: type.INTEGER,
				allowNull: false,
				defaultValue: 1,
				references: {
					model: "product",
					key: "id",
				},
			},
			quantity: {
				type: type.INTEGER,
				defaultValue: 1,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("company_product");
	},
};
