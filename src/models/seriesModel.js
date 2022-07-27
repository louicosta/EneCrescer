const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  title: { type: String, required: true },
  producer: { type: String, required: true },
  originalBroadcaster: { type: String, required: true },
  durationEpisode: { type: Number, required: true },
  whereWatch: { type: String, required: true },
  ageRating: { type: String },
  genre: { type: String },
  synopsis: { type: String, required: true }
});


const serie = mongoose.model('series', seriesSchema);

module.exports = serie;