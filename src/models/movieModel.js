const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  title: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  duration: { type: Number, required: true },
  whereWatch: { type: String, required: true },
  ageRating: { type: String },
  synopsis: { type: String, required: true },
  favorite: { type: Boolean }
});


const movie = mongoose.model('movies', movieSchema);

module.exports = movie;
