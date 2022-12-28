"user strict";

const bcrypt = require("bcrypt");
const config = require("../config/config");
const lang = require("../lang/es");
const constant = require(`../util/constants`);
const utils = require("../util/utils");
const service = require("../services");
const { Op } = require("sequelize");

const {
	sequelize,
	CompanyUser,
	CompanyProduct,
	Product,
	Order,
	User,
	OrderDetail,
} = require("../database");

class InterfaceProducts {
	getProductsAvailables(user) {
		let user_id = user.sub;
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			let company_user =
				(await CompanyUser.findOne({
					where: { user_id: user_id },
				})) || "";
			CompanyProduct.findAll({
				where: { company_id: company_user.company_id || "" },
				include: [{ model: Product }],
			})
				.then(function (response) {
					if (response == null) {
						params.code = "0003";
						params.status = 400;
						params.error = "error";
						reject(params);
					}
					result.response = response;
					resolve(result);
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 400;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	updateProductAvailable({ product_id, company_id, quantity }) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			CompanyProduct.findOne({
				where: { product_id: product_id, company_id: company_id },
			})
				.then(function (response) {
					if (response == null) {
						params.code = "0003";
						params.status = 400;
						params.error = "error";
						reject(params);
					}
					const updated = response.update({
						quantity: response.quantity - quantity,
					});
					if (updated) {
						result.message = lang.Updated.message;
						result.response = response;
						resolve(result);
					} else {
						params.code = "0003";
						params.status = 400;
						params.error = lang.SavingError.message;
						reject(params);
					}
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 400;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	getOrders({ user_id, company_id }) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			Order.findAll({
				where: { company_id: company_id, user_id: user_id },
				include: [
					{ model: User, attributes: ["id", "full_name", "user_code"] },
				],
			})
				.then(function (response) {
					if (response == null) {
						params.code = "0003";
						params.status = 400;
						params.error = "error";
						reject(params);
					}
					result.response = response;
					resolve(result);
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 400;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	getOrdersCompany({ company_id, user_id }) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			let user = await User.findOne({
				where: { id: user_id },
			});
			if (!user || user.rol_id != 2) {
				params.code = "0003";
				params.status = 400;
				params.error = "User must be supervisor";
				reject(params);
			}
			let companies = await CompanyUser.findAll({
				where: { user_id: 4, company_id: company_id },
				attributes: ["id"],
			});
			Order.findAll({
				where: { company_id: { [Op.in]: companies.map((item) => item.id) } },
				include: [
					{
						model: User,
						attributes: ["id", "full_name", "user_code"],
					},
				],
			})
				.then(function (response) {
					if (response == null) {
						params.code = "0003";
						params.status = 400;
						params.error = "error";
						reject(params);
					}
					result.response = response;
					resolve(result);
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 400;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	getOrderDetail({ order_id, user_id }) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			let order =
				(await Order.findOne({
					where: { id: order_id, user_id: user_id },
					attributes: ["id"],
				})) || {};
			OrderDetail.findAll({
				where: { order_id: order.id || "" },
				include: [
					{
						model: Product,
					},
					{
						model: Order,
						attributes: ["id"],
					},
				],
			})
				.then(function (response) {
					if (response == null) {
						params.code = "0003";
						params.status = 400;
						params.error = "error";
						reject(params);
					}
					result.response = response;
					resolve(result);
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 400;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	sendOrder({ products, company_id, user_id }) {
		let promise = null;
		let params = {},
			result = {};
		promise = new Promise(async (resolve, reject) => {
			const t = await sequelize.transaction();
			try {
				const order_created = await Order.create(
					{
						company_id: company_id,
						user_id: user_id,
						date_created: utils.getDateTime("yyyy-MM-dd hh:mm:ss"),
						status: 1,
					},
					{ transaction: t }
				);

				for (let index = 0; index < products.length; index++) {
					const product = products[index];
					const order_detail_created = await OrderDetail.create(
						{
							order_id: order_created.id,
							product_id: product.product_id,
							quantity: product.quantity,
							status: 1,
						},
						{ transaction: t }
					);
					if (!order_detail_created) {
						params.code = "0003";
						params.status = 400;
						params.error = lang.SavingError.message;
						await t.rollback();
						reject(params);
					}
				}
				result.message = lang.OrderSent.message;
				result.response = order_created;
				await t.commit();
				resolve(result);
			} catch (error) {
				console.log("error", error);
				await t.rollback();
				reject(params);
			}
		});
		return promise;
	}
}

module.exports = InterfaceProducts;
