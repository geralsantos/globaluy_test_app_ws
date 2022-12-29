let jwt = require("jsonwebtoken");
let moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../config/config");
var multer = require("multer");
const path = require("path");
const fs = require("fs");

require("dotenv").config();

function createToken(user) {
	const payload = {
		exp: moment().add(365, "days").unix(),
		sub: user.id,
		profile: user.rol_id,
		name: user.full_name,
		email: user.email,
		iat: moment().unix(),
	};
	return jwt.sign(payload, process.env.TOKEN_SECRET);
}

function decodeToken(token) {
	let params = {};
	const decoded = new Promise((resolve, reject) => {
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) {
				params.error = err;
				params.status = 401;
				params.code = "0003";
				reject(params);
			} else {
				params.response = {
					user: user,
				};
				resolve(params);
			}
		});
	});

	return decoded;
}
function hashing(password) {
	return bcrypt.hashSync(password, config.bcrypt_salt_rounds);
}
function enviarCorreo(to, subject, text, html = false) {
	try {
		// include nodemailer
		const nodemailer = require("nodemailer");
		// declare vars
		let fromMail = process.env.MAIL_USERNAME;

		// auth
		const transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			secure: false,
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
			},
		});

		// email options
		let mailOptions = {
			from: fromMail,
			to: to,
			subject: subject,
		};
		if (html) {
			mailOptions.html = text;
		} else {
			mailOptions.text = text;
		}
		// send email
		const promise = new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, response) => {
				if (error) {
					
					reject({});
				} else {
					resolve({});
					
				}
			});
		});
		return promise;
	} catch (error) {
		
	}
}
function multerDiskStorage(dest = "", filename_ = "") {
	return multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, __dirname + "/../" + process.env.ASSETS_PUBLIC + dest);
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + path.extname(file.originalname));
		},
	});
}
function multerImageFilter(req, file, cb) {
	// Accept images only
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
		req.fileValidationError = "Only image files are allowed!";
		return cb(new Error("Only image files are allowed!"), false);
	}
	cb(null, true);
}
function uploadFilePerfil(dest = "", filename_ = "") {
	return multer({
		storage: multerDiskStorage(dest, filename_),
		fileFilter: multerImageFilter,
	});
}
function deleteFile(path) {
	try {
		fs.unlinkSync(
			path
		);
		//file removed
	} catch (err) {
		console.error(err);
	}
}
module.exports = {
	createToken,
	decodeToken,
	enviarCorreo,
	hashing,
	uploadFilePerfil,
	multerDiskStorage,
	deleteFile,
};
