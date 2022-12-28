"use strict";
const { Model } = require("sequelize");
const product = require('./product');

module.exports = (sequelize, type) => {
	class company_product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	company_product.init(
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
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "company_product",
		}
	);
	company_product.belongsTo(product(sequelize, type));

	return company_product;
};
