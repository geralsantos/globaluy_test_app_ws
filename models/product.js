"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, type) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	product.init(
		{
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
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "product",
		}
	);
	return product;
};
