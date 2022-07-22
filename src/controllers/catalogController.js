const Book = require("../models/bookModel");
const Cartoon = require("../models/cartoonModel");
const Movie = require("../models/movieModel");
const Series = require("../models/seriesModel");

const findAllCatalog = async (req, res) => {
  try {
    if (err) {
      return res.status(404).send("Not Found");
    }

    const allCatalog = [await Cartoon.find()]
    allCatalog.push(await Movie.find())
    allCatalog.push(await Series.find())
    allCatalog.push(await Book.find())
    res.status(200).json(allCatalog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllCatalog
};
