const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishing: { type: String, required: true },
  pageNumber: { type: Number, required: true },
  ageRating: { type: String },
  description: { type: String, required: true }
});


const book = mongoose.model('books', bookSchema);

module.exports = book;
