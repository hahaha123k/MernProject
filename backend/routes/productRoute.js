const express =require("express");
const { getAllProducts } = require("../controllers/productController");
// const {router} = require("../app");

const router=express.Router();

router.route("/products").get(getAllProducts)

module.exports = router