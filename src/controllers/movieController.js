const Movie = require("../models/movieModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newMovie = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization to access");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
      const {
        title,
        director,
        producer,
        duration,
        whereWatch,
        ageRating,
        synopsis,
      } = req.body;

      const newMovie = new Movie({
        title,
        director,
        producer,
        duration,
        whereWatch,
        ageRating,
        synopsis,
      });

      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();

    if (!allMovies) {
      return res.status(404).send("Not Found");
    }
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findMovieById = async (req, res) => {
  try {
    const findMovie = await Movie.findById(req.params.id);

    if (findMovie == null) {
      return res.status(404).json({ message: "ID movie not found" });
    }

    res.status(200).json(findMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findMovieByTitle = async (req, res) => {
  try {
    const titleRequest = req.query.title;
    const findMovie = await Movie.find({
      title: { $regex: titleRequest, $options: "i" },
    });

    if (findMovie.length > 0) {
      res.status(200).json(findMovie);
    } else {
      return res.status(404).json({ message: "Title not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findMovieByAge = async (req, res) => {
  try {
    const { age } = req.query;
    const findMovie = await Movie.find({ ageRating: age });

    if (findMovie == null) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(findMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovieById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const { id } = req.params;
    const {
      title,
      director,
      producer,
      duration,
      whereWatch,
      ageRating,
      synopsis,
    } = req.body;

    const findMovie = await Movie.findById(id);
    if (findMovie == null) {
      return res.status(404).json({ message: "Movie not found" });
    }

    findMovie.title = title || findMovie.title;
    findMovie.director = director || findMovie.director;
    findMovie.producer = producer || findMovie.producer;
    findMovie.duration = duration || findMovie.duration;
    findMovie.whereWatch = whereWatch || findMovie.whereWatch;
    findMovie.ageRating = ageRating || findMovie.ageRating;
    findMovie.synopsis = synopsis || findMovie.synopsis;

    const savedMovie = await findMovie.save();
    res.status(200).json(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteMovieById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const { id } = req.params;
    const findMovie = await Movie.findByIdAndDelete(id);

    if (findMovie == null) {
      return res.status(404).json({ message: `ID movie ${id} not found` });
    }

    await findMovie.remove();

    res.status(200).json({
      message: `The movie ${findMovie.title} was successfully deleted`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  newMovie,
  findAllMovies,
  findMovieById,
  findMovieByTitle,
  findMovieByAge,
  updateMovieById,
  deleteMovieById,
};
