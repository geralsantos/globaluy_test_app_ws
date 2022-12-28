"use strict";
function ObjectResponse(params) {
	var dataResponse = {
		code: params.code,
		status: params.status,
	};
	if (typeof params.error != "undefined" ? params.error : false) {
		dataResponse.error = params.error;
	}
	if (typeof params.message != "undefined" ? params.message : false) {
		dataResponse.message = params.message;
	}
	if (typeof params.response != "undefined" ? params.response : false) {
		dataResponse.response = params.response;
	}
	return dataResponse;
}
function getDateTime(format = "dd-MM-yyyy", longdate = "") {
	var date = longdate != "" ? new Date(longdate) : new Date();
	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;
	var min = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;
	var sec = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") + month;
	var day = date.getDate();
	day = (day < 10 ? "0" : "") + day;
	var date_result = format.replace("dd", day);
	date_result = date_result.replace("MM", month);
	date_result = date_result.replace("yyyy", year);
	date_result = date_result.replace("hh", hour);
	date_result = date_result.replace("mm", min);
	date_result = date_result.replace("ss", sec);
	return date_result;
}
module.exports = {
	ObjectResponse,
	getDateTime,
};
