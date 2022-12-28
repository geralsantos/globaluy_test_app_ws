"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, type) => {
	class company_user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	company_user.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: type.INTEGER,
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
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "company_user",
		}
	);
	return company_user;
};
