const Book = require("../models/bookModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newBook = async (req, res) => {
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
      const { title, author, publishing, pageNumber, ageRating, description } =
        req.body;

      const newBook = new Book({
        title,
        author,
        publishing,
        pageNumber,
        ageRating,
        description,
      });

      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();

    if (!allBooks) {
      return res.status(404).send("Not Found");
    }
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findBookById = async (req, res) => {
  try {
    const findBook = await Book.findById(req.params.id);

    if (findBook == null) {
      return res.status(404).json({ message: "ID book not found" });
    }

    res.status(200).json(findBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findBookByTitle = async (req, res) => {
  try {
    const titleRequest = req.query.title;

    const findBook = await Book.find({
      title: { $regex: titleRequest, $options: "i" },
    });

    if (findBook.length > 0) {
      res.status(200).json(findBook);
    } else {
      return res.status(404).json({ message: "Title not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBookById = async (req, res) => {
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
    const { title, author, publishing, pageNumber, ageRating, description } =
      req.body;

    const findBook = await Book.findById(id);
    if (findBook == null) {
      return res.status(404).json({ message: "Book not found" });
    }

    findBook.title = title || findBook.title;
    findBook.author = author || findBook.author;
    findBook.publishing = publishing || findBook.publishing;
    findBook.pageNumber = pageNumber || findBook.pageNumber;
    findBook.ageRating = ageRating || findBook.ageRating;
    findBook.description = description || findBook.description;

    const savedBook = await findBook.save();
    res.status(200).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteBookById = async (req, res) => {
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
    const findBook = await Book.findByIdAndDelete(id);

    if (findBook == null) {
      return res.status(404).json({ message: `ID book ${id} not found` });
    }

    await findBook.remove();

    res
      .status(200)
      .json({ message: `The book ${findBook.title} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  newBook,
  findAllBooks,
  findBookById,
  findBookByTitle,
  updateBookById,
  deleteBookById,
};
