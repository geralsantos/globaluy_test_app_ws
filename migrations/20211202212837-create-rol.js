"use strict";
module.exports = {
	up: async (sequelize, type) => {
		await sequelize.createTable(
			"rol",
			{
				id: {
					type: type.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				name: {
					type: type.STRING(100),
					allowNull: false,
				},
			},
			{
				timestamps: false,
				underscored: true,
				freezeTableName: true,
			}
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("rol");
	},
};
