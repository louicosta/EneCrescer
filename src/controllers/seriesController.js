const Serie = require("../models/seriesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newSerie = async (req, res) => {
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
        producer,
        originalBroadcaster,
        durationEpisode,
        whereWatch,
        ageRating,
        genre,
        synopsis,
      } = req.body;

      const newSerie = new Serie({
        title,
        producer,
        originalBroadcaster,
        durationEpisode,
        whereWatch,
        ageRating,
        genre,
        synopsis,
      });

      const savedSerie = await newSerie.save();
      res.status(201).json(savedSerie);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllSeries = async (req, res) => {
  try {
    const allSeries = await Serie.find();

    if (!allSeries) {
      return res.status(404).send("Not Found");
    }
    res.status(200).json(allSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findSerieById = async (req, res) => {
  try {
    const findSerie = await Serie.findById(req.params.id);

    if (findSerie == null) {
      return res.status(404).json({ message: "ID serie not found" });
    }

    res.status(200).json(findSerie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findSerieByTitle = async (req, res) => {
  try {
    const titleRequest = req.query.title;
    const findSerie = await Serie.find({
      title: { $regex: titleRequest, $options: "i" },
    });

    if (findSerie.length > 0) {
      res.status(200).json(findSerie);
    } else {
      return res.status(404).json({ message: "Title not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findSerieByAge = async (req, res) => {
  try {
    const { age } = req.query;
    const findSerie = await Serie.find({ ageRating: age });
    if (findSerie == null) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(findSerie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSeriesById = async (req, res) => {
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
      producer,
      originalBroadcaster,
      durationEpisode,
      whereWatch,
      ageRating,
      genre,
      synopsis,
    } = req.body;

    const findSerie = await Serie.findById(id);
    if (findSerie == null) {
      return res.status(404).json({ message: "Serie not found" });
    }

    findSerie.title = title || findSerie.title;
    findSerie.producer = producer || findSerie.producer;
    findSerie.originalBroadcaster =
      originalBroadcaster || findSerie.originalBroadcaster;
    findSerie.durationEpisode = durationEpisode || findSerie.durationEpisode;
    findSerie.whereWatch = whereWatch || findSerie.whereWatch;
    findSerie.ageRating = ageRating || findSerie.ageRating;
    findSerie.genre = genre || findSerie.genre;
    findSerie.synopsis = synopsis || findSerie.synopsis;

    const savedSerie = await findSerie.save();
    res.status(200).json(savedSerie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteSeriesById = async (req, res) => {
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
    const findSerie = await Serie.findByIdAndDelete(id);

    if (findSerie == null) {
      return res.status(404).json({ message: `ID serie ${id} not found` });
    }

    await findSerie.remove();

    res.status(200).json({
      message: `The serie ${findSerie.title} was successfully deleted`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  newSerie,
  findAllSeries,
  findSerieById,
  findSerieByTitle,
  findSerieByAge,
  updateSeriesById,
  deleteSeriesById,
};
