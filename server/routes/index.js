var express = require("express");
var router = express.Router();
let Card = require("../models/card.model");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

module.exports = router;
