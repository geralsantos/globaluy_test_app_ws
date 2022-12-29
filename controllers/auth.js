"use strict";
const bcrypt = require("bcrypt");
const request = require("../util/request");
const utils = require("../util/utils");
const lang = require("../lang/es");
const services = require("../services");
const config = require("../config/config");

const InterfaceUser = require("../interfaces/user");
const auth = {
	login: (req, res) => {
		request
			.middleware("POST", req, false)
			.then((response) => {
				let email = req.body.email,
					password = req.body.password;
				new InterfaceUser()
					.signinUser(email, password)
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(200).send(err);
			});
	},
	signup: (req, res) => {
		request
			.middleware("POST", req, false)
			.then((response) => {
				new InterfaceUser()
					.signup(req.body)
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(200).send(err);
			});
	},
	forgetpassword: (req, res) => {
		request
			.middleware("POST", req, false)
			.then((response) => {
				let valores = {email : req.body.email}
				new InterfaceUser()
					.forgetPassword(valores)
					.then((response) => {
						return res.status(200).send(response);
					})
					.catch((err) => {
						return res.status(200).send(err);
					});
			})
			.catch((err) => {
				return res.status(200).send(err);
			});
	},
};

module.exports = auth;
