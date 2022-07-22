require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URI = process.env.DATABASE_URI;

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connection established");

  } catch (error) {
    console.log("Error connecting to database");
    console.error(error);
  }
};

module.exports = {
  connect,
};
