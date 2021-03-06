const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
	{
		imagePath: { type: String, required: true },
		title: { type: String, required: true, minLength: 5, maxLength: 25 },
		description: {
			type: String,
			required: true,
			minLength: 10,
			maxLength: 250,
		},
		sender: { type: String, required: false, minLength: 2, maxLength: 60 },
		receiver: { type: String, required: true, minLength: 2, maxLength: 60 },
		public: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
