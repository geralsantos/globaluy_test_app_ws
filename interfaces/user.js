"user strict";

const bcrypt = require("bcrypt");
const config = require("../config/config");
const lang = require("../lang/es");
const constant = require(`../util/constants`);
const utils = require("../util/utils");

const service = require("../services");
const {sequelize, User, CompanyUser } = require("../database");

class InterfaceUser {
	signinUser(email, password) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise((resolve, reject) => {
			if (!email || !password) {
				params.code = "0003";
				params.status = 401;
				params.error = lang.UserNotFound.message;
				reject(params);
			}
			User.findOne({ where: { email: email } })
				.then(function (user) {
					if (user == null) {
						params.code = "0003";
						params.status = 401;
						params.error = lang.UserNotFound.message;
						reject(params);
					} else {
						const hash = bcrypt.compareSync(password, user.get("password"));
						if (hash) {
							result.response = { user, token: service.createToken(user) };
							//token = service.createToken(user);
							resolve(result);
						} else {
							params.code = "0003";
							params.status = 401;
							params.error = lang.UserNotFound.message;
							reject(params);
						}
					}
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 401;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	signup(valores) {
		let promise = null;
		let params = {},
			result = {};

		promise = new Promise(async (resolve, reject) => {
			const t = await sequelize.transaction();
			if (!valores.full_name || !valores.email || !valores.password) {
				params.code = "0003";
				params.status = 401;
				params.error = lang.SavingError.message;
				reject(params);
			}
			User.findOne({ where: { email: valores.email } })
				.then(async function (user) {
					if (user) {
						const validPassword = await bcrypt.compare(
							valores.password,
							user.password
						);
						if (validPassword) {
							params.code = "0003";
							params.status = 401;
							params.error = lang.UserAlreadyExists.message;
							reject(params);
						} else {
							params.code = "0003";
							params.status = 400;
							params.error = lang.SavingError.message;
							reject(params);
						}
					} else {
						bcrypt.hash(
							valores.password,
							config.bcrypt_salt_rounds,
							async function (err, hash) {
								if (err) {
									params.code = "0003";
									params.status = 400;
									params.error = lang.SavingError.message;
									reject(params);
								} else {
									const user = await User.create({
										rol_id: valores.rol_id,
										full_name: valores.full_name,
										email: valores.email,
										password: hash,
									},{ transaction: t });
									if (!user) {
										params.code = "0003";
										params.status = 400;
										params.error = lang.SavingError.message;
										await t.rollback();
										reject(params);
									}
									user.update({
										user_code: "EMP-" + user.id,
									},{ transaction: t });
									const company_user = await CompanyUser.create({
										company_id: 1,
										user_id: user.id,
									},{ transaction: t });
									result.response = user;
									await t.commit();
									resolve(result);
								}
							}
						);
					}
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 500;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
	forgetPassword(valores) {
		let promise = null;
		let params = {},
			result = {};
		promise = new Promise((resolve, reject) => {
			if (!valores.email) {
				params.code = "0003";
				params.status = 401;
				params.error = lang.UpdatingError.message;
				reject(params);
			}
			User.findOne({ where: { email: valores.email } })
				.then(async function (user) {
					if (user) {
						let to = valores.email;
						let subject = "Mi basura | Generación de nueva contraseña";
						let newpassword = Math.random().toString(36).slice(2);
						const hash = bcrypt.hashSync(
							newpassword,
							config.bcrypt_salt_rounds
						);
						let text = "Su nueva contraseña es: " + newpassword;

						service
							.enviarCorreo(to, subject, text)
							.then(async (response) => {
								const userupdated = user.update({
									password: hash,
									fecha_modificacion: utils.getDateTime("yyyy-MM-dd hh:mm:ss"),
								});
								
								if (userupdated) {
									result.response = {
										status: "success",
										message: lang.ForgetPasswordChangedSuccess.message,
									};
									resolve(result);
								} else {
									params.code = "0003";
									params.status = 401;
									params.error = lang.UpdatingError.message;
									reject(params);
								}
							})
							.catch((err) => {
								

								params.code = "0003";
								params.status = 401;
								params.error = lang.UpdatingError.message;
								reject(params);
							});
					} else {
						params.code = "0003";
						params.status = 401;
						params.error = lang.UserNotFound.message;
						reject(params);
					}
				})
				.catch(function (err) {
					params.code = "0003";
					params.status = 401;
					params.error = err.message;
					reject(params);
				});
		});
		return promise;
	}
}

module.exports = InterfaceUser;
