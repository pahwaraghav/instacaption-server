const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CaptionSchema = new Schema({
  title: { type: String, required: true, max: 500 },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },
});
module.exports = mongoose.model("Caption", CaptionSchema);
