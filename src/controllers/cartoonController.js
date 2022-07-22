const Cartoon = require("../models/cartoonModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newCartoon = async (req, res) => {
   try {

    const authHeader = req.get('authorization')

    if (!authHeader) {
      return res.status(401).send('You need authorization to access')
    }

    const token = authHeader.split(' ') [1]

    await jwt.verify(token, SECRET, async function (err) {

      if (err) {
        return res.status(403).send('Denied access')
    }
     const { title,
             creator,
             originalBroadcaster, 
             durationEpisode, 
             whereWatch, 
             ageRating,
             synopsis } = req.body

     const newCartoon = new Cartoon({
        title,
        creator,
        originalBroadcaster,
        durationEpisode,
        whereWatch,
        ageRating,
        synopsis
              })

              const savedCartoon = await newCartoon.save()
              res.status(201).json(savedCartoon)
            })
           } catch (error) {
             console.error(error)
             res.status(500).json({ message: error.message })
           }
};

const findAllCartoons = async (req, res) => {
   try {
    const allCartoons = await Cartoon.find().populate('cartoons')

    if (err) {
        return res.status(404).send('Not Found')
    }
      res.status(200).json(allCartoons)
} catch (error) {

        res.status(500).json({ message: error.message})
       }
};

const findCartoonById = async(req, res) => {
  try {

    const findCartoon = await Cartoon.findById(req.params.id).populate('cartoons')

     if (findCartoon == null) {
      return res.status(404).json({ message: "ID cartoon not found"})
     }

      res.status(200).json(findCartoon)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
};

const findCartoonByTitle = async(req, res) => {
    try {

      const findCartoon = await Cartoon.findOne(req.query.title).populate('cartoons')

       if (findCartoon == null) {
        return res.status(404).json({ message: "Title not found"})
       }

        res.status(200).json(findCartoon)
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
};

const findCartoonByAge = async (req, res) => {
    try {

        const findCartoon = await Cartoon
          .findOne(req.query.ageRating).populate('cartoons')

         if (findCartoon == null) {
          return res.status(404).json({ message: "Not found"})
         }

          res.status(200).json(findCartoon)
      } catch (error) {
        res.status(500).json({ message: error.message})
      }
};

const updateCartoonById = async (req, res) => {
  try {

    const authHeader = req.get('authorization')

    if (!authHeader) {
      return res.status(401).send('You need authorization')
    }

    const token = authHeader.split(' ') [1]

    await jwt.verify(token, SECRET, async function (err) {

      if (err) {
        return res.status(403).send('Denied access')
    }
  })
    const { id } = req.params
    const { 
        title,
        creator,
        originalBroadcaster, 
        durationEpisode, 
        whereWatch, 
        ageRating,
        synopsis } = req.body

    const findCartoon = await Cartoon.findById(id)
    if (findCartoon == null) {
      return res.status(404).json({ message: "Cartoon not found"})
    }

    findCartoon.title = title || findCartoon.title
    findCartoon.creator = creator || findCartoon.creator
    findCartoon.originalBroadcaster = originalBroadcaster || findCartoon.originalBroadcaster
    findCartoon.durationEpisode = durationEpisode || findCartoon.durationEpisode
    findCartoon.whereWatch = whereWatch || findCartoon.whereWatch
    findCartoon.ageRating = ageRating || findCartoon.ageRating
    findCartoon.synopsis = synopsis || findCartoon.synopsis

    const savedCartoon = await findCartoon.save()
    res.status(200).json(savedCartoon)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
};

const deleteCartoonById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

    if (!authHeader) {
      return res.status(401).send('You need authorization')
    }

    const token = authHeader.split(' ') [1]

    await jwt.verify(token, SECRET, async function (err) {

      if (err) {
        return res.status(403).send('Denied access')
    }
    })
      const { id } = req.params;
      const findCartoon = await Cartoon.findByIdAndDelete(id);
  
      if (findCartoon == null) {
        return res.status(404).json({ message: `ID cartoon ${id} not found` });
      }
  
      await findCartoon.remove();
  
      res.status(200).json({ message: `The cartoon ${findCartoon.title} was successfully deleted` });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = {
   newCartoon,
   findAllCartoons,
   findCartoonById,
   findCartoonByTitle,
   findCartoonByAge,
   updateCartoonById,
   deleteCartoonById
};