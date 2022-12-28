"use strict";
const { Model } = require("sequelize");
const user = require('./user');

module.exports = (sequelize, type) => {
	class order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	order.init(
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
			status: {
				type: type.INTEGER,
				defaultValue: 1, //1 pending, 2 approved, 3 cancelled
			},
			date_created: {
				type: type.DATE,
				defaultValue: type.NOW,
			},
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "order",
		}
	);
	order.belongsTo(user(sequelize, type));
	return order;
};
