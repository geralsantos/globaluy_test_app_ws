"use strict";
const request = require("../util/request");
const InterfaceProducts = require("../interfaces/products");

const product = {
	getProductsAvailables: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				
				new InterfaceProducts()
					.getProductsAvailables(response.response.user)
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	getAllProducts: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				new InterfaceProducts()
					.getAllProducts(response.response.user)
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	updateProductAvailable: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				new InterfaceProducts()
					.updateProductAvailable({
						company_id: req.body.company_id,
						product_id: req.body.product_id,
						quantity: req.body.quantity,
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	getOrders: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				
				new InterfaceProducts()
					.getOrders({
						rol_id: response.response.user.profile,
						user_id: response.response.user.sub,
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	getOrdersCompany: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				
				new InterfaceProducts()
					.getOrdersCompany({
						user_id: response.response.user.sub,
						company_id: req.body.company_id,
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	getOrderDetail: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				
				new InterfaceProducts()
					.getOrderDetail({
						user_id: response.response.user.sub,
						order_id: req.body.order_id,
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	sendOrder: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				new InterfaceProducts()
					.sendOrder({
						user_id: response.response.user.sub,
						// company_id: req.body.company_id,
						products: JSON.parse(req.body.products),
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	processOrder: (req, res) => {
		request
			.middleware("POST", req, true)
			.then((response) => {
				new InterfaceProducts()
					.processOrder({
						user_id: response.response.user.sub,
						order_id: req.body.order_id,
					})
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(err.status).send(err);
			});
	},
	
	
	// cambiarEstado: (req, res) => {
	// 	request
	// 		.middleware("POST", req, true)
	// 		.then((response) => {
	// 			new InterfaceUser()
	// 				.cambiarEstado(req.body)
	// 				.then((response) => {
	// 					return res.status(200).send(response);
	// 				})
	// 				.catch((err) => {
	// 					return res.status(200).send(err);
	// 				});
	// 		})
	// 		.catch((err) => {
	// 			return res.status(200).send(err);
	// 		});
	// },
};

module.exports = product;
