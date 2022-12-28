require("dotenv").config();
module.exports = {
	development: {
		username: process.env.DB_USERNAME, // ← Usuario de la DB
		password: process.env.DB_PASSWORD, // ← Contraseña del usuario de la DB
		database: process.env.DB_DATABASE, // ← Nombre de la DB previamente creada
		host: process.env.DB_HOST,
		dialect: "mysql",
		define: { freezeTableName: true },
	},
	test: {
		username: process.env.DB_USERNAME, // ← Usuario de la DB
		password: process.env.DB_PASSWORD, // ← Contraseña del usuario de la DB
		database: process.env.DB_DATABASE, // ← Nombre de la DB previamente creada
		host: process.env.DB_HOST,
		dialect: "mysql",
	},
	production: {
		username: process.env.DB_USERNAME, // ← Usuario de la DB
		password: process.env.DB_PASSWORD, // ← Contraseña del usuario de la DB
		database: process.env.DB_DATABASE, // ← Nombre de la DB previamente creada
		host: process.env.DB_HOST,
		dialect: "mysql",
	},
	system_email: process.env.MAIL_USERNAME,
	bcrypt_salt_rounds: 10,
};
