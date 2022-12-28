"use strict";
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const route = require("./routes");
require("dotenv").config();
require("./database/index");

//socket io
var httpServer = require("http");
const server = httpServer.createServer(app);

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", route);

app.set("puerto", process.env.PORT || 3001);
server.listen(
	app.get("puerto"),
	process.env.API_HOST || "0.0.0.0",
	function () {
		console.log("Example app listening on port" + app.get("puerto"));
	}
);
