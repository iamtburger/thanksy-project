var express = require("express");
var router = express.Router();
let Card = require("../models/card.model");

/* GET cards page. */
router.get("/", function (req, res, next) {
	Card.find({ public: true })
		.then((cards) => res.json(cards))
		.catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
