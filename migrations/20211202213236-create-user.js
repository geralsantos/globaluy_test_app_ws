"use strict";
module.exports = {
	up: async (sequelize, type) => {
		await sequelize.createTable(
			"user",
			{
				id: {
					type: type.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				rol_id: {
					type: type.INTEGER,
					allowNull: false,
					defaultValue: 2,
					references: {
						model: "rol",
						key: "id",
					},
				},
				full_name: {
					type: type.STRING(100),
					allowNull: false,
				},
				user_code: {
					type: type.STRING(50),
					allowNull: true,
				},
				email: {
					type: type.STRING(100),
					allowNull: false,
					unique: true,
					validate: {
						isEmail: true,
					},
				},
				password: {
					type: type.STRING(100),
					allowNull: false,
				},
			},
			{
				timestamps: false,
				underscored: true,
				freezeTableName: true,
				modelName: "user",
			}
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("user");
	},
};
