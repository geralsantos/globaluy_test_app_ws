"use strict";
const lang = require("../lang/es");
const services = require("../services");
const constants = require("../util/constants");
const middleware = (type, req, auth = false) => {
	let promise = null;
	switch (type) {
		case "POST":
			promise = new Promise((resolve, reject) => {
				let params = {};
				if (auth) {

					if (typeof req.headers.authorization == "undefined") {
						params.code = '0003';
						params.status = 401;
						params.error = lang.noAuthorizationHeader.message;

						reject(params);
					}
					const token = req.headers.authorization.split(" ")[1];
					services
						.decodeToken(token)
						.then((response) => {
							resolve(response);
						})
						.catch((response) => {
							params.code = response.code;
							params.status = 400;
							params.error = response.message || 'Token not found';
							reject(params);
						});
				} else {
					resolve({});
				}
			});
			break;

		default:
			break;
	}
	return promise;
};

module.exports = {
	middleware,
};
