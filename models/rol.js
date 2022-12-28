"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, type) => {
	class rol extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	rol.init(
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
			estado: {
				type: type.INTEGER,
				defaultValue: 1,
			},
			usuario_creacion: {
				type: type.INTEGER,
				allowNull: false,
			},
			usuario_edicion: {
				type: type.INTEGER,
				allowNull: false,
			},
			fecha_creacion: {
				type: type.DATE,
				allowNull: false,
			},
			fecha_modificacion: {
				type: type.DATE,
				defaultValue: sequelize.NOW,
			},
		},
		{
			sequelize,
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			modelName: "rol",
		}
	);
	return rol;
};
