"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, type) => {
	class company extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	company.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: type.INTEGER,
			},
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "company",
		}
	);
	return company;
};
