"use strict";
const { Model } = require("sequelize");
const product = require('./product');
const order = require('./order');

module.exports = (sequelize, type) => {
	class order_detail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	order_detail.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: type.INTEGER,
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
				defaultValue: 1, //1 approved, 2 cancelled
			},
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "order_detail",
		}
	);
	order_detail.belongsTo(product(sequelize, type));
	order_detail.belongsTo(order(sequelize, type));

	return order_detail;
};
