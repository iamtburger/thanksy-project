var express = require("express");
var router = express.Router();
let Card = require("../models/card.model");

/* GET home page. */
router.get("/", function (req, res, next) {
	Card.find()
		.then((cards) => res.json(cards))
		.catch((err) => res.status(400).json("Error " + err));
});

router.post("/create", function (req, res, next) {
	const imagePath = req.body.imagePath;
	const title = req.body.title;
	const description = req.body.desc;
	const sender = req.body.sender;
	const receiver = req.body.receiver;
	const public = req.body.public;

	const newCard = new Card({
		imagePath,
		title,
		description,
		sender,
		receiver,
		public,
	});

	console.log(newCard);

	newCard
		.save()
		.then((doc) => res.json(doc._id))
		// .then(() => res.json("Card created!"))
		.catch((err) => console.log(err));
	// .catch((err) => res.status(400).json("Error " + err));
});

router.get("/:id", function (req, res, next) {
	Card.findById(req.params.id)
		.then((card) => res.json(card))
		.catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
