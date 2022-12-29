const Sequelize = require("sequelize");

const UserModel = require("../models/user");
const RolModel = require("../models/rol");
const CompanyUserModel = require("../models/company_user");
const CompanyProductModel = require("../models/company_product");
const ProductModel = require("../models/product");
const OrderModel = require("../models/order");
const OrderDetailModel = require("../models/order_detail");

require("dotenv").config();
const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_CONNECTION,
	},
	{
		timestamps: true,
		freezeTableName: true,
	}
);

const User = UserModel(sequelize, Sequelize);
const Rol = RolModel(sequelize, Sequelize);
const CompanyUser = CompanyUserModel(sequelize, Sequelize);
const CompanyProduct = CompanyProductModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const OrderDetail = OrderDetailModel(sequelize, Sequelize);

// sequelize.sync({ force: false }).then(() => {
// 	
// });

module.exports = {
	sequelize,
	User,
	Rol,
	CompanyUser,
	CompanyProduct,
	Product,
	Order,
	OrderDetail,
};
