"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, type) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	user.init(
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
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "user",
		}
	);
	return user;
};
