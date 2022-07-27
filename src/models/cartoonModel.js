const mongoose = require("mongoose");

const cartoonSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  title: { type: String, required: true },
  creator: { type: String, required: true },
  originalBroadcaster: { type: String, required: true },
  durationEpisode: { type: Number, required: true },
  whereWatch: { type: String, required: true },
  ageRating: { type: String },
  synopsis: { type: String, required: true }
});


const cartoon = mongoose.model('cartoons', cartoonSchema);

module.exports = cartoon;