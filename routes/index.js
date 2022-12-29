const express = require("express");
const api = express.Router();
const controllers = require("../controllers");

api.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

api.get("/", (req, res) => {
	res.send("Hello world");
});
//auth
api.post("/auth/login", controllers.auth.login);
api.delete("/auth/logout", (req,res)=>{
	return res.status(200).send({success:true}); 
});
api.post("/auth/signup", controllers.auth.signup);
api.post("/auth/forgetpassword", controllers.auth.forgetpassword);
//products availables
api.get("/products_availables", controllers.products.getProductsAvailables);
api.get("/products", controllers.products.getAllProducts);
api.put("/update_product_available", controllers.products.updateProductAvailable);
api.get("/orders", controllers.products.getOrders);
// api.post("/orders_company", controllers.products.getOrdersCompany);
// api.post("/order_detail", controllers.products.getOrderDetail);
api.post("/send_order", controllers.products.sendOrder);
api.post("/process_order", controllers.products.processOrder);

module.exports = api;
